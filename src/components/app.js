import React, { Component } from 'react';
import TaskList from './TaskList'
import TaskInput from './TaskInput'
import actions from '../actions/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <TaskInput actions={actions}/>
        <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}
