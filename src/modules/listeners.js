import dom from "./dom";

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
    btnHome.addEventListener("click", () => {});
  }

  function init() {
    _initAddTask();
    _initMenu();
    _initHome();
  }

  return { init };
})();

export default listeners;
