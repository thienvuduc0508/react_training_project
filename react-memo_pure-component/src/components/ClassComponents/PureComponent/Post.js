import React, { PureComponent } from 'react'

export default class Post extends PureComponent {
    // extend PureComponent
    render() {
        console.log('Post render');
        // Post not re-render when Like change
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
