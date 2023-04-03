import { ToDoList } from "./service/service.js";
const toDOLisTManagement = new ToDoList;


toDOLisTManagement.postOneTask();
console.log(toDOLisTManagement.postOneTask());
console.log(toDOLisTManagement.toDoListUpdated); 

// const btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//     let inputValue = document.getElementById("inputAdd").value;
//     e.preventDefault();
//     array = toDOLisTManagement.addTask(array, inputValue);
//     return array;
// })
