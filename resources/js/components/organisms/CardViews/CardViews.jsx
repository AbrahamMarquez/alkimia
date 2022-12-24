import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Share from "../../../assets/icons/share.svg";

import "./CardViews.scss";

const CardViews = ({ elements }) => {
    const [openShare, setOpenShare] = useState(false);
    const navigate = useNavigate();
    const [viewActive, setViewActive] = useState(false);

    const OpenShareModal = (id) => {
        if (openShare) {
            setOpenShare(false);
        } else {
            setOpenShare(id);
        }
    };

    const activeHeart = (id) => {
        if (viewActive) {
            setViewActive(false);
            document.getElementById("heart").style.filter =
                "invert(19%) sepia(96%) saturate(2809%) hue-rotate(311deg) brightness(93%) contrast(101%)";
        } else {
            setViewActive(id)
            document.getElementById("heart").style.filter =
                "invert(0%) sepia(6%) saturate(7500%) hue-rotate(337deg) brightness(107%) contrast(105%)";
        }
    };

    return (
        <div className="seect2-Compont">
            {elements.map((crd, idx) => (
                <div
                    key={crd.id}
                    className="secct-2-cards"
                    style={{ backgroundColor: crd.bgTrap }}
                >
                    <img src={crd.bg} alt="Background" className="secct-2-bg" />
                    <div className="secct-2-cards-a">
                        <div className="secct-2-div-a">
                            <div>
                                <span className="secct-2-name">{crd.name}</span>
                                <br />
                                <br />
                                <span className="secct-2-date">{crd.date}</span>
                            </div>

                            <img
                                src={crd.icon}
                                alt="Share"
                                className="card-a-puntos"
                                onClick={() => OpenShareModal(crd.id)}
                            />
                        </div>

                        {openShare == crd.id && (
                            <div
                                className={`secct-2-share ${
                                    openShare && "openModal"
                                }`}
                            >
                                <span className="secct-2-text">Compartir</span>
                                <img
                                    src={Share}
                                    alt="Share"
                                    className="share"
                                />
                            </div>
                        )}
                    </div>
                    <div className="secct-2-b">
                        <div
                            className="secct-2-bg-cont"
                            style={{ backgroundColor: crd.bgTrap }}
                        >
                            <img
                                src={crd.bg}
                                alt="bg"
                                className="secct-2-bg-b"
                            />
                        </div>
                    </div>
                    <div className="secct-2-c">
                        <h2 className="secct-2-c-title">{crd.title}</h2>
                        <img
                            src={crd.icon2}
                            alt="Heart"
                            className="secct-2-heart"
                            id="heart"
                            onClick={() => activeHeart(crd.id)}
                        />
                    </div>
                    <div
                        className="secct-2-btn-cont"
                        onClick={() => navigate(`${crd.id}/show`)}
                    >
                        Leer
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardViews;
