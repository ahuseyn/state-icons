# State Icons

SVG icons of the 51 states of United States of America. The icons can be customized by adjusting its color, size, and other SVG properties.

## SVG usage

- You can get individual SVG files from **/icons** folder.
- Alternatively, you can visit the home page [ahuseyn.github.io/state-icons/](https://ahuseyn.github.io/state-icons/) to copy SVG snippet and use directly.

## React usage

- Install the library

```sh
npm install @state-icons/react
```

or

```sh
yarn add @state-icons/react
```

- Use the US Postal Service (USPS) abbreviation for the state you want to add. You can find the list of the abbreviations [here](https://www.bls.gov/respondents/mwr/electronic-data-interchange/appendix-d-usps-state-abbreviations-and-fips-codes.htm).

- Import the icon and use it

```js
import { MA } from "@state-icons/react";

<MA size={30} color="blue" />;
```

## License

This library is MIT licensed.
