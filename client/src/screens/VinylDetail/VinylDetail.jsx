import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneVinyl } from '../services/vinyls';

export default function VinylDetail(props) {
  const [vinylItem, setVinylItem] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchVinylItem = async () => {
      const vinylData = await getOneVinyl(id);
      setVinylItem(vinylData);
    }
    fetchVinylItem();
  }, [id])

  return (
    <div>
      <h3>{vinylItem?.name}</h3>
      {foodItem?.flavors.map(flavor => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
    </div>
  )
}
