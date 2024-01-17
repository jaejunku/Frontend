import React from 'react';

interface PostProps {
    username: string;
    timestamp: string;
    message: string;
}

function Post({ username, timestamp, message }: PostProps) {
    return (
        <section className="post" id="post-examp">
            <p className="post-metadata">
                <strong className="username">{username}</strong> - <time className="timestamp">{timestamp}</time>
            </p>
            <p>{message}</p>
        </section>
    );
}

export default Post;
