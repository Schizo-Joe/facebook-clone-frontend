import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
// Icons for SidebarOptions
import CovidIcon from "./covid-icon.png";
import FriendsIcon from "./friends-icon.png";
import GroupsIcon from "./groups-icon.png";
import MarketPlaceIcon from "./marketPlace-icon.png";
import EventsIcon from "./events-icon.png";
import MemoriesIcon from "./memories-icon.png";
import SavedIcon from "./saved-icon.png";
import Avatar from "@material-ui/core/Avatar";
import useStateContext from "../../context/DataLayer";

function Sidebar() {
  const [{ user }, dispatch] = useStateContext();
  return (
    <div className="sidebar">
      <Link to="/profile">
        <SidebarOptions Avatar={Avatar} name={user?.displayName} />
      </Link>
      <SidebarOptions Icon={CovidIcon} name="COVID-19 Information Centre" />
      <Link to="/friends">
        <SidebarOptions Icon={FriendsIcon} name="Friends" />
      </Link>
      <SidebarOptions Icon={GroupsIcon} name="Groups" />
      <SidebarOptions Icon={MarketPlaceIcon} name="Market Place" />
      <SidebarOptions Icon={EventsIcon} name="Events" />
      <SidebarOptions Icon={MemoriesIcon} name="Memories" />
      <SidebarOptions Icon={SavedIcon} name="Saved" />
    </div>
  );
}

export default Sidebar;
