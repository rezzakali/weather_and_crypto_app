import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import CryptoCard from "./CryptoCard";

function Crypto() {
  const [listOfCoins, setListOfCoin] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20")
      .then((response) => {
        setListOfCoin(response.data.coins);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const filterCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="container text-center">
      <h1>Crypto API</h1>
      <div className="mb-3">
        <label htmlFor="coin" className="form-label">
          Search Coins
        </label>
        <input
          type="text"
          className="form-control"
          name="coin"
          id="coin"
          aria-describedby="helpId"
          placeholder="Search"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>

      {filterCoins.map((coin) => {
        return (
          <CryptoCard
            key={coin.id}
            name={coin.name}
            price={coin.price}
            icon={coin.icon}
            symbol={coin.symbol}
          />
        );
      })}
    </div>
  );
}

export default Crypto;
