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
  let currentProject = "";
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
    const addTaskForm = _createForm("#", "#", ["add-task-form"]);

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

  function clearTasks() {
    let tasks = document.querySelectorAll(".task-container");
    tasks.forEach((task) => {
      projectView.removeChild(task);
    });
  }

  return { showTasks, showCreateTaskForm, clearTasks };
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

const btnTest = document.createElement("button");
btnTest.innerText = "TEST";
const topnav = document.querySelector(".top-nav");
console.log(topnav);
topnav.appendChild(btnTest);

btnTest.addEventListener("click", () => {
  _modules_dom__WEBPACK_IMPORTED_MODULE_0__["default"].clearTasks();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNZO0FBQ0E7QUFDTjs7QUFFdEMsd0JBQXdCLHFEQUFPO0FBQy9CO0FBQ0EsTUFBTSwrQ0FBSTtBQUNWOztBQUVBLDhEQUFhOztBQUViLCtEQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFjO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QyLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvbW9kdWxlcy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IFwiXCI7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi5hZGRUYXNrXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXZpZXdcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICBpZiAoIShwcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5zaG93VGFza3MgbXVzdCBiZSBwYXNzZWQgYSBQcm9qZWN0IG9iamVjdFwiKTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChfc2hvd1Rhc2sodGFzaykpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Nob3dUYXNrKHRhc2spIHtcbiAgICBpZiAoISh0YXNrIGluc3RhbmNlb2YgVGFzaykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImRvbS5fc2hvd1Rhc2sgbXVzdCBiZSBwYXNzZWQgYSBUYXNrIG9iamVjdFwiKTtcbiAgICB9XG4gICAgLy9jcmVhdGUgdGFzayBjb250YWluZXJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICAvL2NoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAvL3RpdGxlXG4gICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgLy9kdWVEYXRlXG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkdWVEYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kdWVEYXRlXCIpO1xuICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIC8vZWRpdCBidXR0b25cbiAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdFRhc2suY2xhc3NMaXN0LmFkZChcImVkaXQtdGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcbiAgICAvL2RlbGV0ZSBidXR0b25cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiLCBcImZhLXNvbGlkXCIsIFwiZmEtdHJhc2gtY2FuXCIpO1xuICAgIC8vYXBwZW5kIHRvIHRhc2sgY29udGFpbmVyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRhc2spO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlRm9ybShtZXRob2QsIGFjdGlvbiwgY2xhc3NMaXN0KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIC8vIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIG1ldGhvZCk7XG4gICAgLy8gZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgYWN0aW9uKTtcblxuICAgIGNsYXNzTGlzdC5mb3JFYWNoKChhcmdDbGFzcykgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKGFyZ0NsYXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDcmVhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IF9jcmVhdGVGb3JtKFwiI1wiLCBcIiNcIiwgW1wiYWRkLXRhc2stZm9ybVwiXSk7XG5cbiAgICAvLyB0YXNrIHRpdGxlIGVudHJ5XG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbnB1dC10aXRsZVwiKTtcbiAgICBsYWJlbFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5wdXQtdGl0bGVcIik7XG4gICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuXG4gICAgLy8gdGFzayBkZXNjcmlwdGlvbiBlbnRyeVxuICAgIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlucHV0LWRlc2NyaXB0aW9uXCIpO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRGVzY3JpcHRpb24pO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcblxuICAgIC8vIGR1ZSBkYXRlIGVudHJ5XG4gICAgY29uc3QgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1pbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxEdWVEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImlucHV0LWR1ZURhdGVcIik7XG4gICAgbGFiZWxEdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXREdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5wdXQtZHVlRGF0ZVwiKTtcbiAgICBkaXZEdWVEYXRlLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdkR1ZURhdGUpO1xuXG4gICAgLy8gcHJpb3JpdHkgZW50cnlcbiAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZvcm0taW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcmlvcml0eVwiKTtcbiAgICAvKlRPRE8gYWRkIHBsYWNlaG9sZGVyIGZvciBcInNlbGVjdCBwcmlvcml0eVwiIHRoYXQgaXMgb3B0aW9uYWwgYW5kIGNhblxuICAgIHN1Ym1pdCBudWxsIHZhbHVlIGluIHRhc2sgY3JlYXRpb24gKHVzZXJzIGRvIG5vdCBoYXZlIHRvIGFzc2lnbiBhIHByaW9yaXR5KSBcbiAgICBcbiAgICBVc2UgJ3NlbGVjdGVkLCcgJ2Rpc2FibGVkJywgJ2hpZGRlbicgYXR0cmlidXRlcyBpbiBvcHRpb24gdGFnICovXG4gICAgVGFzay5wcmlvcml0aWVzLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5KTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuXG4gICAgLy8gc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGRpdkJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0QnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0QnRuU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgaW5wdXRCdG5TdWJtaXQuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInN1Ym1pdC10YXNrXCIpO1xuICAgIGRpdkJ0blN1Ym1pdC5hcHBlbmRDaGlsZChpbnB1dEJ0blN1Ym1pdCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2QnRuU3VibWl0KTtcblxuICAgIGFkZFN1Ym1pdExpc3RlbmVyKCk7XG5cbiAgICAvLyBmaW5hbCBhcHBlbmQgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuICAgIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtLWVudHJ5XCIpO1xuXG4gICAgZnVuY3Rpb24gYWRkU3VibWl0TGlzdGVuZXIoKSB7XG4gICAgICBpbnB1dEJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjaGVjayBmb3IgcmVxdWlyZWQgaW5wdXRzXG4gICAgICAgIC8vIHJlcXVpcmUgdGFzayB0aXRsZVxuICAgICAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgbGFiZWxSZXF1aXJlZEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgIGxhYmVsUmVxdWlyZWRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbGFiZWxcIik7XG4gICAgICAgICAgbGFiZWxSZXF1aXJlZEZpZWxkLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiUGxlYXNlIGVudGVyIHRoaXMgZmllbGQgYmVmb3JlIHN1Ym1pdHRpbmdcIjtcbiAgICAgICAgICBpZiAoZGl2VGl0bGUubGFzdENoaWxkLmNsYXNzTGlzdFswXSAhPSBcImVycm9yLWxhYmVsXCIpIHtcbiAgICAgICAgICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGxhYmVsUmVxdWlyZWRGaWVsZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9yZSBpbnB1dCB2YWx1ZXNcblxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSxcbiAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGlucHV0RHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICBzZWxlY3RQcmlvcml0eS52YWx1ZVxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZChfc2hvd1Rhc2sodGFzaykpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGFkZFRhc2tGb3JtKTtcbiAgICAgICAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm0tZW50cnlcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgcHJvamVjdFZpZXcucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBzaG93VGFza3MsIHNob3dDcmVhdGVUYXNrRm9ybSwgY2xlYXJUYXNrcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgbGlzdGVuZXJzID0gKCgpID0+IHtcbiAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLmFkZFRhc2tcIik7XG5cbiAgZnVuY3Rpb24gX2luaXRBZGRUYXNrKCkge1xuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvbS5zaG93Q3JlYXRlVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRBZGRUYXNrKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcnM7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmV3TmFtZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgaWYgKHRhc2sgaW5zdGFuY2VvZiBUYXNrKSB7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIlByb2plY3QuYWRkVGFzayBtdXN0IGJlIHBhc3NlZCBhIFRhc2sgb2JqZWN0XCIpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICB9XG5cbiAgY2xlYXJUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBzdGF0aWMgcHJpb3JpdGllcyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIG5ld1RpdGxlID0gbmV3VGl0bGUudHJpbSgpO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGFzayB0aXRsZSBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgbmV3RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbi50cmltKCk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIC8vIFRPRE86IEZPUk1BVCBEQVRFXG4gICAgdGhpcy5fZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgLy8gVE9ETzogUG90ZW50aWFsIG5lZWQgZm9yIHZhbGlkYXRpb24gb24gcHJpb3JpdHk/XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL21vZHVsZXMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3RcIik7XG50ZXN0UHJvamVjdC5hZGRUYXNrKFxuICBuZXcgVGFzayhcIlRlc3QgVGFza1wiLCBcIlRlc3QgRGVzY3JpcHRpb25cIiwgXCJUZXN0IER1ZURhdGVcIiwgXCJIaWdoXCIpXG4pO1xuXG5kb20uc2hvd1Rhc2tzKHRlc3RQcm9qZWN0KTtcblxubGlzdGVuZXJzLmluaXQoKTtcblxuY29uc3QgYnRuVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5UZXN0LmlubmVyVGV4dCA9IFwiVEVTVFwiO1xuY29uc3QgdG9wbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbmF2XCIpO1xuY29uc29sZS5sb2codG9wbmF2KTtcbnRvcG5hdi5hcHBlbmRDaGlsZChidG5UZXN0KTtcblxuYnRuVGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb20uY2xlYXJUYXNrcygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=