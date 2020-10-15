const addBtn = document.querySelector('.add_btn');
const todoList = document.querySelector('.todo_list');

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

  const item = document.querySelector(`[data-key='${todo.id}']`);

  const listElem = document.createElement('li');
  listElem.setAttribute('class', 'list_elem');
  listElem.setAttribute('data-key', todo.id);

  const completeBtn = document.createElement('button');
  completeBtn.setAttribute('class', 'complete_btn');
  completeBtn.innerText = 'C';

  const uncomleteBtn = document.createElement('button');
  uncomleteBtn.setAttribute('class', 'uncomplete_btn');
  uncomleteBtn.innerText = 'X';

  const article = document.createElement('article');
  article.setAttribute('class', 'task');
  article.innerText = todo.text;

  const editBtn = document.createElement('button');
  editBtn.setAttribute('class', 'edit_btn');
  editBtn.innerText = 'E';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete_btn');
  deleteBtn.innerText = 'D';

  if (todo.checked === false) {
    listElem.appendChild(completeBtn);
  } else {
    listElem.appendChild(uncomleteBtn);
    article.setAttribute('class', 'uncomplete_task');
  }
  listElem.appendChild(article);
  listElem.appendChild(editBtn);
  listElem.appendChild(deleteBtn);

  if (item) {
    todoList.replaceChild(listElem, item);
  } else {
    todoList.append(listElem);
  }

}

todoList.addEventListener('click', event => {
  if (event.target.classList.contains('complete_btn')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  } else if (event.target.classList.contains('uncomplete_btn')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
})

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}