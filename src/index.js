const todoList = document.querySelector('#todo_list');
const addBtn = document.querySelector('#add_btn');


let todoItems = [];

function addNewTodo(text){
  const todo = {
    text,
    checked: false,
    id: Date.now()
  };

  todoItems.push(todo);
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