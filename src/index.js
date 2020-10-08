const addBtn = document.querySelector('.add_btn');

let todoItems = [];

function addNewTodo(text) {
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

  const input = document.querySelector('.input_field');
  const text = input.value.trim();
  if (text !== '') {
    addNewTodo(text);
    input.value = '';
  }
})

function renderTodo(todo) {
  const todoList = document.querySelector('.todo_list');

  const article = document.createElement('article');
  article.setAttribute('class', 'list_elem');
  article.setAttribute('data-key', todo.id);

  const completeBtn = document.createElement('button');
  completeBtn.setAttribute('class', 'complete_btn');
  completeBtn.innerText = 'C';

  const listElem = document.createElement('li');
  listElem.setAttribute('class', 'task');
  listElem.innerText = todo.text;

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'edit_btn');
  editBtn.innerText = 'E';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete_btn');
  deleteBtn.innerText = 'D';

  article.appendChild(completeBtn);
  article.appendChild(listElem);
  article.appendChild(editBtn);
  article.appendChild(deleteBtn);

  todoList.appendChild(article)
}