import { Footer } from '@components/Footer/Footer';
import { Modal } from '@components/Modal/Modal';
import { Nav } from '@components/Nav/Nav';
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/modalSlice';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const AccountDetailPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(modalActions.open());
  };

  // this will be replaced with an API call, when they are finished
  const account = {
    id: 123456789,
    details: {
      IBAN: 'GB12ABC123456789',
      name: 'Basic Account',
      balance: 1500.75,
      currency: 'USD',
    },
    transactions: [
      {
        date: '2023-06-01',
        description: 'Grocery shopping',
        amount: -50.25,
        currency: 'USD',
      },
      {
        date: '2023-06-02',
        description: 'Salary deposit',
        amount: 1000.0,
        currency: 'USD',
      },
      {
        date: '2023-06-04',
        description: 'Restaurant dinner',
        amount: -80.5,
        currency: 'USD',
      },
    ],
  };

  // this will also be replaced with API info about cards
  const cardList = [
    '1234 5678 9012 3456',
    '9876 5432 1098 7654',
    '4567 8901 2345 6789',
    '5432 1098 7654 3210',
  ];

  return (
    <>
      <Nav />
      <div className="container min-vh-100">
        <div className="row justify-content-center py-4">
          <div className="col-4">
            <h2>You account info</h2>
            <hr />
            <p>Name: {account.details.name}</p>
            <p>IBAN: {account.details.IBAN}</p>
            <p>
              Balance: {account.details.balance} {account.details.currency}
            </p>
          </div>
          <div className="col-4">
            <h2>Cards for this account</h2>
            <hr />
            <div className="row">
              {cardList.map((card, index) => {
                return (
                  <div
                    className="col-12 d-flex flex-row justify-content-between"
                    key={index}
                  >
                    <BsFillCreditCardFill className="fs-3" />
                    <p>{card}</p>
                    <Link to="/accounts/id/card">
                      <button className="btn btn-success">Detail</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row py-4 justify-content-center">
          <div className="col-8 text-center">
            <button className="btn btn-success" onClick={handleClick}>
              Make a payment
            </button>
            <Modal />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row justify-content-center py-4">
            <div className="col-8 ">
              <h2>Your transactions </h2>
              <hr />
            </div>
          </div>
          {account.transactions.map((transaction, index) => {
            return (
              <div
                key={index}
                className="col-8 bg-secondary-subtle rounded mb-2 p-4"
              >
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
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};
