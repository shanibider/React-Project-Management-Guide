import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

function App() {
  // Adding state to manage which project to display.
  // Manage an object as a state, with selectedProjectId property, and projects array.
  // undefined symbolizes NoProjectSelected, and null NoProjectSelected a new project.
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    // Update state such as don't losing the old state. (that includes all projects in the array)
    // Recieve the previous state and return a new object with the selectedProjectId set to null (signal for us that it's a new project).
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  // Add if statement to check if the selectedProjectId is null, then render the NewProject component.
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />

  } else if (projectsState.selectedProjectId === undefined) {
    // Pass the prop with the function to the NoProjectSelected component.
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    {/* Pass the prop with the function to the NoProjectSelected component. */}
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
