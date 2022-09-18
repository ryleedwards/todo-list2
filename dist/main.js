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

  function showTasks(project) {
    if (!(project instanceof _project__WEBPACK_IMPORTED_MODULE_1__.Project)) {
      throw new Error("dom.showTasks must be passed a Project object");
    }
    project.getTasks().forEach((task) => {
      projectView.appendChild(_createTask(task));
    });
  }

  function _createTask(task) {
    if (!(task instanceof _task__WEBPACK_IMPORTED_MODULE_0__.Task)) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


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
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");




const testProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__.Project("Test Project");
testProject.addTask(
  new _modules_task__WEBPACK_IMPORTED_MODULE_2__.Task("Test Task", "Test Description", "Test DueDate", "High")
);

_modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks(testProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw2Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBCQUEwQix1Q0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVXOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNZO0FBQ047O0FBRXRDLHdCQUF3QixxREFBTztBQUMvQjtBQUNBLE1BQU0sK0NBQUk7QUFDVjs7QUFFQSw4REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi5hZGRUYXNrXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXZpZXdcIik7XG5cbiAgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICBpZiAoIShwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5zaG93VGFza3MgbXVzdCBiZSBwYXNzZWQgYSBQcm9qZWN0IG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHByb2plY3RWaWV3LmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrKHRhc2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVUYXNrKHRhc2spIHtcbiAgICBpZiAoISh0YXNrIGluc3RhbmNlb2YgVGFzaykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5fY3JlYXRlVGFzayBtdXN0IGJlIHBhc3NlZCBhIFRhc2sgb2JqZWN0XCIpO1xuICAgIH1cbiAgICAvL2NyZWF0ZSB0YXNrIGNvbnRhaW5lclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgIC8vY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgIC8vdGl0bGVcbiAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAvL2R1ZURhdGVcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZURhdGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgLy9lZGl0IGJ1dHRvblxuICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0VGFzay5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIsIFwiZmEtc29saWRcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCIpO1xuICAgIC8vZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIsIFwiZmEtc29saWRcIiwgXCJmYS10cmFzaC1jYW5cIik7XG4gICAgLy9hcHBlbmQgdG8gdGFzayBjb250YWluZXJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0VGFzayk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVGb3JtKG1ldGhvZCwgYWN0aW9uLCBjbGFzc0xpc3QpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgbWV0aG9kKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBhY3Rpb24pO1xuICAgIGNsYXNzTGlzdC5mb3JFYWNoKChhcmdDbGFzcykgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKGFyZ0NsYXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gX2NyZWF0ZUZvcm0oXCJnZXRcIiwgXCIjXCIsIFwiYWRkLXRhc2stZm9ybVwiKTtcbiAgfVxuXG4gIHJldHVybiB7IHNob3dUYXNrcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5ld05hbWUgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvamVjdCBuYW1lIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICB9XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIGlmICh0YXNrIGluc3RhbmNlb2YgVGFzaykge1xuICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0LmFkZFRhc2sgbXVzdCBiZSBwYXNzZWQgYSBUYXNrIG9iamVjdFwiKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFza0luZGV4KSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgfVxuXG4gIGNsZWFyVGFza3MoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIG5ld1RpdGxlID0gbmV3VGl0bGUudHJpbSgpO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgbmV3RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbi50cmltKCk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIC8vIFRPRE86IEZPUk1BVCBEQVRFXG4gICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgLy8gVE9ETzogUG90ZW50aWFsIG5lZWQgZm9yIHZhbGlkYXRpb24gb24gcHJpb3JpdHk/XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3RcIik7XG50ZXN0UHJvamVjdC5hZGRUYXNrKFxuICBuZXcgVGFzayhcIlRlc3QgVGFza1wiLCBcIlRlc3QgRGVzY3JpcHRpb25cIiwgXCJUZXN0IER1ZURhdGVcIiwgXCJIaWdoXCIpXG4pO1xuXG5kb20uc2hvd1Rhc2tzKHRlc3RQcm9qZWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==