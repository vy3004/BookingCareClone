import db from "../models/index";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "password", "roleId"],
          raw: true,
        });
        if (user) {
          let checkPassword = await bcrypt.compareSync(password, user.password);
          if (checkPassword) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password!";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User's not found!";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage =
          "Your email doesn't exist in system. Please try another email!";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check email is exist?
      let isExist = await checkUserEmail(data.email);
      if (isExist) {
        resolve({
          errCode: 1,
          errMessage: "Your email is already in use. Please try another email!",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
          phoneNumber: data.phoneNumber,
          address: data.address,
          gender: data.gender === "1" ? true : false,
          roleId: data.roleId,
          positionId: data.positionId,
        });
        resolve({
          errCode: 0,
          errMessage: "OK",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

let editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          id: data.id,
        },
        raw: false,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Edit user successfully!",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "User does not exist!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: false,
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: "User does not exist!",
        });
      }
      await user.destroy();
      resolve({
        errCode: 0,
        errMessage: "The user has been deleted!",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  editUser: editUser,
  deleteUser: deleteUser,
};
