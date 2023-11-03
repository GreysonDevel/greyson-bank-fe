import React from 'react';
import { Link } from 'react-router-dom';

type AccountPreviewProps = {
  account: {
    id: number;
    details: {
      IBAN: string;
      name: string;
      balance: number;
      currency: string;
    };
  };
};

export const AccountPreview: React.FC<AccountPreviewProps> = ({
  account,
}): JSX.Element => {
  return (
    <div
      key={account.id}
      className="col-8 d-flex justify-content-between bg-secondary-subtle rounded mb-2 p-4"
    >
      <h5>{account.details.name}</h5>
      <div className="col-2 d-flex flex-column align-items-center">
        <p>
          {account.details.balance} {account.details.currency}
        </p>
        <Link to="/accounts/id">
          <button className="btn btn-success">Details</button>
        </Link>
      </div>
    </div>
  );
};
