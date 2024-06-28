import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
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


  // Create this function to handle the deletion of a project
  function handleDeleteProject() {
    // Update the state to remove the selected project
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // set back to undefined to show the "NoProjectSelected" component
        // Until here, the same code as before, but now we need to filter out the selected project
        
        // Filter out the selected project from the projects array
        
        // It need to be update in immutable way, so we don't edit the original array in memory.
        // Elegant way to do this is using the filter method, that returns a new array with the elements that pass the condition.
        // (Return T if the element should be kept, or F if should be dropped).
        // Here I want to drop the item and want to return F, if the id of the project I'm looking at isn't equal to the id that was previously selected. (because it's the selected project that I want to delete).
        // So I can use prevState and then selectedProjectId.
        // If the id don't match I know hat I'm not looking at the project that I want to delete, therfore I return T to keep it.
        // If the id do match, I'm looking at the item that should be deleted, and thanks to `!==` I return F to drop it.
        // I don't need the id as an argument, because I can access it from prevState.
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }



  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Pass a pointer to `handleDeleteProject` function with `onDelete` prop.
  // So I can call this function through the `onDelete` prop from inside `SelectedProject` component.
  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
