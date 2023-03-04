import { useEffect, useState } from 'react';
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
      {chr.map((singleChr) => {
        return (
          <>
            <div className='single-chr'>
              <h2>{singleChr.name}</h2>
              <img src={singleChr.image} alt='' />
            </div>
          </>
        );
      })}
    </>
  );
};
export default RickAndMorty;
