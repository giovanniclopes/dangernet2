/** @type {import('tailwindcss').Config} */
export default {
  content: "./src/**/*.tsx",
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      fontFamily: {
        sourceSerif: "Source Serif 4, serif",
        oswald: "Oswald, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      colors: {
        product: {
          blue: {
            DEFAULT: "#174153",
            100: "#050d11",
            200: "#091a22",
            300: "#0e2732",
            400: "#123543",
            500: "#174153",
            600: "#287393",
            700: "#41a2cb",
            800: "#80c1dc",
            900: "#c0e0ee",
          },
          green: {
            DEFAULT: "#8ee930",
            100: "#1c3305",
            200: "#38660b",
            300: "#549810",
            400: "#70cb15",
            500: "#8ee930",
            600: "#a3ee59",
            700: "#baf282",
            800: "#d1f6ac",
            900: "#e8fbd5",
          },
          white: {
            DEFAULT: "#f6f8ff",
            100: "#001664",
            200: "#002bc8",
            300: "#2d5aff",
            400: "#91a9ff",
            500: "#f6f8ff",
            600: "#f7f9ff",
            700: "#f9faff",
            800: "#fbfcff",
            900: "#fdfdff",
          },
          purple: {
            DEFAULT: "#a846a0",
            100: "#220e20",
            200: "#441c40",
            300: "#652a60",
            400: "#873981",
            500: "#a846a0",
            600: "#bf67b8",
            700: "#cf8dca",
            800: "#dfb3db",
            900: "#efd9ed",
          },
          black: {
            DEFAULT: "#0e0404",
            100: "#030101",
            200: "#060202",
            300: "#0a0303",
            400: "#0d0404",
            500: "#0e0404",
            600: "#5c1a1a",
            700: "#a93030",
            800: "#d46666",
            900: "#e9b3b3",
          },
        },
      },
    },
  },
  plugins: [],
};
