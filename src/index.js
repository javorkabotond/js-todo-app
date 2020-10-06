const { createElement } = require("react");

const addBtn = document.querySelector('#add_btn');

let todoItems = [];

function addNewTodo(text){
  const todo = {
    text,
    checked: false,
    id: Date.now()
  };

  todoItems.push(todo);
  renderTodo(todo)
  console.log(todo)
}

addBtn.addEventListener('click', event => {
  event.preventDefault();
  
  const input = document.querySelector('#input_field');
  const text = input.value.trim();
  if(text !== '') {
    addNewTodo(text);
    input.value = '';
  }
})

function renderTodo(todo) {
  const todoList = document.querySelector('#todo_list');

  const article = document.createElement('article');
  article.setAttribute('class', 'list_elem');
  article.setAttribute('data-key', todo.id);
  article.innerHTML = `
    <button class="complete_btn"><i class="fas fa-check"></i></button>
    <li class="task">${todo.text}</li>
    <button class="edit_btn"><i class="fas fa-pen"></i></button>
    <button class="delete_btn"><i class="fas fa-trash"></i></button>
  `;
  todoList.appendChild(article)
}