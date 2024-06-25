import ProjectsSidebar from './components/ProjectsSidebar.jsx';

/*
Advanced Concepts -
Working with Components, State, Styling and Portals;
* Build, style and   reuse components
* Manage state 
* Access DOM elements with refs
* Manage JSX rendering positions with portals
*/

function App() {
  return (
    // adding tailwind classes to the main element - take all the height of the screen and add margin top and bottom
    <main className="h-screen my-8">
      <ProjectsSidebar />
    </main>
  );
}

export default App;
