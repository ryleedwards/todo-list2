import dom from "./modules/dom";
import listeners from "./modules/listeners";
import { Project } from "./modules/project";
import { Task } from "./modules/task";

let projects = [];

listeners.init();

const testProject = new Project("Test Project");
testProject.addTask(
  new Task("Test Task", "Test Description", "Test DueDate", "High")
);

dom.showTasks(testProject);

const btnTest = document.createElement("button");
btnTest.innerText = "TEST";
const topnav = document.querySelector(".top-nav");
topnav.appendChild(btnTest);

btnTest.addEventListener("click", () => {
  dom.clearTasks();
});
