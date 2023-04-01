import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {};

  async componentDidMount() {
    let response = await getAllUser("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUser: response.users,
      });
    }
  }

  render() {
    let arrUser = this.state.arrUser;
    return (
      <div className="container-user">
        <div className="table-wrapper mt-5">
          <div class="table-title">
            <h2>
              Manage <b>Users</b>
            </h2>
            <button className="btn-add">
              <i className="fas fa-user-plus"></i> Add New User
            </button>
          </div>
          <table class="table table-striped table-hover">
            <thead className="table-header">
              <tr>
                <th>Email</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUser &&
                arrUser.map((item) => {
                  return (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-delete">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
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
