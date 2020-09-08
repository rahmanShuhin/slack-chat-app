import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../StateProvider";
const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/*avatar for logged in user*/}
        <Avatar alt={user?.displayName} src={user?.photoURL} />
        {/*Time Icon*/}
        <AccessTimeIcon></AccessTimeIcon>
      </div>
      <div className="header__search">
        {/*Search Icon*/}
        <SearchIcon></SearchIcon>
        {/*input */}
        <input type="text" placeholder="Search Something You Want" />
      </div>
      <div className="header__right">
        {/*help icon */}
        <HelpOutlineIcon></HelpOutlineIcon>
      </div>
    </div>
  );
};

export default Header;
