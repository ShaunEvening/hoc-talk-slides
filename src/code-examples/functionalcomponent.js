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
  setIsButtonActive,
  setCounter,
}) => (
  <View>
        <View>
          <Text>{counter}</Text>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={() => setCounter(counter - 1)}
          >
            <Text>Decrement</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            disabled={!isButtonActive}
            onPress={() => setCounter(counter + 1)}
          >
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Is Counter active?</Text>
          <Switch
            value={isButtonActive}
            onValueChange={() => setIsButtonActive(!isButtonActive)}
          />
        </View>
      </View>
);`
