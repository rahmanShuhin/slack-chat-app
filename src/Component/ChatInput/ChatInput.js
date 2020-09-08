import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import db from "../Firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("room").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      console.log("add");
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Type Something to #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendMessage}
          variant="contained"
          color="secondary"
        >
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
