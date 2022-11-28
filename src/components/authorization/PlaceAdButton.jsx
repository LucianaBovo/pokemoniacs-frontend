import React from 'react';
import { useNavigate } from "react-router-dom";

const PlaceAdButton = () => {
    const navigate = useNavigate();
    return <button className="log-button" onClick={() => navigate(`/searchform`)}>Sell Card</button>;
}

export default PlaceAdButton