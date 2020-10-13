import React, { useEffect } from "react";
import "./MyProfile.css";
import Header from "../../Header/Header";
import Profile from "../Profile/Profile";
import axios from "../../../axios";
import Axios from "axios";
import useStateContext from "../../../context/DataLayer";

function MyProfile() {
  const [{ selectedUser }, dispatch] = useStateContext();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    axios
      .post("/user/getUser", {
        userId: "5f84a1c191ba2d433f07c1db",
        CancelToken: source.token,
      })
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: "SET_SELECTED_USER",
          user: result.data,
        });
      })
      .catch((e) => console.log(e));
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <div>
      <Header className="myProfile" />
      <div className="myProfile__profile">
        <Profile ownAccount={true} />
      </div>
    </div>
  );
}

export default MyProfile;
