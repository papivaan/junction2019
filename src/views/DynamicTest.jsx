import React from "react";

const DynamicTest = ({ match, location }) => {
  const { id } = match.params;
  return (
    <div>
      <h1>Test id: {id}</h1>
      <pre>
        <code>{JSON.stringify(match, null, 2)}</code>
      </pre>
      <pre>
        <code>{JSON.stringify(location, null, 2)}</code>
      </pre>
    </div>
  );
};

export default DynamicTest;
