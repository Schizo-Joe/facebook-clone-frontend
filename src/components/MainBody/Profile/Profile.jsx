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
import Avatar from "@material-ui/core/Avatar";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

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
          <div className="profile__headerCover">
            <img
              src="https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png"
              alt=""
              className="profile__headerCoverImage"
            />
            <div className="profile__headerCoverButton">
              <CameraAltIcon />
              <p>Edit cover photo</p>
            </div>
          </div>

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
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "timeline" ? "activeTab" : ""
                  }`}
                >
                  <p>Timeline</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("about");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "about" ? "activeTab" : ""
                  }`}
                >
                  <p>About</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("friends");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "friends" ? "activeTab" : ""
                  }`}
                >
                  <p>Friends</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("photos");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "photos" ? "activeTab" : ""
                  }`}
                >
                  <p>Photos</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("archive");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "archive" ? "activeTab" : ""
                  }`}
                >
                  <p>Archive</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("videos");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "videos" ? "activeTab" : ""
                  }`}
                >
                  <p>Videos</p>
                </div>
                <div
                  onClick={() => {
                    setActiveTab("more");
                  }}
                  className={`profile__headerBottomMenuOption  ${
                    activeTab === "more" ? "activeTab" : ""
                  }`}
                >
                  <p>More</p>
                </div>
              </div>
              <div className="profile__headerBottomMenuRight"></div>
            </div>
          </div>
          {/* <img
            className="profile__headerProfilePicture"
            src="https://i.pinimg.com/originals/64/67/39/6467390a1afd37ab5e1932b2019a2287.jpg"
            alt=""
          /> */}
          <div className="profile__headerProfilePicture">
            <Avatar style={{ width: 190, height: 190 }} />
            <div className="profile__headerProfilePictureButton">
              <CameraAltIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="profile__bottomBody">
        {activeTab === "timeline" && <Timeline photos={photos} />}
        {activeTab === "friends" && <ProfileFriends />}
      </div>
    </div>
  );
}

export default Profile;
