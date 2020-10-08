import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Profile.css";
import Timeline from "./Timeline/Timeline";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import useStateContext from "../../../context/DataLayer";
import axios from "../../../axios";
import FriendCard from "./FriendCard/FriendCard";
import FriendNameCard from "../Friends/FriendNameCard/FriendNameCard";
import Post from "../Home/Feed/Post/Post";

function Profile() {
  const timeline = useRef();
  const [{ selectedUser }, dispatch] = useStateContext();
  const [activeTab, setActiveTab] = useState("timeline");
  const [photos, setPhotos] = useState([
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
    {
      src: "https://www.kidzvalley.in/storage/2020/05/71hn7-p46L._SL1500_.jpg",
    },
  ]);
  useEffect(() => {
    axios
      .post("/user/getUser", {
        userId: "5f7f19cc6210b1561207400c",
      })
      .then((result) => {
        dispatch({
          type: "SET_SELECTED_USER",
          user: result.data,
        });
      })
      .catch((e) => console.log(e));
  }, []);
  // console.log(user);
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__headerContainer">
          <img
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png"
            alt=""
            className="profile__headerCover"
          />
          <div className="profile__headerBottom">
            <div className="profile__headerBottomNames">
              <h2>{selectedUser?.displayName}</h2>
              <p>To capture the world</p>
            </div>
            <div className="profile__headerBottomMenu">
              <div className="profile__headerBottomMenuLeft">
                <div
                  onClick={() => {
                    setActiveTab("timeline");
                  }}
                  className={`profile__headerBottomMenuOption`}
                >
                  <p>Timeline</p>
                </div>
                <div
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "timeline" ? "active" : ""
                  }`}
                >
                  <p>About</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("friends");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "timeline" ? "active" : ""
                  }`}
                >
                  <p>Friends</p>
                </div>
                <div
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "friends" ? "active" : ""
                  }`}
                >
                  <p>Photos</p>
                </div>
                <div className={`profile__headerBottomMenuOption `}>
                  <p>Archive</p>
                </div>
                <div className={`profile__headerBottomMenuOption active`}>
                  <p>Videos</p>
                </div>
                <div className="profile__headerBottomMenuOption active">
                  <p>More</p>
                </div>
              </div>
              <div className="profile__headerBottomMenuRight"></div>
            </div>
          </div>
          <img
            className="profile__headerProfilePicture"
            src="https://i.pinimg.com/originals/64/67/39/6467390a1afd37ab5e1932b2019a2287.jpg"
            alt=""
          />
        </div>
      </div>
      {activeTab === "timeline" && <Timeline photos={photos} />}
      {activeTab === "friends" && <ProfileFriends />}
    </div>
  );
}

export default Profile;
