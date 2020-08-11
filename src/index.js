//select the elements that we want to add an event listener to 
//const createTaskForm = document.getElementById("create-task-form");
//const newTaskDescription = document.getElementById("new-task-description");

const submit = document.querySelector('input[type = submit]');
const newTaskUl = document.getElementById("tasks");
submit.addEventListener("click", submitTask );
  
function submitTask(t) {
  
  const newTaskLi = document.createElement("li");
  let input = t.target.previousElementSibling.value
  t.target.previousElementSibling.value = ""

  const xButton = '<button  id ="button">X</button>'
  newTaskLi.innerHTML = input + xButton
  newTaskUl.appendChild(newTaskLi);
  
  let button = document.getElementById("button");
  button.addEventListener("click", deleteTask );
  function deleteTask() {
    newTaskLi.remove();
};
  
};




document.addEventListener("DOMContentLoaded", () => {
  // your code here

const e = document.querySelector('form');
e.addEventListener('submit', event => {
  event.preventDefault()})

})
