import React from "react";
import "./SaveModal.scss";

import checksave from "../../../assets/icons/checksave.png";

const SaveModal = () => {
    return (
        <>
            <div className="modal">
                <div className="ModalContainer">
                    <img className="checksave" src={checksave} />
                    <div className="parrafo">
                        <b>¡Cambios guardados con exito!</b>
                    </div>
                </div>
            </div>
            <div className="ModalBackground"></div>
        </>
    );
};

export default SaveModal;
