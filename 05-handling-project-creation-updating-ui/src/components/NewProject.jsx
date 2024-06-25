import { useRef } from 'react';
import Input from './Input.jsx';

// Add `onAdd` prop to accept a function that will be called when the user click save button.
export default function NewProject({ onAdd }) {

  // Using ref to access the input values, prevent using extra states.
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Create a function that will be called when the user click save button.
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation ...

    // call `onAdd()` function that passed from the parent component,
    // that recieve object as an argument.
    // This object will be recieved in `handleAddProject` function in App component.
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }



  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
        {/* Add onClick prop with function that save the input */}
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
      {/* After add forwardRwf, Refs are passed to the Input component. */}
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
