import React, { Component } from 'react';
import fetchAdmin from '../service/fetchAdmin';
// import { Link } from "react-router-dom"

class SingleProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: null,
            adminPosts: 0,
            adminComments: 0,
        }
    }

    componentDidMount() {
        // console.log(this.props);
        this.getAdmin();
    }


    getAdmin = () => {
        let userID = this.props.match.params.id
        fetchAdmin(userID)
            .then((admin) => {
                this.setState({
                    admin: admin,
                    adminPosts: admin.posts,
                    adminComments: admin.comments,
                }
                )
                // console.log(admin);
            })
    }

    render() {
        if (this.state.admin == null) {
            return <h3>Loading...</h3>
        }
        else {
            return (
                <>
                    <div className="profile">
                        <img src={this.state.admin.avatar} alt="avatar" />
                        <h3>{this.state.admin.name}</h3>
                        <p></p>
                        <div>
                            <h5>About</h5>
                            <p><b>Bio:</b> {this.state.admin.about.bio}</p>
                            <p><b>Job:</b> {this.state.admin.about.job}</p>
                            <p><b>Country Code: </b>{this.state.admin.about.countryCode}</p>
                        </div>
                        <div>
                            <span>{this.state.adminPosts} posts</span>
                            <span>{this.state.adminComments} comments</span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default SingleProfile