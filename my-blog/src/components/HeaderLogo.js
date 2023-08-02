import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderLogo() {

    const navigate = useNavigate();

    return (
        <h5 onClick={() => navigate("/")}>logo</h5>
    );
}
