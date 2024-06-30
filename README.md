# React Project Management Web App 🖊
This project focus on: 
- [x] Build, Style, Configure & Re-use **`Components`**.
- [x] Manage **`State`**.
- [x] Access DOM Elements & Browser APIs with **`Refs`**.
- [x] Manage JSX Rendering Positions with **`Portals`**.
---

# 📋 Work flow for building project managment app:
- Read the instructions next to the code.
  
1. Create **component** folder.

2. Add `ProjectSidebar` component
   * Inside create `<aside>` element.
   * Styling the Sidebar & Button with Tailwind CSS.

3. Add `NewProject` component for gathering all project data.
   * Creating 3 `<input>` elements for **Title, Description, and Due Date.**

4. Because they look the same, Add reusable `Input` component.
   * Inside adding `<label>, <textarea>, and {...props}`.
   * After that adding tailwind classes.

5. Add `<ProjectSidebar/>` and `<NewProject/>` to App.jsx.
* By hover over tailwind classes, I can see the styles that are applied to the elements.

For now the app looks like this:
![1](https://github.com/shanibider/React-project-management/assets/72359805/33ace472-9907-42c0-8abd-84dc12fe2589)

6. Split components: Creating a new component: `NoProjectSelected` to display when no project is selected.
  * First, Create `<img>, <h2>, <p>, and <button>` elements.
  * Then, add the styling for each.
Looks like this:
![2](https://github.com/shanibider/React-project-management/assets/72359805/0c4217ac-1059-4bce-b0e4-f695a7a1750c)

7. Create a `Button.jsx` component to use in multiple places, to avoid repeating the same code.
  * The content should be flexible and passed as `children`. Button should collect all other `...props` that might be set, and then spread them on the button element. So later we can add for example the `onChange` prop.

8. Inside App: Add `NoProjectSelected`, but render `NewProject`, or `NoProjectSelected`, depending if the button got clicked or not. Therefore, add `state` to manage this situation.
  * New state is an object include: `property`; to indicate if project is new or not existence, and `array`; for all the projects.
  * Then render the corresponding component conditionally.
    
9. Add and pass `handleStartAddProject` function to `onStartAddProject` prop with `<NoProjectSelected>`, and `<ProjectsSidebar>` component (that contain button for adding new project).
  * Inside each component (`NoProjectSelected`, and `ProjectsSidebar`), accept and destructure the prop `onStartAddProject` from App (that connect to `handleStartAddProject` function).
  * Then add `onStartAddProject` prop, to `onCilck` prop in Button.
    
10. Next step is to collect the user input and validate them.
    * We can do it with `onChange` prop inside <input>. But here i want to only read the values when i click save button. I don't want to manage all those extra states.
    * Instead i use **Ref**. To connect them to HTML elements and then interact with those elements. (retrieve the value from an input).
![5](https://github.com/shanibider/React-project-management/assets/72359805/2866ab87-8f24-460c-a60a-a6955a872179)

11. Validate user input & showing error `Modal` via `useImperativeHandle`;
  * Valaidate input fields, and Show the error modal in `<NewProject>`.
  * Create `Modal` component, and return built in `<dialog>`.
  * Wrap it in `forwardRef`, extract the `children` and `buttonCaption` properties.
  * `children` (from props object), makes this component flexible. `children` is pass to every component, so I can use `Modal` as a wrapper to any content I want. And that content will be wrapped by the `dialog` element.
  * Add a `ref`.
  * Add `useImperativeHandle`, defining `open` function. To expose a function that can be called from outside the component.
  * Inside, pass it a ref object and a function that returns an object.
  * Inside open, I want to call `showModal` method on the dialog element. I do it with useRef named `dialog`.

12. Styling `Modal` via tailwind - add styles to dialog, and form, and use the Button component.
  * Text style is changed in `NewProject.jsx`.

13. Add Cancel option to **New Project** screen;
    * When clicking *cancel* button, the user will go back to home screen.
    * Inside App: Add `handleCancelAddProject` function for cancel the creation of new project. (Same code as `handleStartAddProject` function, but selectedProjectId is set to undefined instaed of null).
   * Render `<NewProject>` with `onCancel={handleCancelAddProject}`.
   * Inside `NewProject.jsx` -  accept `onCancel` prop.
   * Make sure `onCancel` connected to cancel button. 

![6](https://github.com/shanibider/React-project-management/assets/72359805/37215eb0-7f60-4760-8cff-e7a052798c93)


14. Making projects selectebale & viewing project details:
     * Create `SelectedProject` component, return `<header>`, `<h1>`, and `<button>` to delete this project, in one `<div>`.
     * Expect to get `project` prop, and in the rendered code output {project.title}, formated `{project.dueDate}`, and `{project.description}`.
     * Add style via tailwind.
     * I must sure that project can be selected in the sidebar, for that i must make sure that the button change some `state` in `App,jsx`.
     * I add another function in App: `handleSelectProject`, with project `id` as a value, and update the state of `selectedProjectId` with the `id`.
     * This `handleSelectProject` pass to <ProjectsSidebar> in the rendered code, with a new `onSelectProject` prop.
     * Now, inside `ProjectsSidebar` i should extract `selectedProjectId` from the incoming props, and connect it to the button in this component, with `onClick` prop with `onSelectProject` as a value.
     * In addition, I also want to highlight the button of the project that was selected so I will extract also `selectedProjectId`, so I will use this prop that contain the `id` of the project that was selected.
     * I will add return statement inside map, that I can conveniently add more code in the function that pass to map, depending if the element should be highlighted or not.
     * Create a variable to store css classes, check if the `project.id` I currently outputting is equal to the `selectedProjectId` I get as a prop. Now i use `{cssClasses}` as a value for `{className}` prop.
     * Last step, is to add the newly added `selectedProject componenet` and output it in the `App` component, if a project was selected;
     * I declare `content` variable to be equal to `<SelectedProject project={selectedProject} />`, now I need to derive the selected project from the `state`;
     * I find it with ```const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);```.
     * Now, if i click on a project in `side bar`, the app failed. The reason is inside `App`.
     * Project Details: For now i just passing `onSelectProject` function to `onSelectProject` prop, but in `ProjectsSidebar.jsx` I use `onSelectProject` prop that contain the function mention above, and I just pass this ahead to the button. And the button don't give the `id` of the selected project. Therefore, more control of how it will be executed is needed;
     * By wrapping this with a function, and manually calling it inside of this function so I can pass the `id` of the project that currently being rendered as a value to `onSelectProject`, and therfore as a value to `handleSelectProject` function.
```jsx
// So this:
onClick={onSelectProject}

// Become this:
onClick={() => onSelectProject(project.id)}
```
![Project Management4](https://github.com/shanibider/React-project-management/assets/72359805/24d0724d-31d6-4960-84e9-b8339c015350)
<br>


15. Handling Project Deletion:
    * As before, I need to add a functn to `App.jsx`, a function which update the `state`, and remove the project from the array, and I need to pass that function to `SelectedProject` component.
    * Add `handleDeleteProject` function, that update the state as the other function. Then filter out the selected project from the projects array.
    * Pass a pointer to `handleDeleteProject` function with `onDelete` prop. So I can call this function through the `onDelete` prop from inside `SelectedProject` component.
    * Inside `SelectedProject` I extract this newly added `onDelete` prop, and than connect it to the `delete button`, like this: ```onClick={onDelete}```.


16. Adding "Project Tasks" & A Tasks Component:
    * Add new `Task` component with `h2`, **NEW TASK** placeholder (which will be replaced by input and button), `p`, `ul`, and styling.
    * Then  i use `<Tasks />` inside `SelctedProject` component.
    * Now i replace **NEW TASK** placeholder with actual input, and a button.
    * Add `NewTask` component. Including `input`, `button`, and styling including flex-box since I want the 2 elements next to each other.
   
      
17. Managing Tasks & Understanding Prop Drilling;
    * Now I want to make sure that the added task will be shown. I can do it with a `ref`, but i will use `state` (`[enteredTask, setEnteredTask]`), inside `NewTask`.
    * Add `handleChange` function that connect to the input field to update the entered task. This function get an `event` object as a parameter, that have `target` which is the input field, and value which is the `value` of the input field. (`event.target.value`).
    * Then I add `onChange` prop to connect it to the `handleChange` function. (`<input onChange={handleChange}` />).
    * To complete the two way binding, using `value={enteredTask}`, by feeding the entered task text into the input field. (`<input value={enteredTask}` />).
    * Now I want to make sure that when pressing the `Add Task` button the entered task is added to a place it can be stored.
    * It will be in `App`, as I already store there all the projects.
    * So inside `App` I add `tasks: [],` to the `projectsState` object.
    * Therefore I will add 2 new function for handling tasks: `handleAddTask()`, and `handleDeleteTask()`.
    * Inside `NewTask` I add `handleClick()` function, as long as `onClick={handleClick}`.
    * Inside `handleClick()`, I want to forward the entered value to the app component (`onAdd(enteredTask);`), and then I want to reset it back to an empty string (`setEnteredTask('');`).
    * Now i need to get the entered task to the app component.
    * I need to pass `handleAddTask()` to `NewTask` component. And `NewTask` is in `Task` component, and `Task` component is inside `SelectedProject` component. It's invovled prop drilling.
      * So let's start: In `App`, add `handleAddTask` as  a value to `SelectedProject`, in `onAddTask` prop. The same for `handleDeleteTask`.
      * I will use this function in `Task`, that called from `SelectedProject`, that's why I write it there.
      * On `SelectedProject` extract `onAddTask`, and `onDeleteTask`, in order to forward them inside to `Task`.
      * In `Task` also destructing `onAddTask`, and `onDeleteTask` props that just being added.
      * Then `onAddTask` will be forward to `<NewTask />`, and `onDeleteTask` will be use inside the current component.
      * Inside `NewTask` destrcuturing the `onAdd` function from the props object.
      * Inside `handleClick` in `NewTask`, forward the entered task to the onAdd function. (That will go to `Task`, which in the end is in `SelectedProject`, which than is in `App`)ץ
      * Few more steps with `tasks`...
   
   
![Project Management5](https://github.com/shanibider/React-project-management/assets/72359805/099d1eef-faef-4b95-9f9e-ab3d9fc04f60)   
 


18. Clearing Tasks & Fixing Minor Bugs:
    * Now i want to make sure that `clear` button on each task will perform his purpose. Add `handleDeleteTask` in `App`.
    * Add `handleDeleteTask` function to `onDeleteTask` prop, as value to `<SelectedProject />`.
    * Inside `Tasks` destruct `onDelete` prop, in order to connect it to `delete` button.
    * On `button` add `onClick={onDelete}`, but wrap it in a function for full control of execution like this: `onClick={() => onDelete(task.id)}`.



<br>

---
<br>

![Project Management3](https://github.com/shanibider/React-project-management/assets/72359805/213d0f3d-fc5b-4ab9-8d55-041ac6c5c841)

![Project Management2](https://github.com/shanibider/React-project-management/assets/72359805/0244802e-6ce3-4e5c-81f0-6dbad51c4cf3)


