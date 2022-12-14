import React from "react";

import { Skeleton } from "primereact/skeleton";

import "./Button.scss";

const Button = ({ btnTitle, className, height, onClick, skelton }) => {
    return (
        <>
            {!skelton ? (
                <button
                    style={{ height: height }}
                    className={`styleButton ${className}`}
                    onClick={onClick}
                >
                    {btnTitle}
                </button>
            ) : (
                <Skeleton width="225px" height="36.8px"></Skeleton>
            )}
        </>
    );
};

export default Button;
