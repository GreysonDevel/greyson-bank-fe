import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../../store/authSlice';

export const Nav: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(authActions.logout());
  };
  return (
    <nav>
      <ul className="nav nav-pills nav-justified p-2 bg align-items-center ">
        <li className="nav-item">
          <a className="nav-link disabled text-white fs-3 " href="#">
            Greyson Bank
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" href="#">
            User#1
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/accounts">
            Accounts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={handleClick}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};
