import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Validation } from '../../service/ValidateRegisterForm'

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            pass: '',
            confirmPass: ''
        }
    }

    hendleInput = (event) => {
        const type = event.target.name;
        this.setState({
            [type]: event.target.value
        })
    }

    onRegister = () => {
        if ((Validation.checkEmail(this.state)) &&
            (Validation.checkNameAndPassword(this.state))) {
            this.props.regUser(this.state)
        }
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="11">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onInput={this.hendleInput}
                                    name="name"
                                    required

                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    name="email"
                                    required
                                    onInput={this.hendleInput}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    name="pass"
                                    required
                                    onInput={this.hendleInput}
                                />
                                <MDBInput
                                    label="Confirm your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    name="confirmPass"
                                    required
                                    onInput={this.hendleInput}
                                />
                            </div>
                            <div className="text-center">
                                <p className="errorMsg">{this.props.errMsg}</p>
                                <MDBBtn color="primary" onClick={this.onRegister}>Register</MDBBtn>

                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }
};

export default RegisterForm;