import React from 'react';
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
  return (
    <>
      <div className='buttons-wrapper'>
        <button className='btn'>
          <AiOutlineDoubleLeft />
        </button>
        <button className='btn'>
          <AiOutlineLeft />
        </button>
        <button className='btn'>
          <AiOutlineRight />
        </button>
        <button className='btn'>
          <AiOutlineDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Index;
