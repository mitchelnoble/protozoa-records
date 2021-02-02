import React from 'react';



export default function VinylDetail(props) {
  // const { vinyls } = props;
  console.log(props);

  return (
    <>
      <img
        className="vinyls-image"
        src={props.img_url}
        alt={props.title}
      />
      <div className="vinyls-title">{props.title}</div>
      <div className="vinyls-artist">{`${props.artist}`}</div>
      <div className="vinyls-price">{`${props.price}`}</div>
      <div className="vinyls-description">{`${props.description}`}</div>
      <div className="vinyls-genre">{`${props.genre}`}</div>
      </>
  );
};

