import { Task } from "./task";
import { Project } from "./project";

const dom = (() => {
  let currentProject = "";
  const menu = document.getElementById("menu");
  const home = document.getElementById("home");
  const btnAddTask = document.querySelector(".btn.addTask");
  const projectTitle = document.querySelector(".project-title");
  const projectView = document.getElementById("project-view");
  const content = document.getElementById("content");

  function showTasks(project) {
    if (!(project instanceof Project)) {
      throw new Error("dom.showTasks must be passed a Project object");
    }
    currentProject = project;
    project.getTasks().forEach((task) => {
      projectView.appendChild(_showTask(task));
    });
  }

  function _showTask(task) {
    if (!(task instanceof Task)) {
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
    Task.priorities.forEach((priority) => {
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

        const task = new Task(
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
        console.log(inputTitle.value);
      });
    }
  }

  function clearTasks() {
    let tasks = document.querySelectorAll(".task-container");
    tasks.forEach((task) => {
      projectView.removeChild(task);
    });
  }

  return { showTasks, showCreateTaskForm, showCreateProjectForm, clearTasks };
})();

export default dom;
