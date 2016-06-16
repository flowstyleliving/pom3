import React, { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {

  render() {
    return (
      <div>
        <h2>HI I'm in the TaskList Comp</h2>
        <ul>
          {this.props.tasks.map((task) => {
            return <Task task={task} key={task.id}/>
          })}
        </ul>
      </div>
    )
  }
}
