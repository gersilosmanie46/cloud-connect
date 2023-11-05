/*
 * File: complex_code.js
 * Description: This code demonstrates a complex implementation of a todo list manager
 * Author: John Doe
 */

// Define the TodoListManager class
class TodoListManager {
  constructor() {
    this.todos = [];
  }

  addTask(task) {
    this.todos.push({ task, completed: false });
  }

  removeTask(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  markTaskAsCompleted(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = true;
    }
  }

  displayTodoList() {
    console.log("--- Todo List ---");
    this.todos.forEach((todo, index) => {
      console.log(`Task ${index + 1}: ${todo.task} (${todo.completed ? "Completed" : "Incomplete"})`);
    });
  }
}

// Create an instance of TodoListManager
const todoManager = new TodoListManager();

// Add tasks to the todo list
todoManager.addTask("Buy groceries");
todoManager.addTask("Finish project report");
todoManager.addTask("Go for a run");

// Mark a task as completed
todoManager.markTaskAsCompleted(1);

// Remove a task
todoManager.removeTask(2);

// Display the todo list
todoManager.displayTodoList();