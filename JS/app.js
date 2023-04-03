import { ToDoList } from "./service/service.js";

const toDOLisTManagement = new ToDoList;

const arrayListOfTasks = await toDOLisTManagement.getData();

toDOLisTManagement.addOneTaskInDom(arrayListOfTasks);

toDOLisTManagement.deleteOneTask();

toDOLisTManagement.strikeOutTheTask();








