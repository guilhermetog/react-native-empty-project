import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

class MainScreen extends Component {
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};


export default connect()(MainScreen);