import React from 'react';
import { handlePageChange } from '../../reducers/PaginationSlice';
import { useDispatch } from 'react-redux';
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from 'react-icons/ai';

type Props = {
  currentPage: number;
  paginationLimit: number;
  totalAvailable: number;
};

const Index = ({ currentPage, paginationLimit, totalAvailable }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='buttons-wrapper'>
        <button
          className='btn'
          disabled={currentPage === 1}
          onClick={() => dispatch(handlePageChange(1))}
        >
          <AiOutlineDoubleLeft />
        </button>
        <button
          className='btn'
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              dispatch(handlePageChange(currentPage - 1));
            }
          }}
        >
          <AiOutlineLeft />
        </button>
        <button
          className='btn'
          disabled={currentPage === totalAvailable / paginationLimit}
          onClick={() => {
            if (currentPage !== totalAvailable / paginationLimit) {
              dispatch(handlePageChange(currentPage + 1));
            }
          }}
        >
          <AiOutlineRight />
        </button>
        <button
          className='btn'
          disabled={currentPage === totalAvailable / paginationLimit}
          onClick={() =>
            dispatch(handlePageChange(totalAvailable / paginationLimit))
          }
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Index;
