import React, { useState } from "react";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthSiderBar from "../AuthSiderBar/AuthSiderBar";

import "./AuthLayout.scss";

const AuthLayout = ({ children, AuthFunctions }) => {

    const [close, setClose] = useState(false)

    return (
        <div className="AuthLayout">
            {children}
            <div className="AuthSider">
                <AuthSiderBar AuthFunctions={AuthFunctions}/>
            </div>
            {/* <div className="AuthHeader">
                <AuthHeader/>
            </div> */}
        </div>
    );
};

export default AuthLayout;
