import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import RegisterForm from '../bootstrapModals/RegisterForm'
import LogInForm from '../bootstrapModals/LogInForm'
import regUser from '../../service/registerUser'

class LogAndRegister extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'log',
            error: ""
        };
    }

    registerUser = (data) => {
        // console.log(data);
        regUser(data)
            .catch(e => {
                this.setState({
                    key: 'register',
                    error: e.message
                })
                console.log(e)
            })
            .then(
                this.setState({
                    key: 'log'
                }))

        // console.log(regUser(data));
        // this.setState({
        //     key: 'log'
        // })
    }

    render() {
        return (
            <Tabs className="tabsReg"
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="log" title="Log In" >
                    <div className="row">
                        <div className="col-5 loginparagraf">
                            <h3><b>BiTBook Login</b></h3>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quas at. Ipsa, sunt ad aut quisquam exercitationem consectetur dolorem iusto illo molestiae dolores libero mollitia corrupti voluptatibus, veniam minus.
                        </p>
                        </div>
                        <div className="col-6">
                            <LogInForm info={this.props} />
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="register" title="Registration">
                    <div className="row">
                        <div className="col-5 loginparagraf">
                            <h3><b>BiTBook Register</b></h3>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis quas at. Ipsa, sunt ad aut quisquam exercitationem consectetur dolorem iusto illo molestiae dolores libero mollitia corrupti voluptatibus, veniam minus.
                        </p>
                        </div>
                        <div className="col-6">
                            <RegisterForm regUser={this.registerUser} errMsg={this.state.error} />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default LogAndRegister

