/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



const dom = (() => {
  const menu = document.getElementById("menu");
  const home = document.getElementById("home");
  const btnAddTask = document.querySelector(".btn.addTask");
  const projectTitle = document.querySelector(".project-title");
  const projectView = document.getElementById("project-view");
  const content = document.getElementById("content");

  function showTasks(project) {
    if (!(project instanceof _project__WEBPACK_IMPORTED_MODULE_1__.Project)) {
      throw new Error("dom.showTasks must be passed a Project object");
    }
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

  function showCreateTaskForm() {
    const addTaskForm = _createForm("get", "#", ["add-task-form"]);

    // task title entry
    const divTitle = document.createElement("div");
    divTitle.classList.add("form-input");
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "input-title");
    labelTitle.textContent = "Title:";
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "input-title");
    inputTitle.setAttribute("required", "true");
    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    addTaskForm.appendChild(divTitle);

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

    // final append to content
    content.appendChild(addTaskForm);
    projectView.classList.toggle("form-entry");
  }

  return { showTasks, showCreateTaskForm };
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


const listeners = (() => {
  const btnAddTask = document.querySelector(".btn.addTask");

  function _initAddTask() {
    btnAddTask.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].showCreateTaskForm();
    });
  }

  function init() {
    _initAddTask();
  }

  return { init };
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

  static priorities = ["High", "Medium", "Low"];
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listeners */ "./src/modules/listeners.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");





const testProject = new _modules_project__WEBPACK_IMPORTED_MODULE_2__.Project("Test Project");
testProject.addTask(
  new _modules_task__WEBPACK_IMPORTED_MODULE_3__.Task("Test Task", "Test Description", "Test DueDate", "High")
);

_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks(testProject);

_modules_listeners__WEBPACK_IMPORTED_MODULE_1__["default"].init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDZDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCLHVDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbklLOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCSzs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ1k7QUFDQTtBQUNOOztBQUV0Qyx3QkFBd0IscURBQU87QUFDL0I7QUFDQSxNQUFNLCtDQUFJO0FBQ1Y7O0FBRUEsOERBQWE7O0FBRWIsK0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QyLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi5hZGRUYXNrXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXZpZXdcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICBpZiAoIShwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5zaG93VGFza3MgbXVzdCBiZSBwYXNzZWQgYSBQcm9qZWN0IG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKF9zaG93VGFzayh0YXNrKSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2hvd1Rhc2sodGFzaykge1xuICAgIGlmICghKHRhc2sgaW5zdGFuY2VvZiBUYXNrKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9tLl9zaG93VGFzayBtdXN0IGJlIHBhc3NlZCBhIFRhc2sgb2JqZWN0XCIpO1xuICAgIH1cbiAgICAvL2NyZWF0ZSB0YXNrIGNvbnRhaW5lclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgIC8vY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgIC8vdGl0bGVcbiAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAvL2R1ZURhdGVcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZURhdGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgLy9lZGl0IGJ1dHRvblxuICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0VGFzay5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCIpO1xuICAgIC8vZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIsIFwiZmEtc29saWRcIiwgXCJmYS10cmFzaC1jYW5cIik7XG4gICAgLy9hcHBlbmQgdG8gdGFzayBjb250YWluZXJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFzayk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVGb3JtKG1ldGhvZCwgYWN0aW9uLCBjbGFzc0xpc3QpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgbWV0aG9kKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBhY3Rpb24pO1xuICAgIGNsYXNzTGlzdC5mb3JFYWNoKChhcmdDbGFzcykgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKGFyZ0NsYXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IF9jcmVhdGVGb3JtKFwiZ2V0XCIsIFwiI1wiLCBbXCJhZGQtdGFzay1mb3JtXCJdKTtcblxuICAgIC8vIHRhc2sgdGl0bGUgZW50cnlcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LXRpdGxlXCIpO1xuICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG5cbiAgICAvLyBkdWUgZGF0ZSBlbnRyeVxuICAgIGNvbnN0IGRpdkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC1kdWVEYXRlXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWR1ZURhdGVcIik7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChsYWJlbER1ZURhdGUpO1xuICAgIGRpdkR1ZURhdGUuYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChkaXZEdWVEYXRlKTtcblxuICAgIC8vIHByaW9yaXR5IGVudHJ5XG4gICAgY29uc3QgZGl2UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzZWxlY3QtcHJpb3JpdHlcIik7XG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgZGl2UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSk7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzZWxlY3QtcHJpb3JpdHlcIik7XG4gICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3QtcHJpb3JpdHlcIik7XG4gICAgVGFzay5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5KTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGRpdkJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0QnRuU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInN1Ym1pdC10YXNrXCIpO1xuICAgIGRpdkJ0blN1Ym1pdC5hcHBlbmRDaGlsZChpbnB1dEJ0blN1Ym1pdCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2QnRuU3VibWl0KTtcblxuICAgIC8vIGZpbmFsIGFwcGVuZCB0byBjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG4gIH1cblxuICByZXR1cm4geyBzaG93VGFza3MsIHNob3dDcmVhdGVUYXNrRm9ybSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgbGlzdGVuZXJzID0gKCgpID0+IHtcbiAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLmFkZFRhc2tcIik7XG5cbiAgZnVuY3Rpb24gX2luaXRBZGRUYXNrKCkge1xuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvbS5zaG93Q3JlYXRlVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRBZGRUYXNrKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmV3TmFtZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrKSB7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIlByb2plY3QuYWRkVGFzayBtdXN0IGJlIHBhc3NlZCBhIFRhc2sgb2JqZWN0XCIpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgY2xlYXJUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgbmV3VGl0bGUgPSBuZXdUaXRsZS50cmltKCk7XG4gICAgaWYgKG5ld1RpdGxlID09PSBcIlwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUYXNrIHRpdGxlIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICB9XG4gICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICBuZXdEZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uLnRyaW0oKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgLy8gVE9ETzogRk9STUFUIERBVEVcbiAgICB0aGlzLl9kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAvLyBUT0RPOiBQb3RlbnRpYWwgbmVlZCBmb3IgdmFsaWRhdGlvbiBvbiBwcmlvcml0eT9cbiAgICB0aGlzLl9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9XG5cbiAgc3RhdGljIHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL21vZHVsZXMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3RcIik7XG50ZXN0UHJvamVjdC5hZGRUYXNrKFxuICBuZXcgVGFzayhcIlRlc3QgVGFza1wiLCBcIlRlc3QgRGVzY3JpcHRpb25cIiwgXCJUZXN0IER1ZURhdGVcIiwgXCJIaWdoXCIpXG4pO1xuXG5kb20uc2hvd1Rhc2tzKHRlc3RQcm9qZWN0KTtcblxubGlzdGVuZXJzLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==