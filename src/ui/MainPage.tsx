import React from 'react';
import Post from './Post';
import PostInputContainer from './PostInputContainer';
import './MainPage.css';

function MainPage() {
    return (
        <section className="main-container">
            <header className="main-header">
                <h1 className="title">Warmup Project Team B</h1>
            </header>
            <section className="main-content">
                <aside className="sidebar"></aside>
                <section className="chat-content">
                    <h1 className="chat-name" id="current-chat">
                        Current Chat Name
                    </h1>
                    <section className="posts-container">
                        <Post username='1' timestamp='2000' message='haha'/>
                    </section>
                    <PostInputContainer />
                </section>
            </section>
        </section>
    );
}

export default MainPage;
