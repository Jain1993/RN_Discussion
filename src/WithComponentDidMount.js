import React from 'react';
import {Text, View, Button, Alert, StyleSheet} from 'react-native';

class WithComponentDidMount extends React.Component {
  constructor() {
    console.log('constructor called');
    super();
    this.state = {msg: 'Hello World'};
  }

  componentDidMount() {
    console.log(`componentDidMount called`);
    Alert.alert('componentDidMount', this.state.msg);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate called`);
    Alert.alert('componentDidUpdate', this.state.msg);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('component rendered');
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}>{`${this.state.msg}`}</Text>
        <Button
          onPress={() => this.setState({msg: 'Good evening'})}
          title={'Click Me to change the message'}
        />

        <View style={{margin: 20}}>
          <Button
            onPress={() => this.props.navigation.replace('WithoutState')}
            title={'Click here to change screen'}
          />
        </View>
      </View>
    );
  }

  //with componentDidMount()
  //   componentDidMount() {
  //     console.log(`componentDidMount called`);
  //     Alert.alert('componentDidMount', this.state.msg);
  //   }

  //with componentDidUpdate()
  //   componentDidUpdate() {
  //     console.log(`componentDidUpdate called`);
  //     Alert.alert('componentDidUpdate', this.state.msg);
  //   }
  //with componentWillUnmount()
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithComponentDidMount;
