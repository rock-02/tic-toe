import React from "react";
import { FaCross, FaRegCircle, FaPen, FaCircle } from "react-icons/fa";
const Icon = ({ iconName }) => {
  if (iconName == "circle") {
    return <FaRegCircle />;
  } else if (iconName == "cross") {
    return <FaCross />;
  } else {
    return <FaPen />;
  }
};
// eslint-disable-next-line react/prop-types
export default Icon;
