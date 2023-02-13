import { useContext, useEffect, useState } from "react";
import { jewelDetail } from "../services/jewelData";
import useAuth from "../context/auth/useAuth";
import useParams from "react-router-dom";

const JewelDetails = () => {
  const { id } = useParams();

  const [jewel, setJewel] = useState(null);

  useEffect(() => {
    jewelDetail(id).then((data) => setJewel(data));
  });

  return <div>{console.log(jewel)}</div>;
};

export default JewelDetails;
