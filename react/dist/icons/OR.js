import React, { forwardRef } from 'react';

const OR = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "119.1,99.2,21.2,18.2", fill: color, "data-name": "Oregon", "data-fips": "41", "data-abbrev": "OR", ...rest },
        React.createElement("path", { d: "M139.49781039396407,104.35718891454991 139.89716193762328,105.10608930664108 140.22314642295962,105.45523849379828 140.23710982902554,105.97872514318878 139.9112963944419,106.3535467408743 139.41542647628202,107.12832812296563 138.85009101803254,108.11135410256121 138.20457673492655,108.64705305327702 137.70870568128655,109.31610001139389 137.58514698944887,109.83826950788495 137.9721863716858,110.1588036531836 138.06626089412347,110.62810377986912 137.65196639702887,111.51371717246116 136.29068475788105,117.40781051311592 136.28871615710818,117.41656155602419 129.12699123120663,115.70394323280587 119.078123660116,112.84777429023302 119.08601467400942,110.1484982377072 120.9268141635837,107.39723337600755 123.25192395215139,101.73835538955376 123.7650714639165,99.23868255742882 124.25858973154023,99.39142944242036 124.93483659374743,99.61040152746784 125.3909426369658,100.06258700134765 125.98733026234397,100.43638452002726 126.22595945881213,101.1707584401607 126.12967589118519,101.72708460908876 126.1666854118081,102.2263034393632 126.65415324312532,102.49870646543472 127.21247832814268,102.64630435031903 128.18327801545246,102.55060382384609 128.7251943415922,102.59031263083249 129.4960743836046,102.94998415122481 129.80657231119707,103.21575130918498 130.31281460957572,103.22888467759397 130.89868945519618,103.10447669655026 131.91176976092046,103.41604470243165 132.84589104153832,103.27638290001633 133.356114892944,103.12505440330358 133.89904801105018,103.4133375189834 134.79764730477552,103.27750781448923 139.49781039396407,104.35718891454991Z" })));
});

export { OR as default };
