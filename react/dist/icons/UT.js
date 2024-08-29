import React, { forwardRef } from 'react';

const UT = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "140.4,118.9,14.9,18.7", fill: color, "data-name": "Utah", "data-fips": "49", "data-abbrev": "UT", ...rest },
        React.createElement("path", { d: "M143.55098850413347,118.9450675077201 150.84039946815727,120.19789422823193 150.31208423577743,123.43842312531696 155.27467531455972,124.26618494135718 153.44549201184745,137.6540162323991 149.63551027655154,137.07273709882654 144.60099085414686,136.23942740356622 140.37765914576656,135.51807361269138 143.55098850413347,118.9450675077201Z" })));
});

export { UT as default };
