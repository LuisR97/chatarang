import React, {Component} from 'react'
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

import base from './base'


class Chat extends Component

{
    constructor()
    {
        super()

        this.state =
        {
            messages : [],
        }
    }

    componentWillUnmount()
    {
        base.removeBinding(this.messagesRef)
    }

    componentDidMount()
    {    
        this.messagesRef = base.syncState(
            'messages/general',
            {
                context: this, 
                state: 'messages',
                asArray: true,
            }
        )
    }

    addMessage = (body) => 
    {
        const messages = [...this.state.messages]

        const user = this.props.user
        
        messages.push(
            {
                id: `${user.uid}-${Date.now()}`,
                user,
                body,
                
              //Saying these lines vvv  
            } //body = body: body
              //messages : messages = messages
        )
        this.setState({messages:messages})

    }


    render()
    {
        return (
            <div 
            className="Chat"
            style = {styles}
            >
                <ChatHeader />
                <MessageList messages = {this.state.messages} />
                <MessageForm addMessage={this.addMessage} />
            </div>
        )
    }
}

const styles = 
{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}

export default Chat