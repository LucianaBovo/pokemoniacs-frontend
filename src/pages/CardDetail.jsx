import React, { useEffect } from "react";
import * as CardsApi from "../api/CardsApi";
import * as PokemonApi from "../api/PokemonApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { coinFormatter, formatDate, formatDateFromApi } from "../utils/helpers";
import Layout from "../components/layout/Layout";
import ChatButton from "../components/authorization/ChatButton";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { Spinner } from "react-bootstrap";

import "./CardDetail.css";

const CardDetail = () => {
  const [cardDetails, setCardDetail] = useState(null);
  const [cardPublicData, setCardPublicData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      const result = await CardsApi.getCardById(id);
      setCardDetail(result);

      const publicData = await PokemonApi.getCardById(result.apiId);
      setCardPublicData(publicData.data);
    };
    fetchCard();
  }, [id]);

  const cardPrice = (key) => {
    if (!cardPublicData.tcgplayer.prices.normal) {
      return '-';
    }
    return coinFormatter(cardPublicData.tcgplayer.prices.normal[key]);
  }

  if (!cardDetails || !cardPublicData) {
    return (
      <Layout>
        <div className="loading-container">
          <Spinner animation="border" />
          <div className="mt-3">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="card-detail-container">
        <div className="left-box">
          <img src={cardDetails.picture} alt={cardDetails.name} />
        </div>
        <div className="right-box">
          <div className="header-info">
            <h2>{cardDetails.name}</h2>
            <div className="types-container">
              {cardDetails.types.map((type) => {
                return <div className="badge-wrapper" key={type}><Badge bg="primary">{type}</Badge></div>
              })}
            </div>
          </div>
          <hr />
          <section className="details-section">
            <h4>Card details</h4>
            <Table responsive="md">
              <thead>
                <tr>
                  <th>Series</th>
                  <th>Rarity</th>
                  <th>Printed total</th>
                  <th>Set name</th>
                  <th>Release date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cardDetails.series}</td>
                  <td>{cardPublicData.rarity}</td>
                  <td>{cardPublicData.set.printedTotal}</td>
                  <td>{cardPublicData.set.name}</td>
                  <td>{formatDateFromApi(cardPublicData.set.releaseDate)}</td>
                </tr>
              </tbody>
            </Table>
          </section>

          <section className="details-section">
            <h4>Item info</h4>
            <Table responsive="md">
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Seller name</th>
                  <th>Posted at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cardDetails.condition}</td>
                  <td>{cardDetails.sellerName}</td>
                  <td>{formatDate(new Date(cardDetails.createdAt).getTime())}</td>
                </tr>
              </tbody>
            </Table>
          </section>

          <section className="prices-section">
            <h4>Selling info</h4>
            <Table responsive="md">
              <thead>
                <tr>
                  <th>Normal market</th>
                  <th>Normal low</th>
                  <th>Normal mid</th>
                  <th>Normal high</th>
                  <th className="th-asking-price">Asking Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cardPrice('market')}</td>
                  <td>{cardPrice('low')}</td>
                  <td>{cardPrice('mid')}</td>
                  <td>{cardPrice('high')}</td>
                  <td className="td-asking-price"><strong>{coinFormatter(cardDetails.price)}</strong></td>
                </tr>
              </tbody>
            </Table>
            <ChatButton userId={cardDetails.userId} />
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default CardDetail;
