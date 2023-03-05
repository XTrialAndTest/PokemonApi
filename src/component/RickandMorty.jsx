import { useEffect, useState } from 'react';
import './rickandmorty.scss';
const RickAndMorty = () => {
  let [chr, setChr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const results = await response.json();
      setChr(results.results);
    };
    fetchData();
  }, []);
  console.log(chr);
  return (
    <>
      <div className='single-chr'>
        {chr.map((singleChr) => {
          return (
            <>
              <div className='onething'>
                <h2>{singleChr.name}</h2>
                <img src={singleChr.image} alt='' />
                <div className='minute-details'>
                  <h4>Species: {singleChr.species}</h4>
                  <h4>Gender: {singleChr.gender}</h4>
                  <h4>status: {singleChr.status}</h4>
                </div>
                <div className='minute-details-2'>
                  <h4>place of origin: {singleChr.origin.name}</h4>
                  <h4>current location: {singleChr.location.name}</h4>
                </div>
              </div>
            </>
          );
        })}{' '}
      </div>
    </>
  );
};
export default RickAndMorty;
