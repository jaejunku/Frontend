import React from 'react';

// Handle opening a room
function OpenRoomHandler(roomName : string) {
    // Make an API request
    
    // To cause the chatbox to change, we need to modify a state that chatbox relies on
    // The API could return the room data and we could modify the room data and 
    //      force chatbox to display the room data.
    // Alternatively, we could have the open handler simply redirect to a URL... <maybe more complicated>
}

// Handle deleting a room
function DeleteRoomHandler(roomName : string) {
    // Make an API request to delete the room
    // Update the list of rooms state so it doesn't show up anymore in the UI
}

export default function Room({roomName} : {roomName : string}) {
    return (
        <>
            <button onClick={() => OpenRoomHandler(roomName)}>{roomName}</button>
            <button onClick={() => DeleteRoomHandler(roomName)}>delete</button>
        </>
    )
}