import { useEffect, useState } from "react";
import { listJewel } from "../services/jewelData";

const Home = () => {
  const [jewelList, setJewelList] = useState([]);

  useEffect(() => {
    listJewel().then((data) => setJewelList(data.products));
  }, []);
  return (
    <div>
      <h1>Welcome 🏡</h1>
      {jewelList.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  );
};

export default Home;
