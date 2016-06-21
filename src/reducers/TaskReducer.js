function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}
let TaskReducer = (tasks = [], action) =>
  switch(action.type) {
    case 'ADD_TASK':
      return [{
        title: action.text,
          completed: false,
          id: getId(tasks)
        }, ...tasks
      ]
  }

  export default TaskReducer
