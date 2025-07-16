import { useState, useEffect } from 'react';
import './App.css';

const Btn = () => {
  const [hasLike, setHasLike] = useState<boolean>(false);

  return (
    <>
      {' '}
      <button className="btnSuccss" onClick={() => setHasLike(!hasLike)}>
        hasliked?'Liked!!':'Please Like'
      </button>
    </>
  );
};

const Card = ({ title, desc, link }) => {
  return (
    <>
      <div className="card-x" onClick={() => setCount((prevState) => prevState + 1)}>
        <h2>🔯 {title}</h2>
        <p>🏽 {desc}</p>
        <p>🔗 {link}</p>
        <Btn></Btn>
      </div>
    </>
  );
};
