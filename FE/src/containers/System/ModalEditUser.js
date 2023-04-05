import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Col,
  Label,
  Input,
  Row,
} from "reactstrap";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "1",
      address: "",
    };
  }

  componentDidMount() {
    console.log(this.props.currentUser);
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleUserModal();
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValue = true;
    let arrInput = Object.keys(this.state);
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValue = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValue;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        className="modal-user-container"
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Edit users
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col>
                <div className="form-floating mb-4 mt-3">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "firstName")
                    }
                    value={this.state.firstName}
                    valid={this.state.firstName ? true : false}
                  />
                  <Label>First name</Label>
                </div>
              </Col>

              <Col>
                <div className="form-floating mb-4 mt-3">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "lastName")
                    }
                    value={this.state.lastName}
                    valid={this.state.lastName ? true : false}
                  />
                  <Label>Last name</Label>
                </div>
              </Col>
            </Row>
            <div className="form-floating mb-4 mt-3 position-relative">
              <Input
                type="text"
                className="form-control"
                placeholder="Enter email"
                disabled
                value={this.state.email}
              />
              <Label>Email</Label>
            </div>
            <Row>
              <Col>
                <div className="form-floating mb-4 mt-3">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "phoneNumber")
                    }
                    value={this.state.phoneNumber}
                    valid={
                      this.state.phoneNumber &&
                      this.state.phoneNumber.match(
                        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
                      )
                        ? true
                        : false
                    }
                    invalid={
                      this.state.phoneNumber &&
                      !this.state.phoneNumber.match(
                        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
                      )
                        ? true
                        : false
                    }
                  />
                  <Label>Phone number</Label>
                </div>
              </Col>
              <Col>
                <div className="form-group mb-4 mt-3">
                  <Input
                    type="select"
                    style={{ padding: "1rem" }}
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "gender")
                    }
                    value={this.state.gender}
                  >
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </Input>
                </div>
              </Col>
            </Row>

            <div className="form-floating mb-3 mt-3">
              <Input
                type="text"
                className="form-control"
                placeholder="Enter address"
                onChange={(event) => this.handleOnChangeInput(event, "address")}
                value={this.state.address}
                valid={this.state.address ? true : false}
              />
              <Label for="address">Address</Label>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSaveUser()}
          >
            Save
          </Button>{" "}
          <Button
            color="danger"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
