import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            this.props.comments.length ? this.props.comments.map(element => {
                return (
                    <div key={element.id} className="card">
                        <div className="row">
                            <h3 className="col-4 commentOne">{element.user.name.first}</h3>
                            <img className="col-4 comm" src={element.user.avatarUrl} />
                        </div>
                        <div className="card-body">
                            <p className="card-text">{element.body}</p>
                        </div>
                        <button type="button" className="btn btn-primary btn-sm col-2" id={element.id} onClick={this.props.onDeleteComment}>delete</button>
                    </div>
                )
            }) : <p>No comments</p>

        )
    }
}
export default Comments