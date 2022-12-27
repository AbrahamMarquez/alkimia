import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <div class="parent">
            {children}
            <div class="Sidebar"></div>
            {/* <div class="Header"> </div>
            <div class="View"> </div> */}
        </div>
    );
};

export default AuthLayout;
