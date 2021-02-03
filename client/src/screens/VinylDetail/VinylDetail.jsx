import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readOneVinyl, destroyVinyl } from "../../services/vinyls";
import '../../styles/screens-styles/VinylDetail.css'

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
    <div className="details-container">
      {vinyl && (
        <div className="detail-container">
          <img className="vinyl-image" src={vinyl.img_url} alt={vinyls.title} />
          <br />
          <div className="vinyls-title">{vinyl.title}</div>
          <div className="vinyls-artist">{`${vinyl.artist}`}</div>
          <br />
          <div className="vinyls-price">${`${vinyl.price}`}</div>
          <br />
          <div className="vinyls-description">{`${vinyl.description}`}</div>
          <br />
          <div className="vinyls-genre">{`${vinyl.genre}`}</div>
          <br />
          {currentUser ? <Link className="edit-link" to={`/vinyls/${id}/edit`}>Edit</Link> : null}
          <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
