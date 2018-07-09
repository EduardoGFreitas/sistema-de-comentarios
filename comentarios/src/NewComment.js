import React, { Component } from 'react';

class NewComment extends Component {
    constructor(props) {
        super(props)

        this.handleEnter = this.handleEnter.bind(this)

    }

    handleEnter(event) {

        if (event.keyCode === 13) {

            this.props.postNewComment({
                comment: this.refs.comment.value
            })

            this.refs.comment.value = ''

            event.preventDefault()
        }
       

    }
    render() {
        return (
            <div className='columns'>
                <textarea ref='comment' className="textarea is-primary" type="text"
                    onKeyUp={this.handleEnter} placeholder="Primary textarea"></textarea>
            </div>
        );
    }
}

export default NewComment;
