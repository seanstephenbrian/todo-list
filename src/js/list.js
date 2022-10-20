// initiate empty todoList array:
const todoList = [];

// Todo object constructor:
function Todo(title, description, priority, completed) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
};

// method to create a new Todo object and add it to the todoList array:
const createTodo = (title, description, priority, completed) => {
    const newTodo = new Todo(title, description, priority, completed);
    todoList.push(newTodo);
};

// get the complete current list:
const getAll = () => {
    return todoList;
};

// get the items with 'now' priority:
const getNow = () => {
    const nowItems = todoList.filter(item => {
        if (item.priority === 'now') {
            return item;
        }
    });
    return nowItems;
};

// get the items with 'later' priority:
const getLater = () => {
    const laterItems = todoList.filter(item => {
        if (item.priority === 'later') {
            return item;
        }
    });
    return laterItems;
};

// remove a Todo object from the todoList array:
const deleteTodo = (title) => {
    // find the item to delete by matching its title to the passed title argument:
    const itemToDelete = todoList.find(item => item.title === title);
    // get index of found item:
    const index = todoList.indexOf(itemToDelete);
    // make sure that 'itemToDelete' really exists before deleting the item:
    if (itemToDelete) {
        todoList.splice(index, 1);
    }
};

// edit a property of a Todo object:
const editTodo = (title, property, newValue) => {
    // find the item to edit by matching its title to the passed title argument:
    const itemToEdit = todoList.find(item => item.title === title);
    // get index of found item:
    const index = todoList.indexOf(itemToEdit);
    // change the provided property to the provided new value:
    todoList[index][property] = newValue;
};

export { createTodo, getAll, getNow, getLater, deleteTodo, editTodo };