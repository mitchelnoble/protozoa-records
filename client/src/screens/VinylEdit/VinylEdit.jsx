import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../styles/screens-styles/VinylEdit.css';

export default function VinylEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const { vinyls, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const vinylItem = vinyls.find((vinylItem) => {
        return vinylItem.id === Number(id);
      });
      setFormData({
        title: vinylItem.title,
        artist: vinylItem.artist,
        price: vinylItem.price,
        description: vinylItem.description,
        genre: vinylItem.genre,
        img_url: vinylItem.img_url,
      });
    };
    if (vinyls.length) {
      prefillFormData();
    }
  }, [vinyls, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="edit-container">
    <form className="edit-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
      >
      <h3 className="edit-title">Update Your Record</h3>
      <label>
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
        <br />
      <button className="submit-button">Submit</button>
    </form>
          </div>
  );
}
