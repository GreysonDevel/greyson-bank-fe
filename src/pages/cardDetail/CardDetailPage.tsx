import { Footer } from '@components/Footer/Footer';
import { Nav } from '@components/Nav/Nav';
import React from 'react';
// import cardImage from 'src/assets/cardImage.png';

export const CardDetailPage: React.FC = (): JSX.Element => {
  const selectedCard = {
    id: 1,
    name: 'Card Name',
    blocked: true,
    dateLocked: new Date('2023-06-06'),
  };

  return (
    <>
      <Nav />
      <div className="container min-vh-100">
        <div className="row p-5">
          <div className="col-6">
            <img
              style={{ width: '400px' }}
              src="https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581_1280.png"
              alt=""
            />
            {/* <img style={{width: "400px"}} src={cardImage} alt="" /> */}
          </div>
          <div className="col-6">
            <h2>Your card</h2>
            <hr />
            <p>Card Name: {selectedCard.name}</p>
            <p>Blocked: {selectedCard.blocked ? 'Yes' : 'No'}</p>
            <p>Date of blocking: {selectedCard.dateLocked.toDateString()}</p>
            <button disabled={selectedCard.blocked} className="btn btn-danger">
              Block this card
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
