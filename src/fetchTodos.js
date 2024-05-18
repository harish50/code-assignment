const axios = require("axios");

async function fetchTodo(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

async function fetchEvenTodos(limit=20) {
    let id = 2;
    const todos = []
    for (let counter = 0; counter < limit; counter++) {
        todos.push(fetchTodo(id))
        id += 2;
    }
    return (await Promise.allSettled(todos)).map(todo => {
        if (todo.status === 'fulfilled') {
            return {title: todo.value.data.title, completed: todo.value.data.completed}
        }
    })
}

module.exports = {fetchTodo, fetchEvenTodos}