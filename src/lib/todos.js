const todos = {
  loadTodos() {
    return fetch('https://backend.pi-top.com/todo-test/v1/todos', {
      method: 'GET',
    });
  },
  loadTodo(id) {
    return fetch(`https://backend.pi-top.com/todo-test/v1/todos/${id}`, {
      method: 'GET',
    });
  },
  addTodo(todo) {
    return fetch('https://backend.pi-top.com/todo-test/v1/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  updateTodo({ id, isDone }) {
    return fetch(`https://backend.pi-top.com/todo-test/v1/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        isDone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};

export default todos;
