import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class SortPosts extends Component {

    render() {
        return (
            <DropdownButton
                alignRight
                title="Sort Feed"
                id="dropdown-menu-align-right"
            >
                <Dropdown.Item eventKey="1" onClick={this.props.VideoPost}>Video</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.props.ImagePost}>Image</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={this.props.TextPost}>Text</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={this.props.AllPosts}>All Posts</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default SortPosts