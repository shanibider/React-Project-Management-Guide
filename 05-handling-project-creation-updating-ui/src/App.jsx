import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });


  // Start the adding process
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }


  // Finish the adding process
  function handleAddProject(projectData) {
    /* Calling setProjectsState using that function form:
     setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    };
  });
    To update the state based on the previous state.
    and return a new object, start by spread all existing state (...prevState),
    and update project array without losing any old projects. So we spread the old projects array and add a new project object. (projects: [...prevState.projects, newProject]).
    add newProject object that contain a title, decription, and dueDate.
    But i will accept to get `projectData` object that contain it all, from the place that this function is invoked.
    So i can spred projectData to get all its properties, and then add a new id property with a random value. */
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

 

  let content;

  if (projectsState.selectedProjectId === null) {
    // `handleAddProject` shoulג be invoked from inside <NewProject> component, that have `handleSave` method,
    // Where we collect all input values.  And that works via props (add `onAdd` to `NewProject` component). 
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {/* Render `NewProject` or `NoProjectSelected` component that store in content. */}
      {content}
    </main>
  );
}

export default App;
