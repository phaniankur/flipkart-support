import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({item, chatBoxHandler, chatData}) => {

  return (
    <div className={chatData && chatData.id === item.id? "selected__main" : "container__main"} onClick={() => chatBoxHandler(item.id)}>
        <div className="flex--left">
          <div className="prod--img">
            <img src={item.imageURL} alt="card-img" />
          </div>
          <div className="title--container">
            <h4 className="chat--title">{item.title}</h4>
            <p className="chat--orderId">Order Id: {item.orderId}</p>
            {/* <p className="card-content-text">
              Lorem ipsum dolor sit amet consectetur.
            </p> */}
          </div>
        </div>
        <div className="flex--right">
          {/* <p>{displayDate}</p> */}
          <p>{new Date(item.latestMessageTimestamp).toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		})}</p>
        </div>
      </div>
  )
}

export default ChatListItem