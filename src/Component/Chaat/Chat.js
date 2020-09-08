import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../Firebase";
import Message from "../Message/Message";
import ChatInput from "../ChatInput/ChatInput";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }
    db.collection("room")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);
  console.log(roomDetails);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>{roomDetails && roomDetails.name}</strong>
            <StarBorderIcon></StarBorderIcon>
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon></InfoOutlinedIcon>
            Details
          </p>
        </div>
      </div>
      <div className="chat__message">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          ></Message>
        ))}
      </div>
      {console.log(roomDetails)}
      <ChatInput channelName={roomDetails?.name} channelId={roomId}></ChatInput>
    </div>
  );
};

export default Chat;
