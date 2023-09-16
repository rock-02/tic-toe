import React from "react";
import Icon from "./Icon";
import "../Styles/Card.css";
const Card = ({ index, onPlay, player, gameEnd }) => {
  let icon = <Icon />;
  if (player == "O") {
    icon = <Icon iconName={"circle"} />;
  } else if (player == "X") {
    icon = <Icon iconName={"cross"} />;
  }
  return (
    <div
      className="card"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {/* <Icon /> */}
      {icon}
    </div>
  );
};

export default Card;
