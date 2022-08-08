import React from 'react';
import {Text, View, Button} from 'react-native';

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {color: 'black'};
  }
  render() {
    return (
      <View>
        <Text style={{color: this.state.color, marginBottom: 20}}>
          Press button to change my color
        </Text>
        <Button
          onPress={() => this.setState({color: 'red'})}
          title={'Click Me to change the color'}
        />
        <Comp1 value={'Child Component'} />
      </View>
    );
  }
}

class Comp1 extends React.Component {
  render() {
    console.log('child component called');
    return (
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
export default SimpleComponent;
