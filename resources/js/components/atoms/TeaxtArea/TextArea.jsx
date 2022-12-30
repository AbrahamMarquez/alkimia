import { Skeleton } from "primereact/skeleton";
import React from "react";

import "./TextArea.scss";

const TextArea = ({
    title,
    placeholder,
    id,
    name,
    onChange,
    className,
    viewTitle = false,
    skeleton,
    width
}) => {
    return ! skeleton ? (
        <>
            {viewTitle && <p className="title-area">{title}</p>}
            <div className={`container-textarea ${className}`}>
                <textarea
                    className="textarea"
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </>
    ): (
        <Skeleton width={width || "100%"} className={className} height="150px" />
    );
};

export default TextArea;
