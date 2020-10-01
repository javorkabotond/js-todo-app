# Javascript Todo App

Simple todo list app with javascript. The user can create a task, mark a task as completed and delete an already added task.

## Getting Started

### Prerequisites

 - Browser e.g Chrome, Mozilla 
 - [Git](https://git-scm.com/)

### Installing

1. Clone the repository
```
git clone https://github.com/javorkabotond/js-todo-app.git
```
2. Click index.html and automatically opens the main browser

## Methods

### Add a task

The first thing, I set up an array where I will push todo elem. Each todo itme will be an object with three properties:

- text (string): which holds whatever user types into the text input
- checked (bool): which helps me know if a task has been marked completed or not
- id (number): a unique identifier for the item

### Render todo items

Once a new todo item is added to the array, we want the app to be updated with the item rendered on the screen

### Mark a task as completed

The user can mark a task completed. We need to listen for the click event on the checkbox and toggle the checked property on the corresponding todo item. 

### Delete todo item 

Similar to the previous method. We will listen for the click event on the delete icon then grab the key of the parent and pass it off to the deleteTodo function which will remove the corresponding todo object in todoItems array send the todo item to renderTodo() to be removed from the dom.

## Running the tests
comming soon..

## Build With
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Jest](https://jestjs.io/)

## Author
- Botond Javorka

