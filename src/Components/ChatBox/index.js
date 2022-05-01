import React from 'react'
import './ChatBox.css'

const ChatBox = ({chatData}) => {
  console.log(chatData)
  return (
    <div className='chatbox--main'>
      <div className='header--container'>
        <div className='prod--img'>
          <img src={chatData.imageURL}/>
        </div>
        <h1>{chatData.title}</h1>
      </div>
      <div className='chat--body'>
        Send a Message to start chatting
      </div>
      <div className='chat--footer'>
          <input
        className='input--field'
        placeholder='Type a Message'/>
        <button className='sendButton'>SEND</button>


      </div>
    </div>
  )
}

export default ChatBox