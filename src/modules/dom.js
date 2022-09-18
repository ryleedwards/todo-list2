import { Task } from "./task";
import { Project } from "./project";

const dom = (() => {
  const menu = document.getElementById("menu");
  const home = document.getElementById("home");
  const btnAddTask = document.querySelector(".btn.addTask");
  const projectTitle = document.querySelector(".project-title");
  const projectView = document.getElementById("project-view");

  function showTasks(project) {
    if (!(project instanceof Project)) {
      throw new Error("dom.showTasks must be passed a Project object");
    }
    project.getTasks().forEach((task) => {
      projectView.appendChild(_createTask(task));
    });
  }

  function _createTask(task) {
    if (!(task instanceof Task)) {
      throw new Error("dom._createTask must be passed a Task object");
    }
    //create task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-complete");
    //title
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title");
    titleSpan.textContent = task.title;
    //dueDate
    const dueDateSpan = document.createElement("span");
    dueDateSpan.classList.add("task-dueDate");
    dueDateSpan.textContent = task.dueDate;
    //edit button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task", "fa-solid", "fa-pen-to-square");
    //delete button
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task", "fa-solid", "fa-trash-can");
    //append to task container
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(titleSpan);
    taskContainer.appendChild(dueDateSpan);
    taskContainer.appendChild(editTask);
    taskContainer.appendChild(deleteTask);
    return taskContainer;
  }

  function _createForm(method, action, classList) {
    const form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", action);
    classList.forEach((argClass) => {
      form.classList.add(argClass);
    });
    return form;
  }

  function showCreateTask() {
    const addTaskForm = _createForm("get", "#", "add-task-form");
  }

  return { showTasks };
})();

export default dom;
