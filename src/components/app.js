import React, { Component } from 'react';
import TaskList from './TaskList'
import TaskInput from './TaskInput'


export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <TaskInput/>
        <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}
