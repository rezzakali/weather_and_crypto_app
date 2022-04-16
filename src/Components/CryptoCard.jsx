import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

function CryptoCard({ name, icon, price, symbol }) {
  return (
    <div>
      <CardContent
        style={{
          width: "55%",
          margin: "2% auto",
          border: "1px solid #E78EA9",
        }}
      >
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {name}
        </Typography>{" "}
        <img src={icon} alt="icon" />
        <br />
        <br />
        <Typography variant="body2">{symbol}</Typography>
        <br />
        <br />
        <Typography sx={{ mb: 1.5 }}>Price : {price}</Typography>
      </CardContent>
    </div>
  );
}

export default CryptoCard;
