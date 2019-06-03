import React from 'react';

const FloatingButton = (props) => {

    return (
        <div class="floating-container">
            <div class="floating-button">+</div>
            <div class="element-container">
                <span onClik={props.createPost} class="float-element tooltip-left">
                    <i class="fas fa-video"></i>
                </span>
                <span class="float-element">
                    <i class="fas fa-image"></i>
                </span>
                <span class="float-element">
                    <i class="fas fa-align-left"></i>
                </span>
            </div>
        </div>
    )
}

export default FloatingButton