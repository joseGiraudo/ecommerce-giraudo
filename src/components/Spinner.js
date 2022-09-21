import React from 'react';
import { SquareLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center p-4">
        <SquareLoader color="#8F8373" size={100}/>
    </div>
  )
}

export default Spinner