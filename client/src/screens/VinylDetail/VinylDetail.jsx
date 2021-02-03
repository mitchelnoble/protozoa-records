import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readOneVinyl } from "../../services/vinyls";

export default function VinylDetail(props) {
  const { vinyls, currentUser } = props;
  
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
      {vinyl && 
      <>
      <img className="vinyl-image" src={vinyl.img_url} alt={vinyls.title} />
      <div className="vinyls-title">{vinyl.title}</div>
      <div className="vinyls-artist">{`${vinyl.artist}`}</div>
      <div className="vinyls-price">{`${vinyl.price}`}</div>
      <div className="vinyls-description">{`${vinyl.description}`}</div>
      <div className="vinyls-genre">{`${vinyl.genre}`}</div>
        {currentUser ? <Link to={`/vinyls/${id}/edit`}>Edit/Delete</Link> : null}
        </>
      }
    </>
  );
}
