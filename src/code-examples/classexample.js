export default
`import React from 'react';
import { connect } from 'react-redux';

class ExampleComponent extends Component {
  render() {
    const {
      areButtonsActive,
      counter,
    } = this.props;
    return (
      <div>
        <div>
          <h1>{counter}</h1>
        </div>
        <button
          onClick={this.handleCounterIncrement}
          disabled={!areButtonsActive}
        >
          INCREMENT
        </button>
        <button
          onClick={this.handleCounterDecrement}
          disabled={!areButtonsActive}
        >
          DECREMENT
        </button>
        <h4>Adjust Counter?</h4>
        <input
          type="checkbox"
          value={areButtonsActive}
          onChange={this.handleAreButtonsActive}
        />
      </div>
    );
  }

  handleAreButtonsActive = () => {
    this.props.setAreButtonsActive(!this.props.areButtonsActive);
  }

  handleCounterIncrement = () => {
    this.props.setCounter(this.props.counter + 1);
  }

  handleCounterDecrement = () => {
    this.props.setCounter(this.props.counter - 1);
  }
}

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
  mapStateToProp,
  mapDispatchToProps,
)(ExampleComponent)`;
