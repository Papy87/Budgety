import React, { Component } from 'react';
import EditProfile from '../components/bootstrapModals/EditPofile'

class ProfileComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="profile">
                <img src={this.props.avatar} alt="avatar" />
                <h3>{this.props.name}</h3>
                <EditProfile changeAdmin={this.editProfileInfo} />
                <p></p>
                <div>
                    <h5>About</h5>
                    <p><b>Bio:</b> {this.props.bio}</p>
                    <p><b>Job:</b> {this.props.job}</p>
                    <p><b>Country Code: </b>{this.props.countryCode}</p>
                </div>
                <div>
                    <span>{this.props.adminPosts} posts</span>
                    <span>{this.props.adminComments} comments</span>
                </div>
            </div>
        )
    }

}
export default ProfileComp