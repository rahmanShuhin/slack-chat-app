import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../Firebase";
import { useStateValue } from "../StateProvider";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("room").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon></CreateIcon>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption
        Icon={InboxIcon}
        title="Mentions & reactions"
      ></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title="Saved items"></SidebarOption>
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title="Channel browser"
      ></SidebarOption>
      <SidebarOption
        Icon={PeopleAltIcon}
        title="People & user groups"
      ></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title="File browser"></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title="Show less"></SidebarOption>
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel"></SidebarOption>
      <hr />
      <SidebarOption
        Icon={AddIcon}
        title="Add Channel"
        addChannelOption={true}
      ></SidebarOption>
      {channels &&
        channels.map((x) => (
          <SidebarOption title={x.name} id={x.id}></SidebarOption>
        ))}
    </div>
  );
};

export default Sidebar;
