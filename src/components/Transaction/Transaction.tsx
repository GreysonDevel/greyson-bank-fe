import React from 'react';

type TransactionProps = {
  transaction: {
    date: string;
    description: string;
    amount: number;
    currency: string;
  };
};

export const Transaction: React.FC<TransactionProps> = ({
  transaction,
}): JSX.Element => {
  return (
    <div className="col-8 bg-secondary-subtle rounded mb-2 p-4">
      <div className="row justify-content-between">
        <div className="col-md-6">
          <h5>{transaction.description}</h5>
          <p>{transaction.date}</p>
        </div>
        <div className="col-md-6 text-end">
          <h5>
            {transaction.amount} {transaction.currency}
          </h5>
        </div>
      </div>
    </div>
  );
};
