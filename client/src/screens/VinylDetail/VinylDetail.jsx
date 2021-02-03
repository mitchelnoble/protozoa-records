import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readOneVinyl, destroyVinyl } from "../../services/vinyls";

export default function VinylDetail(props) {
  const { vinyls, currentUser, handleDelete } = props;

  const { id } = useParams();
  const [vinyl, setVinyl] = useState();

  useEffect(() => {
    const fetchVinyls = async () => {
      const vinylData = await readOneVinyl(id);
      setVinyl(vinylData);
    };
    fetchVinyls();
  }, []);

  console.log(vinyl);
  return (
    <>
      {vinyl && (
        <>
          <img className="vinyl-image" src={vinyl.img_url} alt={vinyls.title} />
          <div className="vinyls-title">{vinyl.title}</div>
          <div className="vinyls-artist">{`${vinyl.artist}`}</div>
          <br />
          <div className="vinyls-price">${`${vinyl.price}`}</div>
          <br />
          <div className="vinyls-description">{`${vinyl.description}`}</div>
          <br />
          <div className="vinyls-genre">{`${vinyl.genre}`}</div>
          <br />
          {currentUser ? <Link to={`/vinyls/${id}/edit`}>Edit</Link> : null}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
    </>
  );
}
