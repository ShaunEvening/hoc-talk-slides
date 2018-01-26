export default
`import React from 'react';
import {
  View,
  Switch,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

class ExampleComponent extends Component {
  render() {
    const {
      isButtonActive,
      counter,
    } = this.props;
    return (
      <View>
        <View>
          <Text>{counter}</Text>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={this.handleCounterDecrement}
          >
            <Text>Decrement</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={this.handleCounterIncrement}
          >
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Is Counter active?</Text>
          <Switch
            value={isButtonActive}
            onValueChange={this.handleIsButtonActive}
          />
        </View>
      </View>
    )
  }

  handleIsButtonActive = () => {
    this.props.setIsButtonActive(!this.props.isButtonActive);
  }

  handleCounterIncrement = () => {
    this.props.setCounter(this.props.counter + 1);
  }

  handleCounterDecrement = () => {
    this.props.setCounter(this.props.counter - 1);
  }
}

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
)(ExampleComponent)`;
