
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
       const incompletedTasks = this.tasks.filter(task => task.completed === false)
       return incompletedTasks
    }
}

console.log(tasks.getTasksToDo())