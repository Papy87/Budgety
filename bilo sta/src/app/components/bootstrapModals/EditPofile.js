import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class EditProfile extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);

        this.state = {
            show: false,
            upAdmin: {
                fullName: '',
                avatar: '',
                bio: '',
                job: ''
            },
        };
        this.getUpAdmin = this.getUpAdmin.bind(this);
    }

    setPrevAdminData = () => {
        this.setState({
            upAdmin: {
                fullName: this.props.admin.name,
                avatar: this.props.admin.avatar,
                bio: this.props.admin.about.bio,
                job: this.props.admin.about.job,
            }
        })
    }

    getUpAdmin = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState(prevState => ({
            upAdmin: {
                ...prevState.upAdmin,
                [name]: value
            }
        }));
        // console.log(this.state.upAdmin.fullName);
    }

    handleClose() {
        this.setState({
            show: false,
            upAdmin: {
                fullName: '',
                avatar: '',
                bio: '',
                job: ''
            }
        });
    }

    handleEditClose() {
        this.props.changeAdmin(this.state.upAdmin);
        this.setState({ show: false });
    }

    handleShow() {
        this.setPrevAdminData();
        this.setState({
            show: true
        });
    }

    // showUrlInput = () => {
    //     const element = { getElementById('url') }
    // }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Edit profile
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="row editProfile">
                            <div className="col-5">
                                <img src="http://tedaruk.az/Content/UI/images/user-512.png" alt="" />
                                <input type="url" name="avatar" onChange={this.getUpAdmin} placeholder={this.state.upAdmin.avatar} onClick={this.showUrlInput} />
                            </div>
                            <div className="col-7"><input type="text" name="fullName" onChange={this.getUpAdmin} placeholder={this.state.upAdmin.fullName} /></div>
                            <div className="col-12 ">
                                <input type="text" name="bio" onChange={this.getUpAdmin} placeholder={this.state.upAdmin.bio} />
                                <input className="job" type="text" name="job" onChange={this.getUpAdmin} placeholder={this.state.upAdmin.job} />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.setState({ show: false }) }}>
                            CLOSE
                    </Button>
                        <Button variant="primary" onClick={this.handleEditClose}>
                            UPDATE
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EditProfile