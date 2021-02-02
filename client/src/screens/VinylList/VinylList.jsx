import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function VinylList(props) {
  const { vinyls } = props;
  // const { currentUser } = props;
  // const history = useHistory();
  console.log(vinyls);
  return (
    <div className="vinyl-container">
      {vinyls.map((vinyl) => {
        return (
          <>
            <Link to={`/vinyls/${vinyls.id}:id`}>
            <img
        className="vinyl-image"
        src={vinyl.img_url}
        alt={vinyl.name}
        />
           <h3>{vinyl.artist}</h3>
            <h1>{vinyl.title}</h1>
            <h3>${vinyl.price}</h3>
            <h3>{vinyl.genre}</h3>
        </Link>
            <br />
            </>
        )
      })}
        </div>
  );
}
