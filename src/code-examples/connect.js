export default
`/*
  connect(mapStateToProps, mapDispatchToProps)  
  returns a component attached to
  the redux store
*/

const counterReducer = (
  state = { counter: 0 },
  action = {},
) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
}

const CounterComponent = ({
  counter,
  incrementcounter,
  decrementCounter,
}) => (
  <div>
    <div>
      {counter}
    </div>
    <button onClick={incrementcounter}>
      INCREMENT
    </button>
    <button onClick={decrementCounter}>
      DECREMENT
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  incrementcounter: () => dispatch({
    type: 'INCREMENT',
  }),
  decrementCounter: () => dispatch({
    type: 'DECREMENT',
  }),
});

const counterEnhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const CounterContainer =
  counterEnhancer(
    CounterComponent,
  );

`
