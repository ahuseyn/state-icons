import React, { forwardRef } from 'react';

const RI = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "247.3,115.2,2.1,2.6", fill: color, "data-name": "Rhode Island", "data-fips": "44", "data-abbrev": "RI", ...rest },
        React.createElement("path", { d: "M247.77265820092745,117.80735898148535 247.79554621419035,117.29061663345898 247.31209446238145,115.51215429285276 248.3134042549297,115.21043541585537 248.71768254943638,116.01667105542155 249.19546896655726,116.28988913063769 249.3951586270146,116.77028094606368 247.77265820092745,117.80735898148535Z" })));
});

export { RI as default };
