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

  if (todo.deleted) {
    item.remove();
    return
  }

  const listElem = document.createElement('li');
  listElem.setAttribute('class', 'list_elem');
  listElem.setAttribute('data-key', todo.id);

  const completeBtn = document.createElement('button');
  completeBtn.setAttribute('class', 'complete_btn');
  completeBtn.innerText = 'C';

  const incompleteBtn = document.createElement('button');
  incompleteBtn.setAttribute('class', 'incomplete_btn');
  incompleteBtn.innerText = 'X';

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
    listElem.appendChild(incompleteBtn);
    article.setAttribute('class', 'incomplete_task');
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
  } else if (event.target.classList.contains('incomplete_btn')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  } else if (event.target.classList.contains('delete_btn')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
})

function getIndex(key) { 
  return todoItems.findIndex(item => item.id === Number(key));
}

function toggleDone(key) {
  const index = getIndex(key)
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  const index = getIndex(key);
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}