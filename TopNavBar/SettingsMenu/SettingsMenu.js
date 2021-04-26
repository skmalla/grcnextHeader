import {
  faComment,
  faClock,
  faCube,
  faTable,
  faUser,
  faUsersCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SettingsMenu.css";
import { Link } from "react-router-dom";

const SettingsMenu = (props) => {
  return (
    <div className='settings-menu'>
      <ul>
        <li>
          <Link to='/process-builder'>
            <span>
              <FontAwesomeIcon icon={faCube} title='Process Creation' />
            </span>
            <span>Process Creation</span>
          </Link>
        </li>
        <li>
          <Link to='/application-manager'>
            <span>
              <FontAwesomeIcon icon={faTable} title='Application Manager' />
            </span>
            <span>Application Manager</span>
          </Link>
        </li>
        <li>
          <Link to='/form-builder'>
            <span>
              <FontAwesomeIcon icon={faTable} title='Form Builder' />
            </span>
            <span>Form Builder</span>
          </Link>
        </li>
        {/* <li>
                    <Link to="/messages">
                        <span>
                            <FontAwesomeIcon icon={faComment} title="Message List" />
                        </span>
                        <span>Message List</span>
                    </Link>
                </li> */}
        <li>
          <Link to='/user-management'>
            <span>
              <FontAwesomeIcon icon={faUser} title='User Management' />
            </span>
            <span>User Management</span>
          </Link>
        </li>
        <li>
          <Link to='/configuration'>
            <span>
              <FontAwesomeIcon icon={faUsersCog} title='Configuration' />
            </span>
            <span>Configuration</span>
          </Link>
        </li>
        <li>
          <Link to='/schedulers'>
            <span>
              <FontAwesomeIcon icon={faClock} title='Schedulers' />
            </span>
            <span>Schedulers</span>
          </Link>
        </li>
        <li>
          <Link to='/mail-config'>
            <span>
              <FontAwesomeIcon icon={faEnvelope} title='Mail Configuration' />
            </span>
            <span>Mail Configuration</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
