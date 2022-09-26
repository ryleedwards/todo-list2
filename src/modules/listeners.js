import dom from "./dom";
import { projects } from "../index";

const listeners = (() => {
  function _initAddTask() {
    const btnAddTask = document.querySelector(".btn.addTask");
    btnAddTask.addEventListener("click", () => {
      dom.showCreateTaskForm();
    });
  }

  function _initMenu() {
    const btnMenu = document.getElementById("menu");
    btnMenu.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.toggle("hidden");
    });
  }

  function _initHome() {
    const btnHome = document.getElementById("home");
    btnHome.addEventListener("click", () => {
      //TODO
    });
  }

  function _initAddProject() {
    const btnAddProject = document.querySelector(".btn.addProject");
    btnAddProject.addEventListener("click", () => {
      dom.showCreateProjectForm();
    });
  }

  function initSidebarProject(li) {
    li.addEventListener("click", (e) => {
      const indexOfClickedListItem = Array.from(li.parentNode.children).indexOf(
        li
      );
      dom.showProject(projects[indexOfClickedListItem]);
    });
  }

  function initRemoveTask(btn) {
    btn.addEventListener("click", () => {
      const taskContainer = btn.parentNode;
      const index = Array.from(taskContainer.parentNode.children).indexOf(
        taskContainer
      );
      dom.removeTask(index);
    });
  }

  function initEditTask(btn) {
    btn.addEventListener("click", () => {
      const taskContainer = btn.parentNode;
      // index is subtracted by 2 to account for project title and add task button
      // index variable is used to determine proper task to edit, i.e. project.getTask()[index]
      const index =
        Array.from(taskContainer.parentNode.children).indexOf(taskContainer) -
        2;

      dom.showEditTaskForm(index);
    });
  }

  function init() {
    _initAddTask();
    _initMenu();
    _initHome();
    _initAddProject();
  }

  return { init, initSidebarProject, initEditTask, initRemoveTask };
})();

export default listeners;
