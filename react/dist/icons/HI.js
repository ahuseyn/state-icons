import React, { forwardRef } from 'react';

const HI = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0.0,124.1,7.9,16.5", fill: color, "data-name": "Hawaii", "data-fips": "15", "data-abbrev": "HI", ...rest },
        React.createElement("path", { d: "M4.025327661521928,139.53991116306955 4.6322827499366666,138.86735316594073 4.889710706426353,137.59956022849946 5.23306867371279,137.40519217999994 6.00029159820614,137.3124480703205 6.194278283554296,136.666187630804 6.524194695062302,136.53302827074845 6.688135606893957,136.72659967752506 7.373341005530138,137.8986317007347 7.677689357367739,138.46365103732643 7.854095762048077,139.1232862255915 7.872592055618076,140.52758816739885 7.704734740301525,140.62770300884196 6.2639073797424185,140.44384952571093 5.1183934820429,140.23859921418466 4.4136801158097185,140.39327269137888 4.025327661521928,139.53991116306955 M7.122593334850153,134.9754181658355 6.674820089017995,135.13052703881314 5.665059480272511,134.67624658911862 5.624127622989274,133.79627453590103 5.483844197400581,133.3636297594812 5.581821757653026,133.18374258916927 6.000914633136674,133.14791899859136 6.737773216962311,134.07563434394535 7.122593334850153,134.9754181658355 M5.9434703692932835,132.44004586372733 5.653617865750161,132.6624067609343 4.3313897528645215,131.55495516340565 4.761740589720206,131.38315224449295 5.9434703692932835,132.44004586372733 M2.70502030910337,129.44334755619855 2.8312203977177006,128.61008535753825 2.8119594483929475,128.4313004275571 3.763140915634962,128.59478134659906 3.8482410944540573,128.9231063979404 3.932302981171808,130.33894696597062 3.6803126118988336,130.3835502967441 3.5228549045567523,130.2113575697849 2.70502030910337,129.44334755619855 M0,124.22210037786436 0.276665322030295,124.13815506352633 0.8550652619715255,124.18836688661813 1.3866024499691736,124.69606524448781 0.9679740852213484,125.33384783615648 0.47148804511985604,125.35377218519659 0,124.22210037786436Z" })));
});

export { HI as default };
