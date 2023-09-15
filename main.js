// alert("hello")
window.addEventListener('load', () => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-form");
    const list_el = document.querySelector("#tasks");

// stops it from re-submitting the page 
   form.addEventListener('submit', (e) => { 
    e.preventDefault();

    const task = input.value;

    if (!task) {
        alert("Please add your task");
        return;
    } 
    //allows us to create DOM notes
    const task_el = document.createElement("div");
    task_el.classList.add("task"); 

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    list_el.appendChild(task_el);   
    })
})