/* eslint-disable react/prop-types */

export const MyButton = ({revealNextName, names, revealedNames}) => {
  return (
    <div>
      <button
        onClick={revealNextName}
        disabled={revealedNames.length === names.length}
      >
        {revealedNames.length === names.length
          ? "All names revealed"
          : "Reveal Next Name"}
      </button>
    </div>
  );
};
