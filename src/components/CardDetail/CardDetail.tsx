import React from 'react';

type CardDetailProps = {
  card: {
    id: number;
    name: string;
    blocked: boolean;
    dateLocked: Date;
  };
};

export const CardDetail: React.FC<CardDetailProps> = ({
  card,
}): JSX.Element => {
  return (
    <div className="container min-vh-100">
      <div className="row p-5">
        <div className="col-6">
          <img
            style={{ width: '400px' }}
            src="https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581_1280.png"
            alt="debit card stock image"
          />
          {/* <img style={{width: "400px"}} src={cardImage} alt="" /> */}
        </div>
        <div className="col-6">
          <h2>Your card</h2>
          <hr />
          <p>Card Name: {card.name}</p>
          <p>Blocked: {card.blocked ? 'Yes' : 'No'}</p>
          <p>Date of blocking: {card.dateLocked.toDateString()}</p>
          <button disabled={card.blocked} className="btn btn-danger">
            Block this card
          </button>
        </div>
      </div>
    </div>
  );
};
