import { useState } from 'react';

// 6. (After several steps) Destrcuturing the onAdd function from the props object.
export default function NewTask({ onAdd }) {
// 1. Add state to manage the added task that the user enters in the input field to be shown in the list of tasks.
  const [enteredTask, setEnteredTask] = useState();


  // 2. Add a function that connect to the input field to update the entered task.
  // This function get an event object as a parameter, that have target which is the input field, and value which is the value of the input field.
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }


  // 5. Now I want to make sure that when pressing the button the entered task is added to a place it can be stored.
  // It will be in App, as I already store there all the projects.
  // So adding this function, as long as `onClick={handleClick}`.
  // Inside, I want to forward the entered value to the app component, 
  // Then I want to reset it back to an empty string.
  function handleClick() {
    // 7. Forward the entered task to the onAdd function.
    // (That will go to `Task`, which in the end is in `SelectedProject`, which than is in `App`)
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
    {/* 3. Add onChange prop to connect it to the handleChange function.
        4. To complete the two way binding, using `value={enteredTask}`, by feeding the entered task text into this input field. */}
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
