import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VinylEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Update Your Record</h3>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Artist:
        <input type="text" name="artist" value={formData.artist} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
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
      <label>
        Genre:
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
      </label>
      <label>
        Image Link:
        <input type="url" name="img_url" value={formData.img_url} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
