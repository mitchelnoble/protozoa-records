import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readOneVinyl } from "../../services/vinyls";
import "../../styles/screens-styles/VinylDetail.css";

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
  });

  console.log(vinyl);
  return (
    <div className="details-container">
      {vinyl && (
        <div className="detail-container">
          <img
            className="vinyls-image"
            src={vinyl.img_url}
            alt={vinyls.title}
          />
          <br />
          <h1 className="vinyls-title">{vinyl.title}</h1>
          <h4 className="vinyls-artist">{`${vinyl.artist}`}</h4>
          <h4 className="vinyls-price">${`${vinyl.price}`}</h4>
          <br />
          <div className="vinyls-description">{`${vinyl.description}`}</div>
          <br />
          <div className="vinyls-genre">Genre: {`${vinyl.genre}`}</div>
          <br />
          {currentUser ? (
            <div className="edit-and-delete-buttons">
              <Link className="edit-link" to={`/vinyls/${id}/edit`}>
                Edit
              </Link>
              <button
                className="delete-button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          ) : null}
          <br />
        </div>
      )}
    </div>
  );
}
