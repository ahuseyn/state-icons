import React, { forwardRef } from 'react';

const OK = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "169.3,139.4,23.0,12.0", fill: color, "data-name": "Oklahoma", "data-fips": "40", "data-abbrev": "OK", ...rest },
        React.createElement("path", { d: "M169.40153178130043,139.35948104467695 171.9503931733009,139.5454408923358 174.44711500015643,139.68837461422285 177.0995221507591,139.81328200277588 179.7545679825668,139.91033230220265 184.53547497431703,140.01387251616399 189.31591831506867,140.02867304849516 191.64627529343,140.00208178930316 191.66034354856757,140.00187750851086 191.6532085808006,141.55265444592143 192.24240653039482,145.1111993722847 192.23842043931901,148.3903784698472 192.2071836339345,151.3369311314111 191.00558539310907,150.694288347262 190.22610689088577,150.34391974371044 189.59841934425268,150.5766155939859 188.6259855860379,150.54510598288374 188.05054533680226,150.55117845700036 187.57575414321565,150.82521458614292 187.11209668895276,150.96481140960637 186.70668180990052,150.79754127703117 185.78038834596174,150.97310550654618 185.36657826990964,150.40805710164489 184.9292014507938,150.88970273989932 184.17734628802725,150.662590978366 183.41017388380365,150.12648758994746 182.57434652456058,150.44741912738988 182.22919360304087,149.62908867223655 180.94316861707108,149.6779249890594 180.1270727393713,149.47285236610483 179.21059405344005,149.20471745730563 178.82585718995952,148.4924285836287 178.0953520331154,148.6904922765225 177.65992974790396,148.3988673977597 177.02021228561767,148.01044383479706 177.1556346227757,144.79509686372998 177.294698910393,141.49327867510848 174.62197373172228,141.36661097570664 171.95066145780052,141.2118044332012 169.28257429433185,141.0289859246412 169.40153178130043,139.35948104467695Z" })));
});

export { OK as default };
