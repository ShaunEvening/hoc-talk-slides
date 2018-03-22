export default
`import { connect } from 'react-redux';
import { ExampleComponent } from './example.component';

mapStateToProps = (state) => ({
  counter: state.counter,
  areButtonsActive: state.areButtonsActive,
});

mapDispatchToProps = (dispatch) => ({
  setAreButtonsActive = (bool) => dispatch({
    type: 'SET_ARE_BUTTONS_ACTIVE',
    payload: bool
  }),
  setCounter = (number) => dispatch({
    type: 'SET_COUNTER',
    payload: number
  }),
});

export const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleComponent)



`;
