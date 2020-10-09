import React from "react";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";

function MyProfile() {
  return (
    <div>
      <Header />
      <Profile ownAccount={true} />
    </div>
  );
}

export default MyProfile;
