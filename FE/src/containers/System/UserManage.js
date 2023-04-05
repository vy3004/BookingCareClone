import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsersService,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { notification } from "antd-notifications-messages";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenUserModal: false,
      isOpenEditUserModal: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    let response = await getAllUsersService("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUser: response.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenUserModal: true,
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        notification({
          type: "error",
          title: "Add new user",
          message: response.errMessage,
        });
      } else {
        await this.getAllUsers();
        this.setState({ isOpenUserModal: false });
        notification({
          type: "success",
          title: "Add new user",
          message: response.errMessage,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUserService(user.id);
      if (response && response.errCode !== 0) {
        notification({
          type: "error",
          title: "Delete user",
          message: response.errMessage,
        });
      } else {
        await this.getAllUsers();
        this.setState({ isOpenModal: false });
        notification({
          type: "success",
          title: "Delete user",
          message: response.errMessage,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEditUser = (user) => {
    this.setState({
      isOpenEditUserModal: true,
      userEdit: user,
    });
  };

  editUser = async (data) => {
    try {
      let response = await editUserService(data);
      if (response && response.errCode !== 0) {
        notification({
          type: "error",
          title: "Edit user",
          message: response.errMessage,
        });
      } else {
        await this.getAllUsers();
        this.setState({ isOpenEditUserModal: false });
        notification({
          type: "success",
          title: "Edit user",
          message: response.errMessage,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  toggleUserModal = () => {
    this.setState({
      isOpenUserModal: !this.state.isOpenUserModal,
    });
  };

  toggleEditUserModal = () => {
    this.setState({
      isOpenEditUserModal: !this.state.isOpenEditUserModal,
    });
  };

  render() {
    let arrUser = this.state.arrUser;
    return (
      <div className="container-user">
        <div className="table-wrapper mt-5">
          <div className="table-title">
            <h2>
              Manage <b>Users</b>
            </h2>
            <button className="btn-add" onClick={() => this.handleAddNewUser()}>
              <i className="fas fa-plus"></i> Add New User
            </button>
          </div>
          <table className="table table-striped table-hover">
            <thead className="table-header">
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUser &&
                arrUser.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUser(item)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <ModalUser
          isOpen={this.state.isOpenUserModal}
          toggleUserModal={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenEditUserModal && (
          <ModalEditUser
            isOpen={this.state.isOpenEditUserModal}
            toggleUserModal={this.toggleEditUserModal}
            currentUser={this.state.userEdit}
            editUser={this.editUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
