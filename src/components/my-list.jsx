/* eslint-disable react/prop-types */

export const MyList = ({revealedNames}) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Award Winners</h1>
      <ul>
        {revealedNames.map((name, index) => (
          <li key={index} className="text-xl">{name}</li>

        ))}
      </ul>
    </div>
  );
};
