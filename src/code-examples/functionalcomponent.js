export default
`import React from 'react';

export const ExampleComponent = ({
  areButtonsActive,
  counter,
  setAreButtonsActive,
  setCounter,
}) => (
  <div>
    <div>
      <h1>{counter}</h1>
    </div>
    <button
      onClick={() => setCounter(counter + 1)}
      disabled={!areButtonsActive}
    >
      INCREMENT
    </button>
    <button
      onClick={() => setCounter(counter - 1)}
      disabled={!areButtonsActive}
    >
      DECREMENT
    </button>
    <h4>Adjust Counter?</h4>
    <input
      type="checkbox"
      value={areButtonsActive}
      onChange={() => setAreButtonsActive(!areButtonsActive)}
    />
  </div>
);`
