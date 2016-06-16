import React, {Component} from 'react'

export default class TaskInput extends Component {
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
    return(
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this._updateSearch.bind(this)}
          placeholder="Search"/>
        <hr/>
        <input type="text"
          refs="title"
          placeholder="Task"/>
        <input type="text"
          defaultValue="whoaDefault"
          refs="descript"
          placeholder="Description"/>
      </div>
    )
  }
}
