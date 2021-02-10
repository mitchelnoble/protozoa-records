import React, { useState } from "react";
import "../../styles/screens-styles/VinylCreate.css";

export default function VinylCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-container">
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3>Sell Your Vinyl</h3>
        <label className="create-label">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            rows="10"
            cols="30"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image Link:
          <input
            type="url"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
