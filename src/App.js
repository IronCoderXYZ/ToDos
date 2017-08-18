import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button, Card, CardSection, Header, Input } from './components/common';

class App extends Component {
  state = { tasks: ['Trash', 'Groceries', 'Taxes'], task: '' }

  addTask(task) {
    const tasks = this.state.tasks.concat([task]);
    this.setState({ tasks, task: '' });
  }

  renderTaskList(tasks) {
    return tasks.map(task =>
      <CardSection key={task}>
        <Text> {task} </Text>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <Header headerText='To-Do-s' />
        <Card>
          {this.renderTaskList(this.state.tasks)}
          <CardSection>
            <Input
              label='Add a new task'
              placeholder='           laundry'
              onChangeText={(newTask) => {
                this.setState({ task: newTask });
              }}
              value={this.state.task}
            />
          </CardSection>
          <CardSection>
            <Button onPress={() => this.addTask(this.state.task)}>
              Add new task
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },

};

export default App;
