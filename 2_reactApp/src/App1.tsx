import { useEffect, useState } from 'react';
import './App1.css';

function consloeLog(message) {
  console.log(message);
}

const Card = ({ title, desc, desc2 }) => {
  // B: useState:
  const [hasLike, updateHasLike] = useState(false); // Y: For each card ∴ here.
  const [count, updateCount] = useState(0); // Y: For each card ∴ here.

  // B: useEffect:
  useEffect(() => {
    consloeLog(`component mounted`);
  }, []); // Y: This use effect will run only once, while mounting the component.

  useEffect(() => {
    consloeLog('effectRan');
  }, [hasLike]); // Y: This useEffect will only run when 'hasLike' is changed.

  return (
    <>
      <div className="cards-inside-cardContainer" onClick={() => updateCount((prevState) => prevState + 1)}>
        {/* Y: to sue prev state we have to take arrow function thats the only way so inside arrow => another arrow =>*/}
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>
          {count || null}
          {/* Y: count? count : null = count || null
           * ====> count != 0 then show count or show null*/}
        </p>
        <button onClick={() => updateHasLike(!hasLike)}>{hasLike ? 'You Have Liked It ❤️' : 'LIKE !!!'}</button>
        {/* Y: onclick function + op here at same place */}
        <p>{desc2}</p>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <h3>Indian Movies</h3>
      <div className="cardContainer">
        <Card title="Tumbad" desc="Indian Horror Movie with highest rationgs." desc2="All rights reserve.™️"></Card>
        <Card title="Bahubali" desc="Indian Top Rated And Most Budget Film" desc2="All rights reserve.™️"></Card>
        <Card title="RaOne" desc="Sharukh Khan SuperHero Movie." desc2="All rights reserve.™️"></Card>
        <Card title="KGF" desc="Kolar Gold Field Movie." desc2="All rights reserve.™️"></Card>
      </div>
    </>
  );
};

export default App;
