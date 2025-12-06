import { sculptureList } from './data';
import { useState } from 'react';

const Art = () => {
  const [indx, setIndx] = useState(0);
  const [show, setShow] = useState(false);
  const sculpture = sculptureList[indx];
  const handleNext = () => {
    if (indx < sculptureList.length - 1) {
      setIndx(indx + 1);
    } else {
      setIndx(0);
    }
  };

  return (
    <div>
      <hr />
      <h1>The scuplpture list one by one</h1>
      <button onClick={handleNext}>Next</button>
      <h2>
        {sculpture.name} by {sculpture.artist}
      </h2>
      <p>
        {indx + 1} out of {sculptureList.length}
      </p>
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />
      <button onClick={() => setShow(!show)}>
        {' '}
        {show ? 'Hide detail' : 'Show detail'}
      </button>
      {show && <p> {sculpture.description} </p>}
      <hr />
    </div>
  );
};
export default Art;
