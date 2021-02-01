import React from 'react';



export default function VinylDetail(props) {
  const { vinyl } = props;

  return (
    <Link className="vinyl" to={`/detail/${vinyl._id}`}>
      <img
        className="vinyl-image"
        src={vinyl.img_url[0].image}
        alt={props.title}
      />
      <div className="vinyl-title">{vinyl.title}</div>
      <div className="vinyl-artist">{`${vinyl.artist}`}</div>
      <div className="vinyl-price">{`${vinyl.price}`}</div>
      <div className="vinyl-description">{`${vinyl.description}`}</div>
      <div className="vinyl-genre">{`${vinyl.genre}`}</div>
    </Link>
  );
};
