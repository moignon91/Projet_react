import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
import Store from "../redux/Store";
import { useSelector } from "react-redux";

const Nav = () => {
  const item = useSelector((state) => state.panier.value);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcul du total en utilisant la méthode reduce
    const newTotal = item.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(newTotal);
  }, [item]);
  return (
    <div className="BlockNav">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/Men_clothes">Men clothes</Link>
        </li>
        <li>
          <Link to="/Women_clothes">women clothes</Link>
        </li>
        <li>
          <Link to="/jewelery">jewelery</Link>
        </li>
        <li>
          <Link to="/Electronic">Electronics</Link>
        </li>
        <button className="BlockNavButton">
          {total > 0 && <p>{total}</p>}
          <Link to="/Panier">
            <img className="BlockNavImg" src="caddie.png"></img>
          </Link>
        </button>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;
