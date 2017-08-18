import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Input } from './common';

class ToDoList extends Component {
  componentWillMount(this.props) {
    console.log(props)
  }

  render() {
    return(
      <Text>TODOLOST</Text>
    );
  }
}

export default ToDoList;


/*
render(this.props.tasks) {
  return (
    tasks.map((task) => {
      <CardSection>
        <Text> task </Text>
      </CardSection>
    })
  );
}
*/
