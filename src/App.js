import './App.css';
import ChatList from './Components/ChatList';
import ChatBox from './Components/ChatBox';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
const [data, setData] = useState([])
const [chatStatus, setChatStatus] = useState(false)
const [chatData, setChatData] = useState('')

const chatBoxHandler = (id) => {
  setChatStatus(true);
  const currentChatData = data.find((item) => item.id === id);
  setChatData(currentChatData);
};

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
    .then(res=> setData(res.data))
  }, [])


  return (
    <>
    {chatStatus?
    <div className="App">
      <div className='mainBox' style={{width: '80%'}}>
        <ChatList
          data={data}
          chatBoxHandler={chatBoxHandler}
          chatData={chatData}
        />
      </div>

        <ChatBox
        chatData={chatData}/>
    </div>
    :
    <div className="App">
      <div style={{width: '100%'}}>
        <ChatList
          data={data}
          chatBoxHandler={chatBoxHandler}
        />
      </div>
    </div>}
    </>
  )}
export default App;
