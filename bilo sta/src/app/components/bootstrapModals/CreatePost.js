import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class CreatePost extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShowVideo = this.handleShowVideo.bind(this);
        this.handleShowImg = this.handleShowImg.bind(this);
        this.handleShowTxt = this.handleShowTxt.bind(this);

        this.state = {
            showVideo: false,
            showImg: false,
            showTxt: false,
            post: {
                videoUrl: '',
                imageUrl: '',
                text: '',
            }
        };
    }


    handleClose = () => {
        this.setState({
            showVideo: false,
            showImg: false,
            showTxt: false,
            post: {
                videoUrl: '',
                imageUrl: '',
                text: '',
            }
        });
    }

    handleCloseVideo = () => {
        const data = {
            userId: 2,
            sid: Math.floor(Math.random() * 100000),
            type: 'video',
            videoUrl: this.state.post.videoUrl
        }
        if (this.state.post.videoUrl.includes('youtube.com/embed')) {
            this.props.getNewPost(data)
            this.handleClose()
        }
        else {
            alert("Link must be from \n'youtube.com' and in embed mode")
        }
    }

    handleCloseImage = () => {
        const data = {
            userId: 2,
            sid: Math.floor(Math.random() * 100000),
            type: 'image',
            imageUrl: this.state.post.imageUrl
        }
        if ((this.state.post.imageUrl.includes('http')) || (this.state.post.imageUrl.includes('https'))) {
            this.props.getNewPost(data)
            this.handleClose()
        }
        else {
            alert("Invalid link, please check it and try again")
        }
    }

    handleCloseText = () => {
        const data = {
            userId: 2,
            sid: Math.floor(Math.random() * 100000),
            type: 'text',
            text: this.state.post.text
        }
        if (this.state.post.text !== '') {
            this.props.getNewPost(data)
            this.handleClose()
        }
        else {
            alert("Empty string, please insert some text")
        }
    }

    handleShowVideo() {
        this.setState({ showVideo: true });
    }

    handleShowImg() {
        this.setState({ showImg: true });
    }

    handleShowTxt() {
        this.setState({ showTxt: true });
    }

    inputChange = (event) => {
        const value = event.target.value
        const type = event.target.name
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                [type]: value.replace("watch?v=", "embed/"),
            }
        }));
        console.log(this.state.post);
    }

    render() {
        return (
            <div className='newPost'>
                <div className="floating-container">
                    <div className="floating-button">+</div>
                    <div className="element-container">
                        <span onClick={this.handleShowVideo} className="float-element tooltip-left">
                            <i className="fas fa-video"></i>
                        </span>
                        <span onClick={this.handleShowImg} className="float-element">
                            <i className="fas fa-image"></i>
                        </span>
                        <span onClick={this.handleShowTxt} className="float-element">
                            <i className="fas fa-align-left"></i>
                        </span>
                    </div>
                </div>

                <Modal show={this.state.showVideo} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New video Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="post-input">
                            <p>Video url:</p>
                            <input type="url" name='videoUrl' onChange={this.inputChange}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleCloseVideo}>
                            Post
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showImg} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New image Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="post-input">
                            <p>Image url:</p>
                            <input type="url" name='imageUrl' onChange={this.inputChange}></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleCloseImage}>
                            Post
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showTxt} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New text Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="post-input row">
                            <p className="col-11">Text:</p>
                            <textarea className="col-11" type="text" name='text' rows="5" onChange={this.inputChange}></textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleCloseText}>
                            Post
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CreatePost