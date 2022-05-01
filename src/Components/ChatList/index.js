import React from 'react'
import ChatListItem from '../ChatListItem'

const ChatList = ({data, chatBoxHandler,chatData}) => {
    // console.log(data.data)
  return (
      data && data.map((item)=>
      <ChatListItem
      item = {item}
      chatBoxHandler = {chatBoxHandler}
      chatData={chatData}
        />

      )


  )
}

export default ChatList