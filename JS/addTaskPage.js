import { ToDoList } from "./service/service.js";
const toDOLisTManagement = new ToDoList;

const arrayListOfTasks = await toDOLisTManagement.getData();
toDOLisTManagement.postOneTask(arrayListOfTasks);

console.log(arrayListOfTasks)


// const btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//     let inputValue = document.getElementById("inputAdd").value;
//     e.preventDefault();
//     array = toDOLisTManagement.addTask(array, inputValue);
//     return array;
// })
