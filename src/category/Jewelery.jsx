import { useEffect, useState } from "react";
import axios from "axios";
import "../api/Api.css";
import { Link, useNavigate } from "react-router-dom";
import { ajouterAuPanier } from "../redux/Store";
import { useDispatch } from "react-redux";
const Jewelery = () => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Ajout de l'état pour stocker l'élément sélectionné
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }, []);
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    navigate("/Details/" + item.id, { state: item });
  };
  return (
    <div>
      {error ? (
        <p>error</p>
      ) : items.length > 0 ? (
        <div className="BlockMovie">
          {items.map((item, index) => (
            <div className="BlockMoviePad" key={index}>
              <div className="BlockMovieIn">
                <div className="BlockMovieInImg">
                  <button
                    className="BlockMovieInButton"
                    onClick={() => handleSelectItem(item)}
                  >
                    <img src={item.image}></img>
                  </button>
                </div>
                <p className="BlockMovieInTitle">{item.title}</p>
                <p>{item.price}€</p>
                <div className="BlockMovieButtonAjout">
                  <button onClick={() => dispatch(ajouterAuPanier(item))}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Jewelery;
