import React from 'react'
import Message from './Message'

const MessageList = () => 
{
    const message =
    [
         {
                
                id: 1,
                user: 
                {
                    uid: 'asdfg',
                    displayName : 'Luis',
                    email: 'lraygada@pnw.edu',
                },
                body: 'yeet',
                
                
                
                id: 2,
                user:
                {
                    uid: 'asdfgh',
                    displayName: 'LuisP',
                    email: 'raygadas.luis@gmail.com',
                },
                body: 'This guy is so annoying. I hate my job',
                
        }
    ]
    return (
        <div className = "MessageList">
        message.map(msg => (
        <Message message  = {msg}/>
        ))
        </div>
    )
}

export default MessageList