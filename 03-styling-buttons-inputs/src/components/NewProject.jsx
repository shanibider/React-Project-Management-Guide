// Component to gather all data for a new project
import Input from './Input.jsx';

export default function NewProject() {
  return (
    // Adding width and margin top classes
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
        {/* Adding padding and rounded classes to the button, and background and text color classes. */}
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      {/* textarea equal to textarea=true */}
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
