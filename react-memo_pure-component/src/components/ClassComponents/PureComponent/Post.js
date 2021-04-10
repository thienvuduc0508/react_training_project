import React, { PureComponent } from 'react'

export default class Post extends PureComponent {
    // extend PureComponent
    render() {
        console.log('Post render');
        // Post not re-render when Like change
        return (
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur aspernatur unde, velit similique quia exercitationem quisquam libero totam illum nostrum! Libero in, dolores dolorem quibusdam similique eum adipisci neque.</p>
            </div>
        )
    }
}
