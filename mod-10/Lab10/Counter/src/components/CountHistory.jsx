import react from 'react';

function CountHistory({ history }) {
  return (
    <>
      <ul className="list">
        {history.map((val, index) => (
          <li className="border" key={index}>{val}</li>
        ))}
      </ul>
    </>
  );
}

export default CountHistory;