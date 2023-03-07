import { useState } from 'react';

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './single.scss';
let Single = () => {
  let { state } = useLocation();

  return (
    <>
      <div className='onething '>
        <Link to='/'>
          <h2>{state.name}</h2>
          <img src={state.image} alt='' />
          <div className='minute-details'>
            <h4>Species: {state.species}</h4>
            <h4>Gender: {state.gender}</h4>
            <h4>status: {state.status}</h4>
          </div>
          <div className='minute-details-2'>
            <h4>place of origin: {state.origin.name}</h4>
            <h4>current location: {state.location.name}</h4>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Single;
