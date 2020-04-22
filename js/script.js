"use strict";

const todoControl = document.querySelector(".todo-control"),
    headerInput = document.querySelector(".header-input"),
    todoList = document.querySelector(".todo-list"),
    todoCompleted = document.querySelector(".todo-completed"),
    todoData =[];

const addTodoData = () => {
    for(let i=0; i<localStorage.length; i++) {

        let key = localStorage.key(i);
        const newTodo = {
            value: key,
            completed: localStorage.getItem(key) === "true" ? true : false,
        };
        todoData.push(newTodo);
    }
};

const render = () => {

    todoList.textContent = "";
    todoCompleted.textContent = "";



    todoData.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        li.innerHTML = `<span class="text-todo">${item.value}</span>` +
            "<div class=\"todo-buttons\">" +
            "<button class=\"todo-remove\"></button>" +
            "<button class=\"todo-complete\"></button>" +
            "</div>";

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector(".todo-complete");

        btnTodoCompleted.addEventListener("click", () => {
            item.completed = !item.completed;
            localStorage.setItem(item.value, item.completed);
            render();
        });

        const btnTodoRemove = li.querySelector(".todo-remove");

        btnTodoRemove.addEventListener("click", () => {

            todoData.splice(todoData.findIndex(item => item.value === li.firstChild.textContent), 1);
            localStorage.removeItem(li.firstChild.textContent);

            li.remove();
        });

    });
};

todoControl.addEventListener("submit", (e) => {
    e.preventDefault();

    if (headerInput.value !== "") {
        const newTodo = {
            value: headerInput.value,
            completed: false,
        };
        localStorage.setItem(newTodo.value, newTodo.completed);
        headerInput.value = '';
        todoData.push(newTodo);

        render();
    }
});

addTodoData();
render();