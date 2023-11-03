import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { Link } from 'react-router-dom';

export const WelcomePage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(authActions.login());
  };

  return (
    <div className="row vh-100 vw-100 bg align-items-center">
      <div className="col text-center">
        <h2>Welcome to</h2>
        <h1>GREYSON BANK</h1>
        <Link to="/accounts" onClick={handleClick}>
          <button className="btn btn-success">Login</button>
        </Link>
      </div>
    </div>
  );
};
