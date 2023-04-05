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
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
      gender: "1",
      address: "",
    };

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      // reset state
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
        phoneNumber: "",
        gender: "1",
        address: "",
      });
    });
  }

  componentDidMount() {}

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

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid) {
      this.props.createNewUser(this.state);
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
          Create a new user
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
                onChange={(event) => this.handleOnChangeInput(event, "email")}
                value={this.state.email}
                valid={
                  this.state.email && this.state.email.match(/^(.+)@(.+)$/g)
                    ? true
                    : false
                }
                invalid={
                  this.state.email && !this.state.email.match(/^(.+)@(.+)$/g)
                    ? true
                    : false
                }
              />
              <Label>Email</Label>
            </div>
            <Row>
              <Col>
                <div className="form-floating mb-4 mt-3">
                  <Input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "password")
                    }
                    value={this.state.password}
                    valid={this.state.password ? true : false}
                  />
                  <Label>Password</Label>
                </div>
              </Col>
              <Col>
                <div className="form-floating mb-4 mt-3">
                  <Input
                    type="password"
                    className="form-control"
                    placeholder="Re-password"
                    onChange={(event) =>
                      this.handleOnChangeInput(event, "rePassword")
                    }
                    value={this.state.rePassword}
                    valid={
                      this.state.rePassword &&
                      this.state.rePassword === this.state.password
                        ? true
                        : false
                    }
                    invalid={
                      this.state.rePassword &&
                      this.state.rePassword !== this.state.password
                        ? true
                        : false
                    }
                  />
                  <Label>Re-password</Label>
                </div>
              </Col>
            </Row>
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
            onClick={() => this.handleAddNewUser()}
          >
            Add
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
