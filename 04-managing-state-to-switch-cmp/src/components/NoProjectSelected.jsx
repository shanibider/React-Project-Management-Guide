// Creating a new component to display when no project is selected

import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

// Accept and destructure the prop onStartAddProject from App
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
      {/* Here i previously add button with the same classes as in `ProjectsSidebar` component,
      Therefore I make it a seperate component.
      Then add `onStartAddProject` prop */}
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
