export default
`import { connect } from 'react-redux';
import { ExampleComponent } from './example.component';

mapStateToProp = (state) => ({
  counter: state.counter,
  isButtonActive: state.isButtonActive,
});

mapDispatchToProps = (dispatch) => ({
  setIsButtonActive = (bool) => dispatch({
    type: 'SET_IS_BUTTON_ACTIVE',
    payload: bool
  }),
  setCounter = (number) => dispatch({
    type: 'SET_COUNTER',
    payload: number
  }),
});

export const ExampleContainer = connect(
  mapStateToProp,
  mapDispatchToProps,
)(Example)



`;
