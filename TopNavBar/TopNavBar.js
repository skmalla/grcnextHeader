import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faSearch,
  faHome,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./TopNavBar.css";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import SettingsMenu from "./SettingsMenu/SettingsMenu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TasksContext from "../../../Common/Contexts/TasksContext";

const TopNavBar = (props) => {
  const tasks = useContext(TasksContext);
  const [userMenu, setShowUserMenu] = useState(false);
  const [settingsMenu, setShowSettingsMenu] = useState(false);

  const showSettingsMenu = () => {
    setShowSettingsMenu(true);
  };

  const hideSettingsMenu = () => {
    setShowSettingsMenu(false);
  };

  const showUserMenu = () => {
    setShowUserMenu(true);
  };

  const hideUserMenue = () => {
    setShowUserMenu(false);
  };

  return (
    <div className='right-menu'>
      <ul>
        <li onMouseLeave={hideSettingsMenu}>
          <span onMouseOver={showSettingsMenu}>
            <FontAwesomeIcon icon={faCogs} title='Settings' />
          </span>
          {settingsMenu && <SettingsMenu />}
        </li>
        <li>
          <span>
            <Link to='/document-search'>
              <FontAwesomeIcon icon={faSearch} title='Search' />
            </Link>
          </span>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faHome} title='Home' />
          </span>
        </li>
        <li>
          <span>
            <Link to='/task-list'>
              <FontAwesomeIcon icon={faBell} title='Notifications' />
              <span className='notification-badge'>
                <b>{tasks && tasks.length > 0 ? tasks.length : 0}</b>
              </span>
            </Link>
          </span>
        </li>
        <li onMouseLeave={hideUserMenue}>
          <span onMouseOver={showUserMenu}>
            <FontAwesomeIcon icon={faUser} title='User' />
          </span>
          {userMenu && <ProfileMenu />}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taskCount: state.tasks.taskCount,
  };
};

// export default connect(mapStateToProps)(TopNavBar);
export default TopNavBar;
