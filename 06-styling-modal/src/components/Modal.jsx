import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button.jsx';

// Extract the children and buttonCaption properties.
// In order to make this component flexible I've extracted children, from the props object.
// children is pass to every component, so I can use Modal as a wrapper to any content I want. 
// And that content will be wrapped by the dialog element.
// In addition, I want to use the portal feature to render this dialog. (In index.html, I've created a div with the id modal-root)
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {

  const dialog = useRef();

  // To expose a function that can be called from outside the component, I use the useImperativeHandle hook.
  // Passing it a ref object and a function that returns an object.
  // Inside open, I want to call the showModal method on the dialog element. I do it with useRef.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    // Add styles to dialog.
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
