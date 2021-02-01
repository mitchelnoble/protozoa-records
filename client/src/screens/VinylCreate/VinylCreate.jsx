import React, { useState } from 'react'

export default function VinylCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <h3>Sell Your Record!</h3>
      <label>Title:
        <input
          type='text'
          name='Title'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>Artist:
        <input
          type='text'
          name='Artist'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>Artist:
        <input
          type='text'
          name='Artist'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
