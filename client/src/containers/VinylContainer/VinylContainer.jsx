import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import VinylCreate from "../../screens/VinylCreate/VinylCreate";
import VinylEdit from "../../screens/VinylEdit/VinylEdit";
import VinylDetail from "../../screens/VinylDetail/VinylDetail";
import VinylList from "../../screens/VinylList/VinylList";
import {
  destroyVinyl,
  getAllVinyls,
  postVinyl,
  updateVinyl,
} from "../../services/vinyls";

export default function VinylContainer(props) {
  const [vinyls, setVinyls] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchVinyls = async () => {
      const vinylData = await getAllVinyls();
      setVinyls(vinylData);
    };
    fetchVinyls();
  }, []);

  const handleCreate = async (vinylData) => {
    const newVinyl = await postVinyl(vinylData);
    setVinyls((prevState) => [...prevState, newVinyl]);
    history.push("/vinyls");
  };

  const handleDelete = async (id) => {
    await destroyVinyl(id);
    setVinyls((prevState) =>
      prevState.filter((vinylItem) => {
        return vinylItem.id !== id;
      })
    );
  };

  const handleUpdate = async (id, vinylData) => {
    const updatedVinyl = await updateVinyl(id, vinylData);
    setVinyls((prevState) =>
      prevState.map((vinylItem) => {
        return vinylItem.id === Number(id) ? updatedVinyl : vinylItem;
      })
    );
    history.push("/vinyls");
  };

  return (
    <Switch>
      <Route exact path="/vinyls">
        <VinylList
          vinyls={vinyls}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route exact path="/vinyls/:id">
        <VinylDetail vinyls={vinyls} currentUser={currentUser} />
      </Route>
      <Route exact path="/vinyls/:id/edit">
        <VinylEdit vinyls={vinyls} handleUpdate={handleUpdate} />
      </Route>
      <Route exact path="/vinyls/sell">
        <VinylCreate vinyls={vinyls} handleCreate={handleCreate} />
      </Route>
    </Switch>
  );
}
