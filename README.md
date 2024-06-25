## 📋 Work flow for building project managment app:

1. Create 'component' folder.

2. Create `ProjectSidebar` component
   * Inside create <aside> element

3. Create `NewProject` component for gathering all project data.
   * Creating 3 `<input>` elements for Title, Description, and Due Date.

4. Because they look the same, I will create `Input` component.
   * Inside adding `<label>, <textarea>, and {...props}`.
   * After that adding tailwind classes.

5. Add `<ProjectSidebar/>` and `<NewProject/>` to App.jsx.
* By hover over tailwind classes, I can see the styles that are applied to the elements.
For now it looks like this:
![1](https://github.com/shanibider/React-project-management/assets/72359805/33ace472-9907-42c0-8abd-84dc12fe2589)

6. Split components: Creating a new component: `NoProjectSelected` to display when no project is selected.
  * First, Create `<img>, <h2>, <p>, and <button>` elements.
  * Then, add the styling for each.
Looks like this:
![2](https://github.com/shanibider/React-project-management/assets/72359805/0c4217ac-1059-4bce-b0e4-f695a7a1750c)

7. Create a Button component to use in multiple places, to avoid repeating the same code.
  * The content should be flexible and passed as `children`. Button should collect all other `...props` that might be set, and then spread them on the button element. So later we can add for example the `onChange` prop.

8. Inside App: Add `NoProjectSelected` to App.jsx, but need to render `NewProject`, or `NoProjectSelected`, depending if the button got clicked or not. Therefore, add `state` to manage this situation.
  * New state is an object include: `property`; to indicate if project is new or not existence, and `array`; for all the projects.
  * Then render the corresponding component conditionally.
    
9. Add and pass `onStartAddProject` prop with `handleStartAddProject` function to the `NoProjectSelected`, and `ProjectsSidebar` component (that contain button for adding new project).
  * Inside each component (`NoProjectSelected`, and `ProjectsSidebar`), accept and destructure the prop `onStartAddProject` from App (that connect to `handleStartAddProject` function).
  * Then add `onStartAddProject` prop, to `onCilck` prop in Button.
    
10. Next step is to collect the user input and validate them.
    * We can do it with `onChange` prop inside <input>. But here i want to only read the values when i click save button. I don't want to manage all those extra states.
    * Instead i use **Ref**. To connect them to HTML elements and then interact with those elements. (retrieve the value from an input).
![5](https://github.com/shanibider/React-project-management/assets/72359805/2866ab87-8f24-460c-a60a-a6955a872179)

11. Validate user input & showing error `Modal` via `useImperativeHandle`;
  * Valaidate input fields, and Show the error modal in <NewProject>.
  * Create `Modal` component, and return built in `<dialog>`.
  * Wrap it in `forwardRef`, extract the `children` and `buttonCaption` properties.
  * `children` (from props object), makes this component flexible. `children` is pass to every component, so I can use Modal as a wrapper to any content I want. And that content will be wrapped by the dialog element.
  * Add a ref const.
  * Add `useImperativeHandle`, defining `open` function. To expose a function that can be called from outside the component.
  * Inside, pass it a ref object and a function that returns an object.
  * Inside open, I want to call `showModal` method on the dialog element. I do it with useRef named `dialog`.

12. Styling `Modal` via tailwind.
![6](https://github.com/shanibider/React-project-management/assets/72359805/37215eb0-7f60-4760-8cff-e7a052798c93)










<br>

---
<br>

![Project Management3](https://github.com/shanibider/React-project-management/assets/72359805/213d0f3d-fc5b-4ab9-8d55-041ac6c5c841)

![Project Management2](https://github.com/shanibider/React-project-management/assets/72359805/0244802e-6ce3-4e5c-81f0-6dbad51c4cf3)

![Project Management4](https://github.com/shanibider/React-project-management/assets/72359805/24d0724d-31d6-4960-84e9-b8339c015350)

![Project Management5](https://github.com/shanibider/React-project-management/assets/72359805/099d1eef-faef-4b95-9f9e-ab3d9fc04f60)
