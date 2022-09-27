import dom from "./modules/dom";
import listeners from "./modules/listeners";
import { Project } from "./modules/project";
import { Task } from "./modules/task";

let projects = [];

dom.refreshSidebarProjects(projects);

listeners.init();

// BEGIN LOADING TEST CASES

const testProject = new Project("Test Project");
testProject.addTask(
  new Task("Test Task", "Test Description", "Test DueDate", "High")
);
projects.push(testProject);

const testProject2 = new Project("Test Project 2");
testProject2.addTask(
  new Task("Test Task 2", "Test Description 2", "Test DueDate 2", "High 2")
);
projects.push(testProject2);

// END LOADING TEST CASES

dom.showProject(testProject);
dom.refreshSidebarProjects(projects);

const btnTest = document.createElement("button");
btnTest.innerText = "TEST";
const topnav = document.querySelector(".top-nav");
topnav.appendChild(btnTest);

btnTest.addEventListener("click", () => {});

export { projects };
