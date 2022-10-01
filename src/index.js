import dom from "./modules/dom";
import listeners from "./modules/listeners";
import { Project } from "./modules/project";
import { Task } from "./modules/task";
import storage from "./modules/storage";

listeners.init();

// BEGIN LOADING TEST CASES
/*
const testProject = new Project("Test Project");
testProject.addTask(
  new Task("Test Task", "Test Description", "2022-09-01", "High")
);
projects.push(testProject);

const testProject2 = new Project("Test Project 2");
testProject2.addTask(
  new Task("Test Task 2", "Test Description 2", "2022-10-02", "High")
);
projects.push(testProject2);
*/
// END LOADING TEST CASES

/*
dom.showProject(testProject);
dom.refreshSidebarProjects(projects);
*/

const btnTest = document.createElement("button");
btnTest.innerText = "TEST";
const topnav = document.querySelector(".top-nav");
topnav.appendChild(btnTest);

storage.createProjects();

btnTest.addEventListener("click", () => {
  storage.clear();
});

export {};
