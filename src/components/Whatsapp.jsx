import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    <Link to={`https://wa.me/+916202499263`} target="blank">
      <FontAwesomeIcon
        icon={faWhatsapp}
        color="#30B945"
        className="fixed z-50 bottom-10 right-10 h-14"
      />
    </Link>
  );
};

export default Whatsapp;
