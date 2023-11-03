import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'src/store';
import { modalActions } from '../../store/modalSlice';

export const Modal: React.FC = (): JSX.Element => {
  const modalOpen = useSelector((state: TRootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(modalActions.close());
  };
  return (
    <div className={modalOpen ? 'dialog-container' : ''}>
      <dialog className="dialog-content" open={modalOpen}>
        <form action="" method="post">
          <input className="form-control" type="number" placeholder="Amount:" />
          <input className="form-control" type="text" placeholder="Pay to:" />
          <button className="btn btn-success" type="submit">
            Pay
          </button>
          <button
            className="btn btn-danger"
            onClick={handleClick}
            formMethod="dialog"
          >
            &#x26CC;
          </button>
        </form>
      </dialog>
    </div>
  );
};
