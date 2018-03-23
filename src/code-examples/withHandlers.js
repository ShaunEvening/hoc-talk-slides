export default
`import { withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { ExampleComponent } from './example.component';

mapStateToProp = (state) => ({
  counter: state.counter,
  areButtonsActive: state.isButtonActive,
});

mapDispatchToProps = (dispatch) => ({
  setAreButtonsActive = (bool) => dispatch({
    type: 'SET_IS_BUTTON_ACTIVE',
    payload: bool
  }),
  setCounter = (number) => dispatch({
    type: 'SET_COUNTER',
    payload: number
  }),
});

const ExampleWithHandlers = withHandlers({
  handleAreButtonsActive: (props) =>
    () => props.setAreButtonsActive(!props.areButtonsActive),
  handleCounterIncrement: (props) =>
    () => props.setCounter(props.counter + 1),
  handleCounterDecrement: (props) =>
    () => props.setCounter(props.counter - 1),
})(ExampleComponent);

export const ExampleContainer = connect(
  mapStateToProp,
  mapDispatchToProps,
)(ExampleWithHandlers);




`
