import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div 
        className="MessageList"
        style = {styles.messageList}
    >
        <div styles = {styles.roomAnnouncement}>
          <h3 styles = {styles.h3}>
            #general
          </h3>
          <p>This is the very beginning of the #general room.</p>
        </div>


      {
        props.messages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))
      }
    </div>
  )
}

const styles = 
{
  messageList: 
  {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  roomAnnouncement: 
  {
    padding: '2rem 1rem',
  },

  h3:
  {
    fontSize: '1.5rem',
  }
}


export default MessageList