import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Button, Card, CardSection, Header, Input } from './components/common';

class App extends Component {
  state = { tasks: ['Trash', 'Groceries', 'Taxes'], task: '' }

  componentWillMount() {
    AsyncStorage.getItem('tasks')
      .then((response) => {
        this.setState({ tasks: JSON.parse(response) });
      });
  }

  setStorage() {
    AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  completeTask(index) {
    console.log(this.state.tasks[index]);
    let tasks = this.state.tasks;
    tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    this.setState({ tasks });
    this.setStorage();
  }

  addTask(task) {
    const tasks = this.state.tasks.concat([task]);
    this.setState({ tasks, task: '' });
    this.setStorage();
  }

  renderTaskList(tasks) {
    return tasks.map((task, index) =>
      <View>
      <CardSection key={task}>
        <Text> {task} </Text>
          <TouchableOpacity
            onPress={() => this.completeTask(index)}
          >
            <Text> &#10003; </Text>
          </TouchableOpacity>
      </CardSection>

      </View>
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
