const form = document.getElementById('form')
const input = document.getElementById('input')
const todolist = document.getElementById('todos')

const todos = JSON.parse(localstorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addtodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addtodo()
})

function addtodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoE1 = document.createElement('li')
        if(todo && todo.completed) {
            todoE1.classList.add('completed')
        }

        todoE1.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoE1.remove()
            updateLS()
        })

        todoE1.addEventlistener('contextment', (e) => {
            e.preventDefault()

            todoE1.remove()
            updateLS()
        })

        todosUL.appendChild(todoE1)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosE1 = document.querySelectorAll('li')

    const todos = []

    todosE1.forEach(todoE1 => {
        todos.push({
            text: todoE1.innerText,
            completed: todoE1.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}