import { Project } from "./modules/project";
import { Task } from "./modules/task";

let task = new Task("MyTask", "description of my task", "01/02/2001", "high");

let project = new Project("MyProject");

//project.addTask(new Task("task1", "description1", "01/01/2020", "low"));

console.log(project);
