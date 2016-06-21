import firedux from '../firedux'

let actions = {
  addTask: (text) => {
    firedux.push('tasks',
      { title: text}
    )
  }
}

export default actions
