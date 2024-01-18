import React from 'react';
import Post from './Post';
import PostInputContainer from './PostInputContainer';
import './MainPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function MainPage({userName} : {userName : string}) {
    // Basic redirect functionality
    const navigate = useNavigate();

    // The current room
    const [currentRoom, setCurrentRoom] = useState('No Room');

    // List of rooms
    // We want to map room data into room react components

    // List of posts
    // We want to map post data (a comment) into react components

    // Additional TODOs: send message, send non-text message,
    // receive non-text message, automatic or manual retrieval.

    if (userName === ""){
        return (
            <>
                <h1>Not logged in</h1>
                <Link to="/">Please log in</Link>
            </>
        )
    }


    return (
        <section className="main-container">
            <header className="main-header">
                <h1 className="title">Warmup Project Team B</h1>
                <p>user: {userName}</p>
            </header>
            <section className="main-content">
                <aside className="sidebar">
                    


                </aside>
                <section className="chat-content">
                    <h1 className="chat-name" id="current-chat">
                        {currentRoom}
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
