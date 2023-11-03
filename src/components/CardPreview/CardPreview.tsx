import React from 'react';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type CardPreviewProps = {
  card: string;
};

export const CardPreview: React.FC<CardPreviewProps> = ({
  card,
}): JSX.Element => {
  return (
    <div className="col-12 d-flex flex-row justify-content-between">
      <BsFillCreditCardFill className="fs-3" />
      <p>{card}</p>
      <Link to="/accounts/id/card">
        <button className="btn btn-success">Detail</button>
      </Link>
    </div>
  );
};
