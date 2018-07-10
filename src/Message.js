import React from 'react'
import Avatar from './Avatar'
import Metadata from './MetaData'

const Message = ({ message }) =>
{
    return(
        <div className="Message">
          <Avatar user = {message.user} />
          <div className="details">
            <Metadata message = {message}/>
            <div className="body">
            {message.body}
            </div>
          </div>
        </div>
    )
}



export default Message