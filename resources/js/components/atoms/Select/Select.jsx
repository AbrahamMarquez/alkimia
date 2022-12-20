import "./Select.scss";

import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";

export default function ({
    value,
    id,
    onChange,
    options,
    selectAll,
    showSelectAll,
    selectionLimit,
    placeholder,
    width,
    skeleton = false,
    className,
    title,
}) {
    return !skeleton ? (
        <div className="Select">
            <p className="title-Select">{title}</p>
            <div className="SelectWrapper">
                <div className="box-shadow">
                    <Dropdown
                        id={id}
                        className="Select"
                        value={value}
                        placeholder={placeholder}
                        selectAll={selectAll}
                        showSelectAll={showSelectAll}
                        selectionLimit={selectionLimit}
                        options={options}
                        onChange={onChange}
                        filter
                        // filterTemplate={filterTemplate}
                        emptyFilterMessage="Sin resultados"
                    />
                </div>
            </div>
        </div>
    ) : (
        <Skeleton width={width || "100%"} className={className} height="34px" />
    );
}
