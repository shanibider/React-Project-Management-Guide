import NewProject from './components/NewProject.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';

function App() {
  return (
    // Adding flex and gap classes to enable flexbo, and gap on main element.
    // When hover over gap-8 class, I can see that it adds a margin of 2rem.
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}
export default App;
