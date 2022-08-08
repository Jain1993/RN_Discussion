import React from 'react';
import {Text, View, Button} from 'react-native';

class PureComponentWithObject extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        firstName: 'John',
        lastName: 'Doe',
        address: {
          street: 'North 1st street',
        },
      },
    };
  }
  render() {
    return (
      <View>
        <Text style={{color: this.state.color, marginBottom: 20, fontSize: 20}}>
          {`parent component:  ${this.state.details.address.street}`}
        </Text>
        <Button
          onPress={() => {
            var temp = {...this.state.details};
            temp.address.street = 'South 1st street';
            this.setState({temp});
          }}
          title={'change address'}
        />
        <ChildComponent value={this.state.details} />
      </View>
    );
  }
}

class ChildComponent extends React.PureComponent {
  render() {
    console.log('child component called');
    return (
      <View
        style={{
          paddingTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>{`child component:  ${this.props.value.address.street}`}</Text>
      </View>
    );
  }
}
export default PureComponentWithObject;
