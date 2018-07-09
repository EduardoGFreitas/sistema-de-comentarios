import React, { Component } from 'react';

import Comment from './Comment'

class Comments extends Component {
    renderComment(key, comment) {
        return (
            <Comment className="is-12 is-light" key={key} comment ={comment}/>
                 
            
        )
    }
    render() {
        return (


                <div className="content is-primary">
                    {
                        Object.keys(this.props.comments).map(key => this.renderComment(key, this
                            .props.comments[key]))
                    }
                </div>


        );
    }
}

export default Comments;