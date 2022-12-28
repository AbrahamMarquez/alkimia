import React from "react";
import AuthSiderBar from "../AuthSiderBar/AuthSiderBar";

import "./AuthLayout.scss"

const AuthLayout = ({ children }) => {
    return (
        <div className="AuthLayout">
            {children}
            <div className="AuthSider">
                <AuthSiderBar />
            </div>
            {/* <div class="Header"> </div>
            <div class="View"> </div> */}
        </div>
    );
};

export default AuthLayout;
