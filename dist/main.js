/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listeners */ "./src/modules/listeners.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");





let projects = [];

_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].refreshSidebarProjects(projects);

_modules_listeners__WEBPACK_IMPORTED_MODULE_1__["default"].init();

// BEGIN LOADING TEST CASES

const testProject = new _modules_project__WEBPACK_IMPORTED_MODULE_2__.Project("Test Project");
testProject.addTask(
  new _modules_task__WEBPACK_IMPORTED_MODULE_3__.Task("Test Task", "Test Description", "Test DueDate", "High")
);
projects.push(testProject);

const testProject2 = new _modules_project__WEBPACK_IMPORTED_MODULE_2__.Project("Test Project 2");
testProject2.addTask(
  new _modules_task__WEBPACK_IMPORTED_MODULE_3__.Task("Test Task 2", "Test Description 2", "Test DueDate 2", "High 2")
);
projects.push(testProject2);

// END LOADING TEST CASES

_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].showProject(testProject);
_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].refreshSidebarProjects(projects);

const btnTest = document.createElement("button");
btnTest.innerText = "TEST";
const topnav = document.querySelector(".top-nav");
topnav.appendChild(btnTest);

btnTest.addEventListener("click", () => {
  _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
});




/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/modules/listeners.js");





const dom = (() => {
  let currentProject = "";
  const projectTitle = document.querySelector(".project-title");
  const projectView = document.getElementById("project-view");
  const content = document.getElementById("content");

  function showTasks(project) {
    if (!(project instanceof _project__WEBPACK_IMPORTED_MODULE_1__.Project)) {
      throw new Error("dom.showTasks must be passed a Project object");
    }
    currentProject = project;
    project.getTasks().forEach((task) => {
      projectView.appendChild(_showTask(task));
    });
  }

  function _showTask(task) {
    if (!(task instanceof _task__WEBPACK_IMPORTED_MODULE_0__.Task)) {
      throw new Error("dom._showTask must be passed a Task object");
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
    _listeners__WEBPACK_IMPORTED_MODULE_3__["default"].initEditTask(editTask);
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
    // form.setAttribute("method", method);
    // form.setAttribute("action", action);

    classList.forEach((argClass) => {
      form.classList.add(argClass);
    });
    return form;
  }

  function showCreateTaskForm() {
    const addTaskForm = _createForm("#", "#", ["add-task-form", "form"]);

    // task title entry
    const divTitle = document.createElement("div");
    divTitle.classList.add("form-input");
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "input-title");
    labelTitle.textContent = "Title:";
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "input-title");
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    addTaskForm.appendChild(divTitle);

    // task description entry
    const divDescription = document.createElement("div");
    divDescription.classList.add("form-input");
    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "input-description");
    labelDescription.textContent = "Description:";
    const inputDescription = document.createElement("input");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("name", "input-description");
    divDescription.appendChild(labelDescription);
    divDescription.appendChild(inputDescription);
    addTaskForm.appendChild(divDescription);

    // due date entry
    const divDueDate = document.createElement("div");
    divDueDate.classList.add("form-input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for", "input-dueDate");
    labelDueDate.textContent = "Due Date:";
    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("type", "date");
    inputDueDate.setAttribute("name", "input-dueDate");
    divDueDate.appendChild(labelDueDate);
    divDueDate.appendChild(inputDueDate);
    addTaskForm.appendChild(divDueDate);

    // priority entry
    const divPriority = document.createElement("div");
    divPriority.classList.add("form-input");
    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "select-priority");
    labelPriority.textContent = "Priority:";
    divPriority.appendChild(labelPriority);
    const selectPriority = document.createElement("select");
    selectPriority.setAttribute("name", "select-priority");
    selectPriority.setAttribute("id", "select-priority");
    /*TODO add placeholder for "select priority" that is optional and can
    submit null value in task creation (users do not have to assign a priority) 
    
    Use 'selected,' 'disabled', 'hidden' attributes in option tag */
    _task__WEBPACK_IMPORTED_MODULE_0__.Task.priorities.forEach((priority) => {
      const option = document.createElement("option");
      option.setAttribute("value", priority);
      option.textContent = priority;
      selectPriority.appendChild(option);
    });
    divPriority.appendChild(selectPriority);
    addTaskForm.appendChild(divPriority);

    // submit button
    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.classList.add("form-input");
    const inputBtnSubmit = document.createElement("input");
    inputBtnSubmit.setAttribute("type", "submit");
    inputBtnSubmit.setAttribute("value", "Submit");
    inputBtnSubmit.classList.add("btn", "submit-task");
    divBtnSubmit.appendChild(inputBtnSubmit);
    addTaskForm.appendChild(divBtnSubmit);

    addSubmitListener();

    // final append to content
    content.appendChild(addTaskForm);
    projectView.classList.toggle("form-entry");

    function addSubmitListener() {
      inputBtnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // check for required inputs
        // require task title
        if (inputTitle.value == "") {
          const labelRequiredField = document.createElement("label");
          labelRequiredField.classList.add("error-label");
          labelRequiredField.textContent =
            "Please enter this field before submitting";
          if (divTitle.lastChild.classList[0] != "error-label") {
            divTitle.appendChild(labelRequiredField);
            return;
          }
          return;
        }
        // store input values

        const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(
          inputTitle.value,
          inputDescription.value,
          inputDueDate.value,
          selectPriority.value
        );
        currentProject.addTask(task);
        projectView.appendChild(_showTask(task));
        content.removeChild(addTaskForm);
        projectView.classList.toggle("form-entry");
      });
    }
  }

  function showCreateProjectForm() {
    const addProjectForm = _createForm("#", "#", ["add-project-form", "form"]);
    // project title entry
    const divTitle = document.createElement("div");
    divTitle.classList.add("form-input");
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "input-title");
    labelTitle.textContent = "Title:";
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "input-title");
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    addProjectForm.appendChild(divTitle);

    // submit button
    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.classList.add("form-input");
    const inputBtnSubmit = document.createElement("input");
    inputBtnSubmit.setAttribute("type", "submit");
    inputBtnSubmit.setAttribute("value", "Submit");
    inputBtnSubmit.classList.add("btn", "submit-project");
    divBtnSubmit.appendChild(inputBtnSubmit);
    addProjectForm.appendChild(divBtnSubmit);

    addSubmitListener();

    content.appendChild(addProjectForm);
    projectView.classList.toggle("form-entry");

    function addSubmitListener() {
      inputBtnSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        //store new project
        if (inputTitle.value == "") {
          const labelRequiredField = document.createElement("label");
          labelRequiredField.classList.add("error-label");
          labelRequiredField.textContent =
            "Please enter this field before submitting";
          if (divTitle.lastChild.classList[0] != "error-label") {
            divTitle.appendChild(labelRequiredField);
            return;
          }
          return;
        }
        const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(inputTitle.value);
        _index__WEBPACK_IMPORTED_MODULE_2__.projects.push(project);
        refreshSidebarProjects(_index__WEBPACK_IMPORTED_MODULE_2__.projects);
        content.removeChild(addProjectForm);
        projectView.classList.toggle("form-entry");
      });
    }
  }

  function showEditTaskForm(taskIndex) {
    const task = currentProject.getTasks()[taskIndex];
    const editTaskForm = _createForm("#", "#", ["edit-task-form", "form"]);

    // task title entry
    const divTitle = document.createElement("div");
    divTitle.classList.add("form-input");
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "input-title");
    labelTitle.textContent = "Title:";
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "input-title");
    inputTitle.value = task.title;
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    editTaskForm.appendChild(divTitle);

    // task description entry
    const divDescription = document.createElement("div");
    divDescription.classList.add("form-input");
    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "input-description");
    labelDescription.textContent = "Description:";
    const inputDescription = document.createElement("input");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("name", "input-description");
    inputDescription.value = task.description;
    divDescription.appendChild(labelDescription);
    divDescription.appendChild(inputDescription);
    editTaskForm.appendChild(divDescription);

    // due date entry
    const divDueDate = document.createElement("div");
    divDueDate.classList.add("form-input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for", "input-dueDate");
    labelDueDate.textContent = "Due Date:";
    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute("type", "date");
    inputDueDate.setAttribute("name", "input-dueDate");
    inputDueDate.value = task.dueDate;
    divDueDate.appendChild(labelDueDate);
    divDueDate.appendChild(inputDueDate);
    editTaskForm.appendChild(divDueDate);

    // priority entry
    const divPriority = document.createElement("div");
    divPriority.classList.add("form-input");
    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "select-priority");
    labelPriority.textContent = "Priority:";
    divPriority.appendChild(labelPriority);
    const selectPriority = document.createElement("select");
    selectPriority.setAttribute("name", "select-priority");
    selectPriority.setAttribute("id", "select-priority");
    /*TODO add placeholder for "select priority" that is optional and can
submit null value in task creation (users do not have to assign a priority) 

Use 'selected,' 'disabled', 'hidden' attributes in option tag */
    _task__WEBPACK_IMPORTED_MODULE_0__.Task.priorities.forEach((priority) => {
      const option = document.createElement("option");
      option.setAttribute("value", priority);
      option.textContent = priority;
      selectPriority.appendChild(option);
    });
    let prioIndex = _task__WEBPACK_IMPORTED_MODULE_0__.Task.priorities.indexOf(task.priority);
    selectPriority.selectedIndex = prioIndex;
    divPriority.appendChild(selectPriority);
    editTaskForm.appendChild(divPriority);

    // submit button
    const divBtnSubmit = document.createElement("div");
    divBtnSubmit.classList.add("form-input");
    const inputBtnSubmit = document.createElement("input");
    inputBtnSubmit.setAttribute("type", "submit");
    inputBtnSubmit.setAttribute("value", "Submit");
    inputBtnSubmit.classList.add("btn", "submit-task");
    divBtnSubmit.appendChild(inputBtnSubmit);
    editTaskForm.appendChild(divBtnSubmit);

    addSubmitListener();

    // final append to content
    content.appendChild(editTaskForm);
    projectView.classList.toggle("form-entry");

    function addSubmitListener() {
      inputBtnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // check for required inputs
        // require task title
        if (inputTitle.value == "") {
          const labelRequiredField = document.createElement("label");
          labelRequiredField.classList.add("error-label");
          labelRequiredField.textContent =
            "Please enter this field before submitting";
          if (divTitle.lastChild.classList[0] != "error-label") {
            divTitle.appendChild(labelRequiredField);
            return;
          }
          return;
        }
        // store input values

        task.title = inputTitle.value;
        task.description = inputDescription.value;
        task.dueDate = inputDueDate.value;
        task.priority = selectPriority.value;
        clearTasks();
        showTasks(currentProject);
        content.removeChild(editTaskForm);
        projectView.classList.toggle("form-entry");
      });
    }
  }

  function clearTasks() {
    let tasks = document.querySelectorAll(".task-container");
    tasks.forEach((task) => {
      projectView.removeChild(task);
    });
  }

  function refreshSidebarProjects(projects) {
    const listProjects = document.getElementById("project-list");
    while (listProjects.firstChild) {
      listProjects.removeChild(listProjects.firstChild);
    }
    projects.forEach((project) => {
      const liProject = document.createElement("li");
      liProject.classList.add("project");
      liProject.innerText = project.name;
      listProjects.appendChild(liProject);
      _listeners__WEBPACK_IMPORTED_MODULE_3__["default"].initSidebarProject(liProject);
    });
  }

  function showProject(project) {
    if (!(project instanceof _project__WEBPACK_IMPORTED_MODULE_1__.Project)) {
      throw new Error("dom.showProject must be passed a Project object");
    }
    clearTasks();
    projectTitle.innerText = project.name;
    showTasks(project);
  }

  return {
    showTasks,
    showCreateTaskForm,
    showCreateProjectForm,
    showEditTaskForm,
    clearTasks,
    showProject,
    refreshSidebarProjects,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/modules/listeners.js":
/*!**********************************!*\
  !*** ./src/modules/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");



const listeners = (() => {
  function _initAddTask() {
    const btnAddTask = document.querySelector(".btn.addTask");
    btnAddTask.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showCreateTaskForm();
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
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showCreateProjectForm();
    });
  }

  function initSidebarProject(li) {
    li.addEventListener("click", (e) => {
      const indexOfClickedListItem = Array.from(li.parentNode.children).indexOf(
        li
      );
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showProject(_index__WEBPACK_IMPORTED_MODULE_1__.projects[indexOfClickedListItem]);
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

      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showEditTaskForm(index);
    });
  }

  function init() {
    _initAddTask();
    _initMenu();
    _initHome();
    _initAddProject();
  }

  return { init, initSidebarProject, initEditTask };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName == "undefined") {
      throw new Error("Project name cannot be empty");
    }
    this._name = newName;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    if (task instanceof _task__WEBPACK_IMPORTED_MODULE_0__.Task) {
      this.tasks.push(task);
    } else throw new Error("Project.addTask must be passed a Task object");
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  clearTasks() {
    this.tasks = [];
  }
}


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static priorities = ["High", "Medium", "Low"];

  get title() {
    return this._title;
  }

  set title(newTitle) {
    newTitle = newTitle.trim();
    if (newTitle === "") {
      throw new Error("Task title cannot be empty");
    }
    this._title = newTitle;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    newDescription = newDescription.trim();
    this._description = newDescription;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(newDueDate) {
    // TODO: FORMAT DATE
    this._dueDate = newDueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(newPriority) {
    // TODO: Potential need for validation on priority?
    this._priority = newPriority;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDWTtBQUNBO0FBQ047O0FBRXRDOztBQUVBLDJFQUEwQjs7QUFFMUIsK0RBQWM7O0FBRWQ7O0FBRUEsd0JBQXdCLHFEQUFPO0FBQy9CO0FBQ0EsTUFBTSwrQ0FBSTtBQUNWO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFPO0FBQ2hDO0FBQ0EsTUFBTSwrQ0FBSTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUEsZ0VBQWU7QUFDZiwyRUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBYztBQUNoQixDQUFDOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDVTtBQUNNO0FBQ0E7QUFDQTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsdUNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFPO0FBQ25DLFFBQVEsaURBQWE7QUFDckIsK0JBQStCLDRDQUFRO0FBQ3ZDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLDBEQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQTRCO0FBQ2xDLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDZCQUE2Qiw2Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDellLO0FBQ1k7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0VBQXlCO0FBQy9CLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBZSxDQUFDLDRDQUFRO0FBQzlCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sNkRBQW9CO0FBQzFCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVLOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdDIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL21vZHVsZXMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5kb20ucmVmcmVzaFNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cbmxpc3RlbmVycy5pbml0KCk7XG5cbi8vIEJFR0lOIExPQURJTkcgVEVTVCBDQVNFU1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpO1xudGVzdFByb2plY3QuYWRkVGFzayhcbiAgbmV3IFRhc2soXCJUZXN0IFRhc2tcIiwgXCJUZXN0IERlc2NyaXB0aW9uXCIsIFwiVGVzdCBEdWVEYXRlXCIsIFwiSGlnaFwiKVxuKTtcbnByb2plY3RzLnB1c2godGVzdFByb2plY3QpO1xuXG5jb25zdCB0ZXN0UHJvamVjdDIgPSBuZXcgUHJvamVjdChcIlRlc3QgUHJvamVjdCAyXCIpO1xudGVzdFByb2plY3QyLmFkZFRhc2soXG4gIG5ldyBUYXNrKFwiVGVzdCBUYXNrIDJcIiwgXCJUZXN0IERlc2NyaXB0aW9uIDJcIiwgXCJUZXN0IER1ZURhdGUgMlwiLCBcIkhpZ2ggMlwiKVxuKTtcbnByb2plY3RzLnB1c2godGVzdFByb2plY3QyKTtcblxuLy8gRU5EIExPQURJTkcgVEVTVCBDQVNFU1xuXG5kb20uc2hvd1Byb2plY3QodGVzdFByb2plY3QpO1xuZG9tLnJlZnJlc2hTaWRlYmFyUHJvamVjdHMocHJvamVjdHMpO1xuXG5jb25zdCBidG5UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0blRlc3QuaW5uZXJUZXh0ID0gXCJURVNUXCI7XG5jb25zdCB0b3BuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1uYXZcIik7XG50b3BuYXYuYXBwZW5kQ2hpbGQoYnRuVGVzdCk7XG5cbmJ0blRlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9tLmNsZWFyVGFza3MoKTtcbn0pO1xuXG5leHBvcnQgeyBwcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IGxpc3RlbmVycyBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJcIjtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC12aWV3XCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGZ1bmN0aW9uIHNob3dUYXNrcyhwcm9qZWN0KSB7XG4gICAgaWYgKCEocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb20uc2hvd1Rhc2tzIG11c3QgYmUgcGFzc2VkIGEgUHJvamVjdCBvYmplY3RcIik7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQoX3Nob3dUYXNrKHRhc2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zaG93VGFzayh0YXNrKSB7XG4gICAgaWYgKCEodGFzayBpbnN0YW5jZW9mIFRhc2spKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb20uX3Nob3dUYXNrIG11c3QgYmUgcGFzc2VkIGEgVGFzayBvYmplY3RcIik7XG4gICAgfVxuICAgIC8vY3JlYXRlIHRhc2sgY29udGFpbmVyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgLy9jaGVja2JveFxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY29tcGxldGVcIik7XG4gICAgLy90aXRsZVxuICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpdGxlU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIC8vZHVlRGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZChcInRhc2stZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICAvL2VkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIiwgXCJmYS1zb2xpZFwiLCBcImZhLXBlbi10by1zcXVhcmVcIik7XG4gICAgbGlzdGVuZXJzLmluaXRFZGl0VGFzayhlZGl0VGFzayk7XG4gICAgLy9kZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIiwgXCJmYS1zb2xpZFwiLCBcImZhLXRyYXNoLWNhblwiKTtcbiAgICAvL2FwcGVuZCB0byB0YXNrIGNvbnRhaW5lclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVTcGFuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUZvcm0obWV0aG9kLCBhY3Rpb24sIGNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAvLyBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBtZXRob2QpO1xuICAgIC8vIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIGFjdGlvbik7XG5cbiAgICBjbGFzc0xpc3QuZm9yRWFjaCgoYXJnQ2xhc3MpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChhcmdDbGFzcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBfY3JlYXRlRm9ybShcIiNcIiwgXCIjXCIsIFtcImFkZC10YXNrLWZvcm1cIiwgXCJmb3JtXCJdKTtcblxuICAgIC8vIHRhc2sgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICAvLyB0YXNrIGRlc2NyaXB0aW9uIGVudHJ5XG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC1kZXNjcmlwdGlvblwiKTtcbiAgICBsYWJlbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGFiZWxEZXNjcmlwdGlvbik7XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xuXG4gICAgLy8gZHVlIGRhdGUgZW50cnlcbiAgICBjb25zdCBkaXZEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbER1ZURhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXQtZHVlRGF0ZVwiKTtcbiAgICBsYWJlbER1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgaW5wdXREdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC1kdWVEYXRlXCIpO1xuICAgIGRpdkR1ZURhdGUuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkaXZEdWVEYXRlLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG5cbiAgICAvLyBwcmlvcml0eSBlbnRyeVxuICAgIGNvbnN0IGRpdlByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIGRpdlByaW9yaXR5LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIC8qVE9ETyBhZGQgcGxhY2Vob2xkZXIgZm9yIFwic2VsZWN0IHByaW9yaXR5XCIgdGhhdCBpcyBvcHRpb25hbCBhbmQgY2FuXG4gICAgc3VibWl0IG51bGwgdmFsdWUgaW4gdGFzayBjcmVhdGlvbiAodXNlcnMgZG8gbm90IGhhdmUgdG8gYXNzaWduIGEgcHJpb3JpdHkpIFxuICAgIFxuICAgIFVzZSAnc2VsZWN0ZWQsJyAnZGlzYWJsZWQnLCAnaGlkZGVuJyBhdHRyaWJ1dGVzIGluIG9wdGlvbiB0YWcgKi9cbiAgICBUYXNrLnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHkpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGRpdlByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZQcmlvcml0eSk7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgZGl2QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRCdG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwic3VibWl0LXRhc2tcIik7XG4gICAgZGl2QnRuU3VibWl0LmFwcGVuZENoaWxkKGlucHV0QnRuU3VibWl0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZCdG5TdWJtaXQpO1xuXG4gICAgYWRkU3VibWl0TGlzdGVuZXIoKTtcblxuICAgIC8vIGZpbmFsIGFwcGVuZCB0byBjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICAgIGlucHV0QnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNoZWNrIGZvciByZXF1aXJlZCBpbnB1dHNcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrIHRpdGxlXG4gICAgICAgIGlmIChpbnB1dFRpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBsYWJlbFJlcXVpcmVkRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgbGFiZWxSZXF1aXJlZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1sYWJlbFwiKTtcbiAgICAgICAgICBsYWJlbFJlcXVpcmVkRmllbGQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJQbGVhc2UgZW50ZXIgdGhpcyBmaWVsZCBiZWZvcmUgc3VibWl0dGluZ1wiO1xuICAgICAgICAgIGlmIChkaXZUaXRsZS5sYXN0Q2hpbGQuY2xhc3NMaXN0WzBdICE9IFwiZXJyb3ItbGFiZWxcIikge1xuICAgICAgICAgICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxSZXF1aXJlZEZpZWxkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIGlucHV0IHZhbHVlc1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICBpbnB1dFRpdGxlLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXREdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKF9zaG93VGFzayh0YXNrKSk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoYWRkVGFza0Zvcm0pO1xuICAgICAgICBwcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybS1lbnRyeVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IF9jcmVhdGVGb3JtKFwiI1wiLCBcIiNcIiwgW1wiYWRkLXByb2plY3QtZm9ybVwiLCBcImZvcm1cIl0pO1xuICAgIC8vIHByb2plY3QgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgZGl2QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRCdG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwic3VibWl0LXByb2plY3RcIik7XG4gICAgZGl2QnRuU3VibWl0LmFwcGVuZENoaWxkKGlucHV0QnRuU3VibWl0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkaXZCdG5TdWJtaXQpO1xuXG4gICAgYWRkU3VibWl0TGlzdGVuZXIoKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkU3VibWl0TGlzdGVuZXIoKSB7XG4gICAgICBpbnB1dEJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vc3RvcmUgbmV3IHByb2plY3RcbiAgICAgICAgaWYgKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IGxhYmVsUmVxdWlyZWRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICBsYWJlbFJlcXVpcmVkRmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yLWxhYmVsXCIpO1xuICAgICAgICAgIGxhYmVsUmVxdWlyZWRGaWVsZC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIlBsZWFzZSBlbnRlciB0aGlzIGZpZWxkIGJlZm9yZSBzdWJtaXR0aW5nXCI7XG4gICAgICAgICAgaWYgKGRpdlRpdGxlLmxhc3RDaGlsZC5jbGFzc0xpc3RbMF0gIT0gXCJlcnJvci1sYWJlbFwiKSB7XG4gICAgICAgICAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFJlcXVpcmVkRmllbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0VGl0bGUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICByZWZyZXNoU2lkZWJhclByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSh0YXNrSW5kZXgpIHtcbiAgICBjb25zdCB0YXNrID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdO1xuICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IF9jcmVhdGVGb3JtKFwiI1wiLCBcIiNcIiwgW1wiZWRpdC10YXNrLWZvcm1cIiwgXCJmb3JtXCJdKTtcblxuICAgIC8vIHRhc2sgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuXG4gICAgLy8gdGFzayBkZXNjcmlwdGlvbiBlbnRyeVxuICAgIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWRlc2NyaXB0aW9uXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRGVzY3JpcHRpb24pO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBkdWUgZGF0ZSBlbnRyeVxuICAgIGNvbnN0IGRpdkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC1kdWVEYXRlXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWR1ZURhdGVcIik7XG4gICAgaW5wdXREdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGRpdkR1ZURhdGUuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkaXZEdWVEYXRlLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSk7XG4gICAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdkR1ZURhdGUpO1xuXG4gICAgLy8gcHJpb3JpdHkgZW50cnlcbiAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICAvKlRPRE8gYWRkIHBsYWNlaG9sZGVyIGZvciBcInNlbGVjdCBwcmlvcml0eVwiIHRoYXQgaXMgb3B0aW9uYWwgYW5kIGNhblxuc3VibWl0IG51bGwgdmFsdWUgaW4gdGFzayBjcmVhdGlvbiAodXNlcnMgZG8gbm90IGhhdmUgdG8gYXNzaWduIGEgcHJpb3JpdHkpIFxuXG5Vc2UgJ3NlbGVjdGVkLCcgJ2Rpc2FibGVkJywgJ2hpZGRlbicgYXR0cmlidXRlcyBpbiBvcHRpb24gdGFnICovXG4gICAgVGFzay5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5KTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBsZXQgcHJpb0luZGV4ID0gVGFzay5wcmlvcml0aWVzLmluZGV4T2YodGFzay5wcmlvcml0eSk7XG4gICAgc2VsZWN0UHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9IHByaW9JbmRleDtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG4gICAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdlByaW9yaXR5KTtcblxuICAgIC8vIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBkaXZCdG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dEJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGlucHV0QnRuU3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgIGlucHV0QnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJzdWJtaXQtdGFza1wiKTtcbiAgICBkaXZCdG5TdWJtaXQuYXBwZW5kQ2hpbGQoaW5wdXRCdG5TdWJtaXQpO1xuICAgIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZCdG5TdWJtaXQpO1xuXG4gICAgYWRkU3VibWl0TGlzdGVuZXIoKTtcblxuICAgIC8vIGZpbmFsIGFwcGVuZCB0byBjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0pO1xuICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkU3VibWl0TGlzdGVuZXIoKSB7XG4gICAgICBpbnB1dEJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjaGVjayBmb3IgcmVxdWlyZWQgaW5wdXRzXG4gICAgICAgIC8vIHJlcXVpcmUgdGFzayB0aXRsZVxuICAgICAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgbGFiZWxSZXF1aXJlZEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgIGxhYmVsUmVxdWlyZWRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbGFiZWxcIik7XG4gICAgICAgICAgbGFiZWxSZXF1aXJlZEZpZWxkLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiUGxlYXNlIGVudGVyIHRoaXMgZmllbGQgYmVmb3JlIHN1Ym1pdHRpbmdcIjtcbiAgICAgICAgICBpZiAoZGl2VGl0bGUubGFzdENoaWxkLmNsYXNzTGlzdFswXSAhPSBcImVycm9yLWxhYmVsXCIpIHtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGxhYmVsUmVxdWlyZWRGaWVsZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9yZSBpbnB1dCB2YWx1ZXNcblxuICAgICAgICB0YXNrLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGlucHV0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHNlbGVjdFByaW9yaXR5LnZhbHVlO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIHNob3dUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWRpdFRhc2tGb3JtKTtcbiAgICAgICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgcHJvamVjdFZpZXcucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoU2lkZWJhclByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgd2hpbGUgKGxpc3RQcm9qZWN0cy5maXJzdENoaWxkKSB7XG4gICAgICBsaXN0UHJvamVjdHMucmVtb3ZlQ2hpbGQobGlzdFByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBsaVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaVByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBsaVByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgbGlzdFByb2plY3RzLmFwcGVuZENoaWxkKGxpUHJvamVjdCk7XG4gICAgICBsaXN0ZW5lcnMuaW5pdFNpZGViYXJQcm9qZWN0KGxpUHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UHJvamVjdChwcm9qZWN0KSB7XG4gICAgaWYgKCEocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb20uc2hvd1Byb2plY3QgbXVzdCBiZSBwYXNzZWQgYSBQcm9qZWN0IG9iamVjdFwiKTtcbiAgICB9XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgc2hvd1Rhc2tzKHByb2plY3QpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93VGFza3MsXG4gICAgc2hvd0NyZWF0ZVRhc2tGb3JtLFxuICAgIHNob3dDcmVhdGVQcm9qZWN0Rm9ybSxcbiAgICBzaG93RWRpdFRhc2tGb3JtLFxuICAgIGNsZWFyVGFza3MsXG4gICAgc2hvd1Byb2plY3QsXG4gICAgcmVmcmVzaFNpZGViYXJQcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCBsaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBfaW5pdEFkZFRhc2soKSB7XG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLmFkZFRhc2tcIik7XG4gICAgYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tLnNob3dDcmVhdGVUYXNrRm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRNZW51KCkge1xuICAgIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEhvbWUoKSB7XG4gICAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBidG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL1RPRE9cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4uYWRkUHJvamVjdFwiKTtcbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb20uc2hvd0NyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2lkZWJhclByb2plY3QobGkpIHtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDbGlja2VkTGlzdEl0ZW0gPSBBcnJheS5mcm9tKGxpLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoXG4gICAgICAgIGxpXG4gICAgICApO1xuICAgICAgZG9tLnNob3dQcm9qZWN0KHByb2plY3RzW2luZGV4T2ZDbGlja2VkTGlzdEl0ZW1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRFZGl0VGFzayhidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBidG4ucGFyZW50Tm9kZTtcbiAgICAgIC8vIGluZGV4IGlzIHN1YnRyYWN0ZWQgYnkgMiB0byBhY2NvdW50IGZvciBwcm9qZWN0IHRpdGxlIGFuZCBhZGQgdGFzayBidXR0b25cbiAgICAgIC8vIGluZGV4IHZhcmlhYmxlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHByb3BlciB0YXNrIHRvIGVkaXQsIGkuZS4gcHJvamVjdC5nZXRUYXNrKClbaW5kZXhdXG4gICAgICBjb25zdCBpbmRleCA9XG4gICAgICAgIEFycmF5LmZyb20odGFza0NvbnRhaW5lci5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHRhc2tDb250YWluZXIpIC1cbiAgICAgICAgMjtcblxuICAgICAgZG9tLnNob3dFZGl0VGFza0Zvcm0oaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEFkZFRhc2soKTtcbiAgICBfaW5pdE1lbnUoKTtcbiAgICBfaW5pdEhvbWUoKTtcbiAgICBfaW5pdEFkZFByb2plY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGluaXRTaWRlYmFyUHJvamVjdCwgaW5pdEVkaXRUYXNrIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmV3TmFtZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrKSB7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIlByb2plY3QuYWRkVGFzayBtdXN0IGJlIHBhc3NlZCBhIFRhc2sgb2JqZWN0XCIpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgY2xlYXJUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBzdGF0aWMgcHJpb3JpdGllcyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIG5ld1RpdGxlID0gbmV3VGl0bGUudHJpbSgpO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgbmV3RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbi50cmltKCk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIC8vIFRPRE86IEZPUk1BVCBEQVRFXG4gICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgLy8gVE9ETzogUG90ZW50aWFsIG5lZWQgZm9yIHZhbGlkYXRpb24gb24gcHJpb3JpdHk/XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==