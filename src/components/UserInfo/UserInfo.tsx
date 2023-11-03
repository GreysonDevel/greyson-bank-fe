import React from 'react';

type UserInfoProps = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
  };
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }): JSX.Element => {
  return (
    <>
      <h2>Your info</h2>
      <hr />
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Birth Date: {user.birthDate.toDateString()}</p>
    </>
  );
};
