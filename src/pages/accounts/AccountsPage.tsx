import React from 'react';

import { Nav } from '@components/Nav/Nav';
import { Footer } from '@components/Footer/Footer';
import { Link } from 'react-router-dom';

export const AccountsPage: React.FC = (): JSX.Element => {
  const user = {
    id: 1,
    firstName: 'Jan',
    lastName: 'Illetško',
    birthDate: new Date('1995-07-17'),
  };
  // this will be replaced with an API call, when they are finished
  const accounts = [
    {
      id: 123456789,
      details: {
        IBAN: 'GB12ABC123456789',
        name: 'Basic Account',
        balance: 1500.75,
        currency: 'USD',
      },
    },
    {
      id: 987654321,
      details: {
        IBAN: 'DE34XYZ987654321',
        name: 'Savings Account',
        balance: 3000.25,
        currency: 'USD',
      },
    },
    {
      id: 456123789,
      details: {
        IBAN: 'FR56PQR456123789',
        name: 'Investment Account',
        balance: 2000.5,
        currency: 'EUR',
      },
    },
    {
      id: 789321456,
      details: {
        IBAN: 'ES78LMN789321456',
        name: 'Checking Account',
        balance: 4500.2,
        currency: 'EUR',
      },
    },
    {
      id: 654987321,
      details: {
        IBAN: 'IT90XYZ654987321',
        name: 'Business Account',
        balance: 1000000.0,
        currency: 'JPY',
      },
    },
  ];

  return (
    <>
      <Nav />
      <div className="container min-vh-100">
        <div className="row justify-content-center py-4">
          <div className="col-8">
            <h2>Your info</h2>
            <hr />
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Birth Date: {user.birthDate.toDateString()}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {accounts.map((account) => {
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
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
