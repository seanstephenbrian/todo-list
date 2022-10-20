// initiate empty todoList array:
const todoList = [];

// Todo object constructor:
function Todo(id, title, description, priority, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
};

// method to create a new Todo object and add it to the todoList array:
const createTodo = (title, description, priority, completed) => {
    const id = todoList.length + 1;
    const newTodo = new Todo(id, title, description, priority, completed);
    todoList.push(newTodo);
};

// get the current list:
const getList = () => {
    return todoList;
};

// remove a Todo object from the todoList array:

const deleteTodo = (title) => {
    const index = todoList.map(item => item.title).indexOf(title);
    todoList.splice(index, 1);
};

export { createTodo, getList, deleteTodo }