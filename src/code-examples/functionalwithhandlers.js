export default
`import React from 'react';
import {
  View,
  Switch,
  Text,
  TouchableOpacity,
} from 'react-native';

export const ExampleComponent = ({
  isButtonActive,
  counter,
  handleIsButtonActive,
  handleCounterDecrement,
  handleCounterIncrement,
}) => (
  <View>
        <View>
          <Text>{counter}</Text>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={handleCounterDecrement}
          >
            <Text>Decrement</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={handleCounterDecrement}
          >
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Is Counter active?</Text>
          <Switch
            value={isButtonActive}
            onValueChange={handleIsButtonActive}
          />
        </View>
      </View>
);`
