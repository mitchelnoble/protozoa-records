import React from "react";
import { Link } from "react-router-dom";
import '../../styles/screens-styles/VinylList.css'


export default function VinylList(props) {
  const { vinyls } = props;

  return (
    <div className="vinyls-container">
      {vinyls.map((vinyl) => {
        return (
            <Link className="vinyl-link" to={`/vinyls/${vinyl.id}`}>
          <div className="vinyl-container">
            <img
        className="vinyl-image"
        src={vinyl.img_url}
        alt={vinyl.name}
        />
            <h1>{vinyl.title}</h1>
           <h3>{vinyl.artist}</h3>
            <h3>${vinyl.price}</h3>
            <h3>{vinyl.genre}</h3>
            <br />
            </div>
        </Link>
        )
      })}
        </div>
  );
}
