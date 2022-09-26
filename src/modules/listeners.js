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

  function init() {
    _initAddTask();
    _initMenu();
    _initHome();
    _initAddProject();
  }

  return { init, initSidebarProject };
})();

export default listeners;
