import React from "react";
import "./Common.css";

const Data = (props) => {
  return (
    <>
      <div className="card">
        <img className="img" src={props.imgsrc} alt="Avatar" />
        <div className="container">
          <h4>
            <b>{`${props.fname} ${props.lname}  `}</b>
          </h4>
          <p>{`ID:${props.id} Email:${props.email}`}</p>
        </div>
      </div>
    </>
  );
};

export default Data;
