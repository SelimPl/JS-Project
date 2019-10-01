const form = document.querySelector("form")
const ul = document.querySelector("ul")
const taskNumber = document.querySelector("h1 span")
// const listItems = document.querySelectorAll("li.task");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");
const toDoList = [];
// ========
const inputS = document.querySelector(".szukaj");
const liElements = toDoList;
// document.querySelectorAll("li");

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;
    renderList();

}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;

    if (titleTask === "") return;


    const task = document.createElement("li");
    task.className = "task";

    task.innerHTML = titleTask + " <button> Usuń </button>";
    toDoList.push(task);

    renderList()

    ul.appendChild(task);
    input.value = ""
    // const listItems = document.querySelectorAll("li.task").length;
    taskNumber.textContent = listItems.length;
    task.querySelector("button").addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })

}
//======
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLocaleLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
}

form.addEventListener("submit", addTask);
inputS.addEventListener("input", searchTask);