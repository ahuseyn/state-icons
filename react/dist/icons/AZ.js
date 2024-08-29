import React, { forwardRef } from 'react';

const AZ = forwardRef(({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (React.createElement("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "135.4,135.5,18.1,21.0", fill: color, "data-name": "Arizona", "data-fips": "04", "data-abbrev": "AZ", ...rest },
        React.createElement("path", { d: "M153.44549201184745,137.6540162323991 150.8431797011982,156.52478582842366 145.2444225088159,155.7165125068392 139.2491722145899,152.28932800824603 135.37175786181166,149.8802748188062 135.7580564198044,149.28737756062438 136.1173714580777,149.374364509516 136.55054593778084,148.77449271009667 136.15656225053522,148.2250001181799 136.15778617903194,147.71160726393447 136.13199750446984,147.10207145874483 136.81375928238566,146.44969807105494 137.32758924768294,144.9803321528107 138.2804262792916,144.4617775214152 137.89406977842302,143.72740594067133 137.6674289220552,143.0360395410665 137.56015256388994,142.41315221839108 137.50149903338627,141.93601404207487 137.50645870128986,141.62964607534875 137.79909839839232,141.0128979478961 137.79653125692656,140.33924624475588 137.8690093858284,139.68762564132922 138.01203986756974,138.9753528445404 137.8660993637435,138.47480665777493 138.1275377487265,138.10271840032564 138.68281824646567,138.2126015930555 139.1423778843097,138.546390225701 139.4775594560406,138.7477836420994 139.74956318448935,138.276458129526 139.88384342228974,138.18773394663882 140.37765914576656,135.51807361269138 144.60099085414686,136.23942740356622 149.63551027655154,137.07273709882654 153.44549201184745,137.6540162323991Z" })));
});

export { AZ as default };
