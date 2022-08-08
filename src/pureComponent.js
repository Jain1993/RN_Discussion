import React from 'react';
import {Text, View, Button} from 'react-native';

class PureComponentExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {age: 10};
  }

  //with componentDidUpdate()
  componentWillUnmount() {
    console.log(`Hello World`);
  }

  render() {
    console.log('component rendered');
    return (
      <View>
        <Text style={{color: this.state.color, marginBottom: 20}}>
          {`the age is ${this.state.age}`}
        </Text>
        <Button
          onPress={() => this.setState({age: 10})}
          title={'Click Me to change the age'}
        />
      </View>
    );
  }
}

export default PureComponentExample;
