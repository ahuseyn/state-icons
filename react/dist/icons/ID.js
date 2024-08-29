import React, { forwardRef } from 'react';

const ID = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "136.3,94.6,15.9,25.6", fill: color, "data-name": "Idaho", "data-fips": "16", "data-abbrev": "ID", ...rest },
        React.createElement("path", { d: "M143.56768177783135,95.0266932407242 143.01705398266733,98.46946613665428 143.42015627774796,99.457642780572 143.29576540340796,100.04322023921316 143.60252338335755,100.65104333401253 144.05634079579093,101.06721242508917 144.3275787218261,101.65011085948765 144.7516620990414,102.78748344643776 145.24135663837646,103.37853406731179 145.91914537519116,103.54412314382346 145.52788415602842,104.22201528898466 145.13599363389037,105.04065402381119 145.1630335682792,105.9224067204681 144.85376724052415,106.08161941478113 144.71092380467107,106.92722907452693 145.0590503362589,107.33327470543945 145.59115142126404,107.0305317799935 145.9159038175715,106.61324814280628 146.1791502110566,106.7574096894612 146.36927322345,107.26238218106282 146.4377324068006,108.35218263579667 146.7729788022324,108.8406389015434 146.76089480262112,109.72994774057734 146.8585958460456,109.99712992475291 147.32080261898776,110.16511061056542 147.52119848186538,110.69785849500535 147.78339300689845,111.63138835709368 148.30013131495673,111.25080334476061 149.05023966238826,111.50700578649695 149.16908555047252,111.19237166995775 150.46365388122044,111.62570897312798 151.02149227755874,111.60864938102085 151.46455769988802,111.0066259670619 151.70478610049184,111.13929595805378 151.85889369371313,111.64096730704571 152.08673216940844,111.86457054727302 152.16087375470153,111.93755418862325 150.84039946815727,120.19789422823193 143.55098850413347,118.9450675077201 136.29068475788105,117.40781051311592 137.65196639702887,111.51371717246116 138.06626089412347,110.62810377986912 137.9721863716858,110.1588036531836 137.58514698944887,109.83826950788495 137.70870568128655,109.31610001139389 138.20457673492655,108.64705305327702 138.85009101803254,108.11135410256121 139.41542647628202,107.12832812296563 139.9112963944419,106.3535467408743 140.23710982902554,105.97872514318878 140.22314642295962,105.45523849379828 139.89716193762328,105.10608930664108 139.49781039396407,104.35718891454991 139.6468572744293,103.78141422687217 139.55024169173507,103.23786202761646 140.50434370140974,98.69340441547978 141.42329108524837,94.5594541314092 143.56768177783135,95.0266932407242Z" })));
});

export { ID as default };
