import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "./detail.css";

const Details = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { state } = useLocation();
  useEffect(() => {
    // Faites une nouvelle requête à votre API pour obtenir les détails de l'élément spécifique
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [id]);

  return (
    <div>
      {item ? (
        <div className="BlockDetail">
          <div className="BlockDetailIn">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.price}€</p>
            <p>
              Description:<br></br>
              {item.description}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
