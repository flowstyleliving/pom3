import React, {Component} from 'react'

export default class TaskInput extends Component {

  render() {
    return(
      <div>
        <input type="text"
          ref="title"
          placeholder="Task"/>
        <input type="text"
          defaultValue="whoaDefault"
          ref="descript"
          placeholder="Description"/>
      </div>
    )
  }
}
