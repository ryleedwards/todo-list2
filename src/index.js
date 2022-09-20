import dom from "./modules/dom";
import listeners from "./modules/listeners";
import { Project } from "./modules/project";
import { Task } from "./modules/task";

const testProject = new Project("Test Project");
testProject.addTask(
  new Task("Test Task", "Test Description", "Test DueDate", "High")
);

dom.showTasks(testProject);

listeners.init();
