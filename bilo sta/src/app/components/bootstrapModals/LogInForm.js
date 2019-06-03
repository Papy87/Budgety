import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import logInUser from "../../service/logInUser"


class LogInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logInInfo:
            {
                email: "",
                password: "",
            },
            errorMsg: ""
        }
    }

    logInInput = (event) => {
        const value = event.target.value
        const type = event.target.name;
        this.setState(prevState => ({
            logInInfo: {
                ...prevState.logInInfo,
                [type]: value
            }
        })

        )
    }

    logInOnClick = () => {
        logInUser(this.state.logInInfo)
            .then(() => {
                this.props.info.history.push('/feed')
            })
            .catch(e => this.setState({
                errorMsg: e
            }))
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="11">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onInput={this.logInInput}
                                    name="email"
                                />
                                <MDBInput
                                    label="Type your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onInput={this.logInInput}
                                    name="password"
                                />
                                <span className="errorMsg">{this.state.errorMsg}</span>
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={this.logInOnClick}>Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
};

export default LogInForm;