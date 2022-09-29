import { Task } from "./task";

const storage = (() => {
  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  function storeTask(task) {
    if (!storageAvailable("localStorage")) return;
    const taskString = JSON.stringify(task);
    window.localStorage.setItem("task", taskString);
    console.log(taskString);
    //
    const returnedTaskJSONObj = JSON.parse(window.localStorage.getItem("task"));
    const title = returnedTaskJSONObj._title;
    const description = returnedTaskJSONObj._description;
    const dueDate = returnedTaskJSONObj._dueDate;
    const priority = returnedTaskJSONObj._priority;
    const completion = returnedTaskJSONObj._completion;

    const returnedTask = new Task(
      title,
      description,
      dueDate,
      priority,
      completion
    );
    console.log(returnedTask);
  }

  function retrieveTask() {}

  return { storageAvailable, storeTask, retrieveTask };
})();

export default storage;
