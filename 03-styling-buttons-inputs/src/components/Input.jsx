export default function Input({ label, textarea, ...props }) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    // In <p>: flex class to enable flexbox, gap class to add a gap between elements, and margin to top and bottom.
    // In <label>: set the font size to small, set the font weight to bold, set the text to uppercase, and set the text color.
    // In textarea: if textarea is true, render a textarea element, else render an input element.
    // for styling: from classes varaible: set the width to full, padding to 1, border bottom to 2, border radius to small, border color, background color, text color, outline to none, border color on focus, and text color on focus.
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
