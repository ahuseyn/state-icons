import React, { forwardRef } from 'react';

const DC = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "236.5,128.5,0.6,0.6", fill: color, "data-name": "District of Columbia", "data-fips": "11", "data-abbrev": "DC", ...rest },
        React.createElement("path", { d: "M236.81649887567886,129.0985725800209 236.816498854147,129.09857187615145 236.7892666067497,128.90172431622304 236.52117795522994,128.6604675087763 236.6942647735542,128.45962179129552 237.08603633945154,128.73751319030274 236.81649887567886,129.0985725800209Z" })));
});

export { DC as default };
