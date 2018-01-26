export default
`import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
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

export const ExampleContainer = compose(
  connect(mapStateToProp, mapDispatchToProps),
  withHandlers({
    handleIsButtonActive: (props) =>
      () => props.setIsButtonActive(!props.isButtonActive),
    handleCounterIncrement: (props) =>
      () => props.setCounter(props.counter + 1),
    handleCounterDecrement: (props) =>
      () => props.setCounter(props.counter - 1),
  }),
)(ExampleComponent);




`
