import React from "react";
import "./ProfileMenu.css";
import alert from "sweetalert";

const ProfileMenu = (props) => {
  const logout = async () => {
    let requestBody = {
      method: "GET",
      credentials: "include",
    };

    var response = await fetch(
      localStorage.getItem("apiURL") + "flowable-task/app/logout",
      requestBody
    );

    if (!response.ok) {
      alert({
        text: "Unable to logout",
        icon: "error",
      });
    } else if (response.status === 200) {
      window.location.href = "/GRCNext/";
    }
  };

  return (
    <div className='user-menu'>
      <ul>
        {/* <li>Lorem Ipsum</li> */}
        <li>Account Setting</li>
        <li>Take a tour</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
