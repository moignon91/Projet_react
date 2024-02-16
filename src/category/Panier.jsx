import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RajoutPanier, RemovePanier, ResetPanier } from "../redux/Store";
import styled from "styled-components";
const BlockAllPanier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlockPanier = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockPanierIn = styled.div`
  width: 40%;
  padding: 20px;
`;

const BlockImg = styled.img`
  max-width: 150px;
  padding: 20px;
`;

const BlockModif = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const BlockButton = styled.button`
  background-color: #f9f9f9;
  padding: 5px;
  min-width: 20px;
  transition: background-color 300ms ease-out 100ms;
  transition: color 200ms ease-out 100ms;
  &:hover {
    color: white;
    background-color: #0c0c0c;
  }
`;
const Title = styled.h4`
  margin-bottom: 0px;
`;
const Panier = () => {
  const item = useSelector((state) => state.panier.value);
  const dispatch = useDispatch();

  return (
    <div>
      {item.length > 0 && (
        <BlockAllPanier>
          {item.map((item, index) => (
            <BlockPanierIn key={index}>
              <BlockPanier>
                <Title>{item.title}</Title>
                <BlockImg src={item.image}></BlockImg>
                <p>{(item.price * item.quantity).toFixed(2)}</p>
                <BlockModif>
                  <BlockButton onClick={() => dispatch(ResetPanier(item))}>
                    Drop
                  </BlockButton>
                  <BlockButton onClick={() => dispatch(RemovePanier(item))}>
                    -
                  </BlockButton>
                  <p>{item.quantity}</p>
                  <BlockButton onClick={() => dispatch(RajoutPanier(item))}>
                    +
                  </BlockButton>
                </BlockModif>
              </BlockPanier>
            </BlockPanierIn>
          ))}
        </BlockAllPanier>
      )}
    </div>
  );
};

export default Panier;
