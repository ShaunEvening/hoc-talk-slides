export default
`import React from 'react';

export const ExampleComponent = ({
  areButtonsActive,
  counter,
  handleAreButtonsActive,
  handleCounterIncrement,
  handleCounterDecrement,
}) => (
  <div>
    <div>
      <h1>{counter}</h1>
    </div>
    <button
      onClick={handleCounterIncrement}
      disabled={!areButtonsActive}
    >
      INCREMENT
    </button>
    <button
      onClick={handleCounterDecrement}
      disabled={!areButtonsActive}
    >
      DECREMENT
    </button>
    <h4>Adjust Counter?</h4>
    <input
      type="checkbox"
      value={areButtonsActive}
      onChange={handleAreButtonsActive}
    />
  </div>
);`
