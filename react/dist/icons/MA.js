import React, { forwardRef } from 'react';

const MA = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "243.2,112.1,8.9,4.7", fill: color, "data-name": "Massachusetts", "data-fips": "25", "data-abbrev": "MA", ...rest },
        React.createElement("path", { d: "M247.31209446238145,115.51215429285276 245.05716058278546,116.00822021069109 243.20028740395338,116.39993107871888 243.17040069964352,114.01896563043869 245.1473698719344,113.58497485049756 248.023309650622,112.86936512798646 248.18222178354503,112.48393661461051 248.62472094532203,112.12878935499204 248.92157232646937,112.1149283131966 249.3653509920862,113.84476254885764 250.6248999658572,115.35308677690303 251.64112329180773,115.15818066545461 251.05999721381076,114.04270097708643 251.97784634950077,114.56332838837994 252.0464222037874,115.5448586420487 250.5704882802236,116.52058897793093 249.3951586270146,116.77028094606368 249.19546896655726,116.28988913063769 248.71768254943638,116.01667105542155 248.3134042549297,115.21043541585537 247.31209446238145,115.51215429285276Z" })));
});

export { MA as default };
