import React, {Component } from 'react'

class MessageForm extends Component
{
    render ()
    {
        return(
            <form className = "MessageForm">
            <input 
                autofocus
                required
                type = "text"
                name = "body"
                placeholder = "Type a message..."
            />
            <button type = "submit">
                Send
            </button>
            </form>
        )   
    }
}

expor default MessageForm