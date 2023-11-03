import React from 'react';
type AccountInfoProps = {
  details: {
    name: string;
    IBAN: string;
    balance: number;
    currency: string;
  };
};

export const AccountInfo: React.FC<AccountInfoProps> = ({
  details,
}): JSX.Element => {
  return (
    <>
      <h2>You account info</h2>
      <hr />
      <p>Name: {details.name}</p>
      <p>IBAN: {details.IBAN}</p>
      <p>
        Balance: {details.balance} {details.currency}
      </p>
    </>
  );
};
