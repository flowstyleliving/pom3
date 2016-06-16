import React, { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  _updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    })
  }
  render() {
    let filteredTasks = this.props.tasks.filter((task) => {
      return task.title.indexOf(this.state.search) !== -1
    })
    return (
      <div>
        <h2>HI I'm in the TaskList Comp</h2>
        <input type="text"
          value={this.state.search}
          onChange={this._updateSearch.bind(this)}
          placeholder="Search"/>
        <hr/>
        <ul>
          {filteredTasks.map((task) => {
            return <Task task={task} key={task.id}/>
          })}
        </ul>
      </div>
    )
  }
}
