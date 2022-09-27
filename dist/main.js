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

btnTest.addEventListener("click", () => {});




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
    _listeners__WEBPACK_IMPORTED_MODULE_3__["default"].initRemoveTask(deleteTask);
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
    const prioIndex = _task__WEBPACK_IMPORTED_MODULE_0__.Task.priorities.indexOf(task.priority);
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

  function removeTask(taskIndex) {
    // note that taskIndex will be inflated by 2 vs its projects array location
    const removedTaskContainer = projectView.children[taskIndex];
    projectView.removeChild(removedTaskContainer);
    currentProject.removeTask(taskIndex - 2);
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
    removeTask,
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

  function initRemoveTask(btn) {
    btn.addEventListener("click", () => {
      const taskContainer = btn.parentNode;
      const index = Array.from(taskContainer.parentNode.children).indexOf(
        taskContainer
      );
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(index);
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

  return { init, initSidebarProject, initEditTask, initRemoveTask };
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
    this.completion = false;
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

  get completion() {
    return this._completion;
  }

  set completion(bool) {
    if (typeof bool == "boolean") {
      this._completion = bool;
    }
  }

  toggleCompletion() {
    this.completion = !this.completion;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDWTtBQUNBO0FBQ047O0FBRXRDOztBQUVBLDJFQUEwQjs7QUFFMUIsK0RBQWM7O0FBRWQ7O0FBRUEsd0JBQXdCLHFEQUFPO0FBQy9CO0FBQ0EsTUFBTSwrQ0FBSTtBQUNWO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFPO0FBQ2hDO0FBQ0EsTUFBTSwrQ0FBSTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUEsZ0VBQWU7QUFDZiwyRUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQzs7QUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ1U7QUFDTTtBQUNBO0FBQ0E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsNkNBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBCQUEwQix1Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHVDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBTztBQUNuQyxRQUFRLGlEQUFhO0FBQ3JCLCtCQUErQiw0Q0FBUTtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMERBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQiwwREFBdUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBNEI7QUFDbEMsS0FBSztBQUNMOztBQUVBO0FBQ0EsNkJBQTZCLDZDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xaSztBQUNZOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtFQUF5QjtBQUMvQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWUsQ0FBQyw0Q0FBUTtBQUM5QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLDZEQUFvQjtBQUMxQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFSzs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQy9EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyLy4vc3JjL21vZHVsZXMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvbSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuaW1wb3J0IGxpc3RlbmVycyBmcm9tIFwiLi9tb2R1bGVzL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZG9tLnJlZnJlc2hTaWRlYmFyUHJvamVjdHMocHJvamVjdHMpO1xuXG5saXN0ZW5lcnMuaW5pdCgpO1xuXG4vLyBCRUdJTiBMT0FESU5HIFRFU1QgQ0FTRVNcblxuY29uc3QgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdChcIlRlc3QgUHJvamVjdFwiKTtcbnRlc3RQcm9qZWN0LmFkZFRhc2soXG4gIG5ldyBUYXNrKFwiVGVzdCBUYXNrXCIsIFwiVGVzdCBEZXNjcmlwdGlvblwiLCBcIlRlc3QgRHVlRGF0ZVwiLCBcIkhpZ2hcIilcbik7XG5wcm9qZWN0cy5wdXNoKHRlc3RQcm9qZWN0KTtcblxuY29uc3QgdGVzdFByb2plY3QyID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3QgMlwiKTtcbnRlc3RQcm9qZWN0Mi5hZGRUYXNrKFxuICBuZXcgVGFzayhcIlRlc3QgVGFzayAyXCIsIFwiVGVzdCBEZXNjcmlwdGlvbiAyXCIsIFwiVGVzdCBEdWVEYXRlIDJcIiwgXCJIaWdoIDJcIilcbik7XG5wcm9qZWN0cy5wdXNoKHRlc3RQcm9qZWN0Mik7XG5cbi8vIEVORCBMT0FESU5HIFRFU1QgQ0FTRVNcblxuZG9tLnNob3dQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbmRvbS5yZWZyZXNoU2lkZWJhclByb2plY3RzKHByb2plY3RzKTtcblxuY29uc3QgYnRuVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5UZXN0LmlubmVyVGV4dCA9IFwiVEVTVFwiO1xuY29uc3QgdG9wbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbmF2XCIpO1xudG9wbmF2LmFwcGVuZENoaWxkKGJ0blRlc3QpO1xuXG5idG5UZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7fSk7XG5cbmV4cG9ydCB7IHByb2plY3RzIH07XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3QgPSBcIlwiO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXZpZXdcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICBpZiAoIShwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5zaG93VGFza3MgbXVzdCBiZSBwYXNzZWQgYSBQcm9qZWN0IG9iamVjdFwiKTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChfc2hvd1Rhc2sodGFzaykpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nob3dUYXNrKHRhc2spIHtcbiAgICBpZiAoISh0YXNrIGluc3RhbmNlb2YgVGFzaykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5fc2hvd1Rhc2sgbXVzdCBiZSBwYXNzZWQgYSBUYXNrIG9iamVjdFwiKTtcbiAgICB9XG4gICAgLy9jcmVhdGUgdGFzayBjb250YWluZXJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICAvL2NoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAvL3RpdGxlXG4gICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgLy9kdWVEYXRlXG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkdWVEYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kdWVEYXRlXCIpO1xuICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIC8vZWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImVkaXQtdGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcbiAgICBsaXN0ZW5lcnMuaW5pdEVkaXRUYXNrKGVkaXRUYXNrKTtcbiAgICAvL2RlbGV0ZSBidXR0b25cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtdHJhc2gtY2FuXCIpO1xuICAgIGxpc3RlbmVycy5pbml0UmVtb3ZlVGFzayhkZWxldGVUYXNrKTtcbiAgICAvL2FwcGVuZCB0byB0YXNrIGNvbnRhaW5lclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVTcGFuKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUYXNrKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUZvcm0obWV0aG9kLCBhY3Rpb24sIGNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAvLyBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBtZXRob2QpO1xuICAgIC8vIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIGFjdGlvbik7XG5cbiAgICBjbGFzc0xpc3QuZm9yRWFjaCgoYXJnQ2xhc3MpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChhcmdDbGFzcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBfY3JlYXRlRm9ybShcIiNcIiwgXCIjXCIsIFtcImFkZC10YXNrLWZvcm1cIiwgXCJmb3JtXCJdKTtcblxuICAgIC8vIHRhc2sgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICAvLyB0YXNrIGRlc2NyaXB0aW9uIGVudHJ5XG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC1kZXNjcmlwdGlvblwiKTtcbiAgICBsYWJlbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGFiZWxEZXNjcmlwdGlvbik7XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xuXG4gICAgLy8gZHVlIGRhdGUgZW50cnlcbiAgICBjb25zdCBkaXZEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbER1ZURhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXQtZHVlRGF0ZVwiKTtcbiAgICBsYWJlbER1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICAgIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgaW5wdXREdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC1kdWVEYXRlXCIpO1xuICAgIGRpdkR1ZURhdGUuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkaXZEdWVEYXRlLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG5cbiAgICAvLyBwcmlvcml0eSBlbnRyeVxuICAgIGNvbnN0IGRpdlByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICAgIGRpdlByaW9yaXR5LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByaW9yaXR5XCIpO1xuICAgIC8qVE9ETyBhZGQgcGxhY2Vob2xkZXIgZm9yIFwic2VsZWN0IHByaW9yaXR5XCIgdGhhdCBpcyBvcHRpb25hbCBhbmQgY2FuXG4gICAgc3VibWl0IG51bGwgdmFsdWUgaW4gdGFzayBjcmVhdGlvbiAodXNlcnMgZG8gbm90IGhhdmUgdG8gYXNzaWduIGEgcHJpb3JpdHkpIFxuICAgIFxuICAgIFVzZSAnc2VsZWN0ZWQsJyAnZGlzYWJsZWQnLCAnaGlkZGVuJyBhdHRyaWJ1dGVzIGluIG9wdGlvbiB0YWcgKi9cbiAgICBUYXNrLnByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHkpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGRpdlByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZQcmlvcml0eSk7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgZGl2QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRCdG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwic3VibWl0LXRhc2tcIik7XG4gICAgZGl2QnRuU3VibWl0LmFwcGVuZENoaWxkKGlucHV0QnRuU3VibWl0KTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZCdG5TdWJtaXQpO1xuXG4gICAgYWRkU3VibWl0TGlzdGVuZXIoKTtcblxuICAgIC8vIGZpbmFsIGFwcGVuZCB0byBjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICAgIGlucHV0QnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNoZWNrIGZvciByZXF1aXJlZCBpbnB1dHNcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrIHRpdGxlXG4gICAgICAgIGlmIChpbnB1dFRpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBsYWJlbFJlcXVpcmVkRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgbGFiZWxSZXF1aXJlZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1sYWJlbFwiKTtcbiAgICAgICAgICBsYWJlbFJlcXVpcmVkRmllbGQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJQbGVhc2UgZW50ZXIgdGhpcyBmaWVsZCBiZWZvcmUgc3VibWl0dGluZ1wiO1xuICAgICAgICAgIGlmIChkaXZUaXRsZS5sYXN0Q2hpbGQuY2xhc3NMaXN0WzBdICE9IFwiZXJyb3ItbGFiZWxcIikge1xuICAgICAgICAgICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxSZXF1aXJlZEZpZWxkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIGlucHV0IHZhbHVlc1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICBpbnB1dFRpdGxlLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXREdWVEYXRlLnZhbHVlLFxuICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKF9zaG93VGFzayh0YXNrKSk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoYWRkVGFza0Zvcm0pO1xuICAgICAgICBwcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybS1lbnRyeVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IF9jcmVhdGVGb3JtKFwiI1wiLCBcIiNcIiwgW1wiYWRkLXByb2plY3QtZm9ybVwiLCBcImZvcm1cIl0pO1xuICAgIC8vIHByb2plY3QgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICAvLyBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgZGl2QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRCdG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBpbnB1dEJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwic3VibWl0LXByb2plY3RcIik7XG4gICAgZGl2QnRuU3VibWl0LmFwcGVuZENoaWxkKGlucHV0QnRuU3VibWl0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkaXZCdG5TdWJtaXQpO1xuXG4gICAgYWRkU3VibWl0TGlzdGVuZXIoKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkU3VibWl0TGlzdGVuZXIoKSB7XG4gICAgICBpbnB1dEJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vc3RvcmUgbmV3IHByb2plY3RcbiAgICAgICAgaWYgKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IGxhYmVsUmVxdWlyZWRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICBsYWJlbFJlcXVpcmVkRmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yLWxhYmVsXCIpO1xuICAgICAgICAgIGxhYmVsUmVxdWlyZWRGaWVsZC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIlBsZWFzZSBlbnRlciB0aGlzIGZpZWxkIGJlZm9yZSBzdWJtaXR0aW5nXCI7XG4gICAgICAgICAgaWYgKGRpdlRpdGxlLmxhc3RDaGlsZC5jbGFzc0xpc3RbMF0gIT0gXCJlcnJvci1sYWJlbFwiKSB7XG4gICAgICAgICAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFJlcXVpcmVkRmllbGQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0VGl0bGUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICByZWZyZXNoU2lkZWJhclByb2plY3RzKHByb2plY3RzKTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChhZGRQcm9qZWN0Rm9ybSk7XG4gICAgICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSh0YXNrSW5kZXgpIHtcbiAgICBjb25zdCB0YXNrID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVt0YXNrSW5kZXhdO1xuICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IF9jcmVhdGVGb3JtKFwiI1wiLCBcIiNcIiwgW1wiZWRpdC10YXNrLWZvcm1cIiwgXCJmb3JtXCJdKTtcblxuICAgIC8vIHRhc2sgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuXG4gICAgLy8gdGFzayBkZXNjcmlwdGlvbiBlbnRyeVxuICAgIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWRlc2NyaXB0aW9uXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRGVzY3JpcHRpb24pO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgIGVkaXRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBkdWUgZGF0ZSBlbnRyeVxuICAgIGNvbnN0IGRpdkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC1kdWVEYXRlXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWR1ZURhdGVcIik7XG4gICAgaW5wdXREdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGRpdkR1ZURhdGUuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkaXZEdWVEYXRlLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZSk7XG4gICAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdkR1ZURhdGUpO1xuXG4gICAgLy8gcHJpb3JpdHkgZW50cnlcbiAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICAvKlRPRE8gYWRkIHBsYWNlaG9sZGVyIGZvciBcInNlbGVjdCBwcmlvcml0eVwiIHRoYXQgaXMgb3B0aW9uYWwgYW5kIGNhblxuc3VibWl0IG51bGwgdmFsdWUgaW4gdGFzayBjcmVhdGlvbiAodXNlcnMgZG8gbm90IGhhdmUgdG8gYXNzaWduIGEgcHJpb3JpdHkpIFxuXG5Vc2UgJ3NlbGVjdGVkLCcgJ2Rpc2FibGVkJywgJ2hpZGRlbicgYXR0cmlidXRlcyBpbiBvcHRpb24gdGFnICovXG4gICAgVGFzay5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5KTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcmlvSW5kZXggPSBUYXNrLnByaW9yaXRpZXMuaW5kZXhPZih0YXNrLnByaW9yaXR5KTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gcHJpb0luZGV4O1xuICAgIGRpdlByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcbiAgICBlZGl0VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGRpdkJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0QnRuU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInN1Ym1pdC10YXNrXCIpO1xuICAgIGRpdkJ0blN1Ym1pdC5hcHBlbmRDaGlsZChpbnB1dEJ0blN1Ym1pdCk7XG4gICAgZWRpdFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdkJ0blN1Ym1pdCk7XG5cbiAgICBhZGRTdWJtaXRMaXN0ZW5lcigpO1xuXG4gICAgLy8gZmluYWwgYXBwZW5kIHRvIGNvbnRlbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybSk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICAgIGlucHV0QnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNoZWNrIGZvciByZXF1aXJlZCBpbnB1dHNcbiAgICAgICAgLy8gcmVxdWlyZSB0YXNrIHRpdGxlXG4gICAgICAgIGlmIChpbnB1dFRpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBsYWJlbFJlcXVpcmVkRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgbGFiZWxSZXF1aXJlZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1sYWJlbFwiKTtcbiAgICAgICAgICBsYWJlbFJlcXVpcmVkRmllbGQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJQbGVhc2UgZW50ZXIgdGhpcyBmaWVsZCBiZWZvcmUgc3VibWl0dGluZ1wiO1xuICAgICAgICAgIGlmIChkaXZUaXRsZS5sYXN0Q2hpbGQuY2xhc3NMaXN0WzBdICE9IFwiZXJyb3ItbGFiZWxcIikge1xuICAgICAgICAgICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxSZXF1aXJlZEZpZWxkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIGlucHV0IHZhbHVlc1xuXG4gICAgICAgIHRhc2sudGl0bGUgPSBpbnB1dFRpdGxlLnZhbHVlO1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gaW5wdXREdWVEYXRlLnZhbHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gc2VsZWN0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgc2hvd1Rhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChlZGl0VGFza0Zvcm0pO1xuICAgICAgICBwcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybS1lbnRyeVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0luZGV4KSB7XG4gICAgLy8gbm90ZSB0aGF0IHRhc2tJbmRleCB3aWxsIGJlIGluZmxhdGVkIGJ5IDIgdnMgaXRzIHByb2plY3RzIGFycmF5IGxvY2F0aW9uXG4gICAgY29uc3QgcmVtb3ZlZFRhc2tDb250YWluZXIgPSBwcm9qZWN0Vmlldy5jaGlsZHJlblt0YXNrSW5kZXhdO1xuICAgIHByb2plY3RWaWV3LnJlbW92ZUNoaWxkKHJlbW92ZWRUYXNrQ29udGFpbmVyKTtcbiAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUYXNrKHRhc2tJbmRleCAtIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcbiAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHByb2plY3RWaWV3LnJlbW92ZUNoaWxkKHRhc2spO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmcmVzaFNpZGViYXJQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICAgIHdoaWxlIChsaXN0UHJvamVjdHMuZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdFByb2plY3RzLnJlbW92ZUNoaWxkKGxpc3RQcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgbGlQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgbGlQcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICAgIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZChsaVByb2plY3QpO1xuICAgICAgbGlzdGVuZXJzLmluaXRTaWRlYmFyUHJvamVjdChsaVByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdCkge1xuICAgIGlmICghKHByb2plY3QgaW5zdGFuY2VvZiBQcm9qZWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9tLnNob3dQcm9qZWN0IG11c3QgYmUgcGFzc2VkIGEgUHJvamVjdCBvYmplY3RcIik7XG4gICAgfVxuICAgIGNsZWFyVGFza3MoKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIHNob3dUYXNrcyhwcm9qZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hvd1Rhc2tzLFxuICAgIHNob3dDcmVhdGVUYXNrRm9ybSxcbiAgICBzaG93Q3JlYXRlUHJvamVjdEZvcm0sXG4gICAgc2hvd0VkaXRUYXNrRm9ybSxcbiAgICBjbGVhclRhc2tzLFxuICAgIHNob3dQcm9qZWN0LFxuICAgIHJlZnJlc2hTaWRlYmFyUHJvamVjdHMsXG4gICAgcmVtb3ZlVGFzayxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCBsaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBfaW5pdEFkZFRhc2soKSB7XG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLmFkZFRhc2tcIik7XG4gICAgYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tLnNob3dDcmVhdGVUYXNrRm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRNZW51KCkge1xuICAgIGNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEhvbWUoKSB7XG4gICAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBidG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL1RPRE9cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4uYWRkUHJvamVjdFwiKTtcbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb20uc2hvd0NyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2lkZWJhclByb2plY3QobGkpIHtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDbGlja2VkTGlzdEl0ZW0gPSBBcnJheS5mcm9tKGxpLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoXG4gICAgICAgIGxpXG4gICAgICApO1xuICAgICAgZG9tLnNob3dQcm9qZWN0KHByb2plY3RzW2luZGV4T2ZDbGlja2VkTGlzdEl0ZW1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRSZW1vdmVUYXNrKGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGJ0bi5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihcbiAgICAgICAgdGFza0NvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIGRvbS5yZW1vdmVUYXNrKGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRFZGl0VGFzayhidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBidG4ucGFyZW50Tm9kZTtcbiAgICAgIC8vIGluZGV4IGlzIHN1YnRyYWN0ZWQgYnkgMiB0byBhY2NvdW50IGZvciBwcm9qZWN0IHRpdGxlIGFuZCBhZGQgdGFzayBidXR0b25cbiAgICAgIC8vIGluZGV4IHZhcmlhYmxlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHByb3BlciB0YXNrIHRvIGVkaXQsIGkuZS4gcHJvamVjdC5nZXRUYXNrKClbaW5kZXhdXG4gICAgICBjb25zdCBpbmRleCA9XG4gICAgICAgIEFycmF5LmZyb20odGFza0NvbnRhaW5lci5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKHRhc2tDb250YWluZXIpIC1cbiAgICAgICAgMjtcblxuICAgICAgZG9tLnNob3dFZGl0VGFza0Zvcm0oaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEFkZFRhc2soKTtcbiAgICBfaW5pdE1lbnUoKTtcbiAgICBfaW5pdEhvbWUoKTtcbiAgICBfaW5pdEFkZFByb2plY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIGluaXRTaWRlYmFyUHJvamVjdCwgaW5pdEVkaXRUYXNrLCBpbml0UmVtb3ZlVGFzayB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXJzO1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5ld05hbWUgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvamVjdCBuYW1lIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICB9XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFzaykge1xuICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0LmFkZFRhc2sgbXVzdCBiZSBwYXNzZWQgYSBUYXNrIG9iamVjdFwiKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza0luZGV4KSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIGNsZWFyVGFza3MoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICBuZXdUaXRsZSA9IG5ld1RpdGxlLnRyaW0oKTtcbiAgICBpZiAobmV3VGl0bGUgPT09IFwiXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRhc2sgdGl0bGUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgIG5ld0Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24udHJpbSgpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICAvLyBUT0RPOiBGT1JNQVQgREFURVxuICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIC8vIFRPRE86IFBvdGVudGlhbCBuZWVkIGZvciB2YWxpZGF0aW9uIG9uIHByaW9yaXR5P1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH1cblxuICBnZXQgY29tcGxldGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGlvbjtcbiAgfVxuXG4gIHNldCBjb21wbGV0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgPT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRpb24gPSBib29sO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRpb24oKSB7XG4gICAgdGhpcy5jb21wbGV0aW9uID0gIXRoaXMuY29tcGxldGlvbjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==