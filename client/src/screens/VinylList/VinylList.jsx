import React from "react";

export default function VinylList(props) {
  const { vinyls } = props;
  return (
    <div>
      <h3>Vinyls</h3>
      {vinyls.map((vinyl) => (
        <p>{vinyl.name}</p>
      ))}
    </div>
  );
}
