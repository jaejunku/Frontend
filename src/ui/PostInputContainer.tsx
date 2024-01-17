import React from 'react';

function PostInputContainer() {
    return (
        <section className="post-input-container-main">
            <textarea className="post-input" id="post-input" placeholder="Type your message here..."></textarea>
            <button type="button" id="post-button">Post</button>
        </section>
    );
}

export default PostInputContainer;
