import axios from "axios";
import React, { useEffect, useState } from "react";

const ShopAditionalInfo = () => {
  const [infoData, setInfoData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}info/all-additionalInfo`)
      .then((res) => {
        setInfoData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="tab-pane fade"
      id="nav-additional-info"
      role="tabpanel"
      aria-labelledby="nav-additional-info-tab"
    >
      <div className="product__desc-info">
        <ul>
          {infoData.map((item) => (
            <li key={item.id}>
              <h6>{item.title}</h6>
              <span>{item.modelInfo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopAditionalInfo;
