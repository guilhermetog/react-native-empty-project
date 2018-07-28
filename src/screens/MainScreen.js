import React, {Component} from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';
import {connect} from 'react-redux';
//import {actionName} from 'path/to/actions/action_example';


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

const mapStateToProps = ({/*reducers neededs*/}) => ({/*same reducers*/}) //the reducers will be in the this.props

export default connect(mapStateToProps,{/*action1, action2*/})(MainScreen);