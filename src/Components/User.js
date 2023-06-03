import React, { useState } from "react";
import "./Common.css";
import Data from "./Data";

const User = () => {
  const [nData, setData] = useState([]);
  const [state, setSate] = useState(false);

  const collectData = () => {
    setSate(true);
    fetch(`https://reqres.in/api/users?page=1`)
      .then((response) => {
        return response.json();
      })
      .then((resdata) => {
        setData(resdata.data);
        setSate(false);
      });
  };

  function card(val) {
    return (
      <Data
        imgsrc={val.avatar}
        id={val.id}
        email={val.email}
        fname={val.first_name}
        lname={val.last_name}
      />
    );
  }

  return (
    <>
      <div>
        <ul>
          <li>DataShop</li>
          <li onClick={collectData}> Get Users</li>
        </ul>
      </div>

      {state ? (
        <div className="loader"></div>
      ) : (
        <div className="cards">{nData.map(card)}</div>
      )}
    </>
  );
};

export default User;
