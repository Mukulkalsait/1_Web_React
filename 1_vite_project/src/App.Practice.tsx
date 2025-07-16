import { useState, useEffect } from 'react';
import './App.css';

const Card = ({ title, description, email }) => {
  const [count, setCount] = useState(0);

  const [hasLike, setHasLiked] = useState<boolean>(false);

  useEffect(() => {
    console.log(`${title} movie has been ${hasLike} !!! `);
  }, [hasLike]);

  useEffect(() => {
    console.log('Card Rendered.');
  }, []);

  return (
    // <div className="card-x" onClick={() => setCount(count + 1)}> // G: similar in billow. but ready for all texts.
    <div className="card-x" onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>🗣️ {title} </h2>
      <p>🖺 {description}</p>
      <p>📧 Email: {email}</p>
      <p>{count}</p>
      <button onClick={() => setHasLiked(!hasLike)}>{hasLike ? '❤️' : '🤍'}</button>
    </div>
  );
};

const App = () => {
  // const [variableName, setVariableName] = useState('defaultValue');

  return (
    <>
      <h2>Functional Arrow Component.</h2>

      <div className="card-container">
        <Card title="Star Wars" description="War between planetes and spaceships." email="abcd#123123.com"></Card>
        <Card title="Tumbadd" description="Indian Horror Movie With Logic Beyound Imagiation" email="tumbad@gmail.com"></Card>
        <Card
          title="Avatar"
          description="War between the tribes on planet full of 'UnUnOctaneium' and humans who come tho still it."
          email="Avatar@hollywood.com"
        ></Card>
        <Card
          title="TRON Legecy"
          description="People Went Inside Games That Works Like Real Life"
          email="TronTheLegecy@gunseudaduga.com"
        ></Card>
      </div>
    </>
  );
};

export default App;
