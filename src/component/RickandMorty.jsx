import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './rickandmorty.scss';
const RickAndMorty = () => {
  let [chr, setChr] = useState([]);
  let [count, setCount] = useState(1);
  let increase = () => {
    return setCount(count + 1);
  };
  let decrease = () => {
    if (count <= 1) {
      return 1;
    } else {
      return setCount(count - 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${count}`
      );
      const results = await response.json();
      setChr(results.results);
    };
    fetchData();
  }, [count]);
  // console.log(chr);
  return (
    <>
      <div className='increment'>
        <button onClick={decrease}>{count - 1}</button>
        <h4>{count}</h4>
        <button onClick={increase}>{count + 1}</button>
      </div>{' '}
      <div className='single-chr'>
        {chr.map((singleChr) => {
          return (
            <>
              <Link to={`/${singleChr.id}`} state={singleChr}>
                {console.log(singleChr)}
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
                </div>{' '}
              </Link>
            </>
          );
        })}
      </div>
      <div className='increment'>
        <button onClick={decrease}>{count - 1}</button>
        <h4>{count}</h4>
        <button onClick={increase}>{count + 1}</button>
      </div>
    </>
  );
};
export default RickAndMorty;
