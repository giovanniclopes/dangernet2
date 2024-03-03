/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      backgroundImage: {
        ourExpertiseBG: "url(../../src/assets/svg/ourExpertise-BG.svg)",
        glassmorphismBG:
          "background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      },
      fontFamily: {
        playfair: "playfair Display",
        oswald: "Oswald, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      colors: {
        product: {
          blue: {
            DEFAULT: "#174153",
            900: "#050d11",
            800: "#091a22",
            700: "#0e2732",
            600: "#123543",
            500: "#174153",
            400: "#287393",
            300: "#41a2cb",
            200: "#80c1dc",
            100: "#c0e0ee",
          },
          green: {
            DEFAULT: "#B9FA02",
            100: "#f1fecc",
            200: "#e3fd9a",
            300: "#d5fc67",
            400: "#c7fb35",
            500: "#b9fa02",
            600: "#94c802",
            700: "#6f9601",
            800: "#4a6401",
            900: "#253200",
          },
          white: {
            DEFAULT: "#f6f8ff",
            900: "#001664",
            800: "#002bc8",
            700: "#2d5aff",
            600: "#91a9ff",
            500: "#f6f8ff",
            400: "#f7f9ff",
            300: "#f9faff",
            200: "#fbfcff",
            100: "#fdfdff",
          },
          purple: {
            DEFAULT: "#a846a0",
            900: "#220e20",
            800: "#441c40",
            700: "#652a60",
            600: "#873981",
            500: "#a846a0",
            400: "#bf67b8",
            300: "#cf8dca",
            200: "#dfb3db",
            100: "#efd9ed",
          },
          black: {
            DEFAULT: "#0e0404",
            900: "#030101",
            800: "#060202",
            700: "#0a0303",
            600: "#0d0404",
            500: "#0e0404",
            400: "#5c1a1a",
            300: "#a93030",
            200: "#d46666",
            100: "#e9b3b3",
          },
        },
      },
    },
  },
  plugins: [],
};
