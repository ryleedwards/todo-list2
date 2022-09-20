import dom from "./dom";

const listeners = (() => {
  const btnAddTask = document.querySelector(".btn.addTask");

  function _initAddTask() {
    btnAddTask.addEventListener("click", () => {
      dom.showCreateTaskForm();
    });
  }

  function init() {
    _initAddTask();
  }

  return { init };
})();

export default listeners;
