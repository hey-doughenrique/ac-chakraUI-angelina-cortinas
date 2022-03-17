export const typography = {
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "DM Sans, sans-serif",
  },

  styles: {
    global: {
      "h1, h2, h3, h4, h5": {
        color: "neutral.900",
      },

      h1: {
        fontSize: ["4xl", "6xl"], // 36px / 60px
        lineHeight: "1",
        fontWeight: "500",
      },

      h2: {
        fontSize: ["2xl", "4xl"], // 24px / 36px
        lineHeight: "shorter",
        fontWeight: "500",
      },

      h3: {
        fontSize: ["xl", "2xl"], // 20px / 24px
        lineHeight: "shorter",
        fontWeight: "500",
      },

      h4: {
        fontSize: "lg", // 36px
        fontWeight: "500",
      },

      "p, a": {
        color: "neutral.900",
        fontSize: ["md", "lg"],
      },
    },

    defaultProps: {
      p: {
        fontSize: "9xl",
      },
    },
  },
};
