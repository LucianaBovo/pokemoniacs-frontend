import React, { useEffect } from "react";
import * as CardsApi from "../api/CardsApi";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { coinFormatter } from "../utils/helpers";

import "./CardDetail.css";
import Layout from "../components/layout/Layout";
import ChatButton from "../components/authorization/ChatButton";

const CardDetail = () => {
  const [cardDetail, setCardDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchCard = async () => {
      const result = await CardsApi.getCardById(id);

      setCardDetail(result);
    };
    fetchCard();
  }, [id]);

  if (!cardDetail) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className="card-detail">
        <img src={cardDetail.picture} alt={cardDetail.name} />
        <div>
          <h4>{coinFormatter(cardDetail.price)}</h4>
          <p>{cardDetail.condition.replaceAll("_", " ")}</p>
        </div>
        <ChatButton userId={cardDetail.userId} />
      </div>
    </Layout>
  );
};
export default CardDetail;
