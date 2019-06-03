import React, { Component } from 'react';
import fetchAdmin from '../service/fetchAdmin';
import EditProfile from '../components/bootstrapModals/EditPofile'
import { ADMIN_ID } from '../shared/mainVaribales'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: null,
            adminPosts: 0,
            adminComments: 0,
            userID: ADMIN_ID,
        }
    }

    componentDidMount() {
        this.getAdmin();
    }

    editProfileInfo = (prop) => {
        this.setState(prevState => ({
            admin: {
                ...prevState.admin,
                name: prop.fullName,
                avatar: prop.avatar,
                about: {
                    bio: prop.bio,
                    job: prop.job,
                    countryCode: prevState.admin.about.countryCode
                }
            }
        }))
    }

    getAdmin = () => {
        fetchAdmin(this.state.userID)
            .then((admin) => {
                this.setState({
                    admin: admin,
                    adminPosts: admin.posts,
                    adminComments: admin.comments,
                }
                )
            })
    }

    numOfPosts = () => {
        if (typeof (this.state.adminPosts) == 'string')
            return 'no '
        else
            return this.state.adminPosts.length
    }

    numOfComments = () => {
        if (typeof (this.state.adminComments) == 'string')
            return 'no '
        else
            return this.state.adminComments.length
    }

    render() {
        if (this.state.admin == null) {
            return <h3>Loading...</h3>
        }
        else {
            return (
                <>
                    {/* <ProfileComp avatar={this.state.admin.avatar} name={this.state.admin.name} editProfileInfo={this.editProfileInfo} bio={this.state.admin.about.bio} job={this.state.admin.about.job}
                        countryCode={this.state.admin.about.countryCode} adminPosts={this.state.adminPosts} adminComments={this.state.adminComments} /> */}
                    <div className="profile">
                        <img src={this.state.admin.avatar} alt="avatar" />
                        <h3>{this.state.admin.name}</h3>
                        <EditProfile changeAdmin={this.editProfileInfo} admin={this.state.admin} />
                        <p></p>
                        <div>
                            <h5>About</h5>
                            <p><b>Bio:</b> {this.state.admin.about.bio}</p>
                            <p><b>Job:</b> {this.state.admin.about.job}</p>
                            <p><b>Country Code: </b>{this.state.admin.about.countryCode}</p>
                        </div>
                        <div>
                            <span>{this.numOfPosts()} posts</span>
                            <span>{this.numOfComments()} comments</span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Profile