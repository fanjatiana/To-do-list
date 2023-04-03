import { myTodoList } from "./myTodoList.js";
import { ToDoList } from "./service/service.js";
const toDOLisTManagement = new ToDoList;

toDOLisTManagement.addOneTaskInDom(myTodoList);

toDOLisTManagement.deleteOneTask();

toDOLisTManagement.strikeOutTheTask();








