import React, { useEffect } from "react";
import * as CardsApi from "../api/CardsApi";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { coinFormatter } from "../utils/helpers";
import { useAuth0 } from "@auth0/auth0-react";

import "./CardDetail.css";
import Layout from "../components/layout/Layout";

const CardDetail = () => {
  const [cardDetail, setCardDetail] = useState(null);
  const { isAuthenticated } = useAuth0();

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
          <Link to={`/chat/${cardDetail.userId}`}> {isAuthenticated ? <div className="btn btn-outline-danger">Contact seller</div> : null} </Link>
          </div>
        </Layout>
    );
};
export default CardDetail;
