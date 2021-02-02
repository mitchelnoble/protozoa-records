import React from 'react';
import { Link } from 'react-router-dom';



export default function VinylDetail(props) {
  const { vinyls, currentUser } = props;
  console.log(vinyls);

  return (
    <>
      <img
        className="vinyl-image"
        src={vinyls.img_url}
        alt={vinyls.title}
        />
      <div className="vinyls-title">{vinyls.title}</div>
      <div className="vinyls-artist">{`${vinyls.artist}`}</div>
      <div className="vinyls-price">{`${vinyls.price}`}</div>
      <div className="vinyls-description">{`${vinyls.description}`}</div>
      <div className="vinyls-genre">{`${vinyls.genre}`}</div>
      {currentUser ? <Link to="/vinyls/:id/edit">Edit/Delete</Link> : null}
      </>
  );
};

