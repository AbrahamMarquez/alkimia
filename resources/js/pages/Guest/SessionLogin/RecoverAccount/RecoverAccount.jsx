import React from "react";
import Button from "../../../../components/atoms/Button/Button";
import Input from "../../../../components/atoms/Input/Input";

//Assets
import Facebook from '../../../../assets/icons/fb.svg'
import Instagram from '../../../../assets/icons/instagram.png'
import Google from '../../../../assets/icons/Google.png'

//Styles
import "./RecoverAccount.scss";

const RecoverAccount = () => {


    const networks = [
        {
            id: 1,
            icon: Facebook
        },
        {
            id: 2,
            icon: Google
        },
        {
            id: 3,
            icon: Instagram
        },
    ]

    return (
        <div className="RecoverAccount">
            <div className="min-form">
                <div className="rsecct1">
                    <div className="rsecct-1-titltles">
                        <p className="rsecct-1-title">Recuperar cuenta</p>
                        <p className="rsecct-1-sub-title">
                            Actualiza tus accesos
                        </p>
                    </div>
                    <div className="rsecct-1-options">
                        <p className="rsecct-1-active c">Correo</p>
                        <p className="rsecct-1-active t">Teléfono</p>
                    </div>
                </div>
                <div className="rsecct2">
                    <Input
                        title={"Correo electrónico"}
                        placeholder={"Correo electrónico"}
                        id={"email"}
                        type={"email"}
                    />
                    <div className="rsecct-2-btns">
                        <Button btnTitle={"Volver"} className={"white"} />
                        <Button
                            btnTitle={"Enviar código"}
                            className={"degradado"}
                        />
                    </div>
                </div>
                <div className="rsecct3">
                    <div className="rsecct-3-networks">
                        <p className="rsecct-3-title">Ingresar con mis redes sociales</p>
                        <div className="rsecct-3-net">
                            {networks.map((nts) => (
                                <div className="rsecct-3-card-net">
                                    <img src={nts.icon} alt="Networks" className="networks"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverAccount;
