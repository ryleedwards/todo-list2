import { format } from "date-fns";

export class Task {
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
    // validate and break if empty
    if (newDueDate === "") return;
    const arr = newDueDate.split("-");
    const year = arr[0];
    const month = arr[1] - 1;
    const day = arr[2];
    const date = new Date(year, month, day);
    newDueDate = format(date, "MM/dd/yyyy");
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
