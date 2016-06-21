import React, {Component} from 'react'

export default class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      descript: props.descript
    }
  }
  _addTask(event) {
    event.preventDefault();
    this.props.actions.addTask(this.state.title)
  }

  render() {

    return(
      <div>
        <form onSubmit={this._addTask.bind(this)}>
          <input type="text"
            value={this.state.title}
            ref="title"
            placeholder="Task"/>
          <input type="text"
            defaultValue="whoaDefault"
            ref="descript"
            placeholder="Description"/>
          <button type="submit">Submit</button>
          </form>
      </div>
    )
  }
}
