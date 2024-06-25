// Creating a Button component to use in multiple places, 
// to avoid repeating the same code.
// The content should be flexible and passed as children.
// Button should collect all other props that might be set, and then spread them on the button element.
// So later we can add for example the onChange prop.
export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
