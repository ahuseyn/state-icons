import React, { forwardRef } from 'react';

const ME = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "246.2,96.0,9.8,15.4", fill: color, "data-name": "Maine", "data-fips": "23", "data-abbrev": "ME", ...rest },
        React.createElement("path", { d: "M249.1219229770344,111.27580821254615 248.88294440292782,111.37604180203888 248.65002113710221,110.952184154474 248.08739787022233,110.58805241708735 248.08931505972657,110.24458439536212 246.15967281157342,104.37076902274242 246.9912777198548,103.60778494479992 247.39156191521408,101.91964414527648 247.37599559489632,99.2239836960421 248.37425666986206,96.32405763501255 249.3501099501305,96.9521631083047 250.66266153381727,95.97226627641366 251.91645587749838,96.59601707980548 253.2464617815071,100.95269022229434 255.27940835198154,102.3046855926682 256,103.23010725817805 254.0443842578927,105.53680099368265 252.00855197863604,107.35146452974692 249.82994062886223,109.00741018337554 249.1219229770344,111.27580821254615Z" })));
});

export { ME as default };
