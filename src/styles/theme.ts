import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './theme/buttonStyles'

import { TypographyStyles as Text } from './theme/typographyStyles'






export const theme = extendTheme({
    colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: {
            "500": "#F32266",
            "600": "#D50B4F"
        },
        secondary: {
            "100": "#F7F6F3"
        },
        neutral: {
            "500": "#7893B0",
            "900": "#152B47"
        },
        green: {
            "500": "#43B671",
        },
    },

    fonts: {
        body: 'Frank Ruhl Libre, serif',
        heading: 'DM Sans, sans-serif',
    },

    styles: {
        global: {
            "html, body": {
                bg: 'white',
                fontFamily: "Frank Ruhl Libre, serif",
                overflowX: "hidden",
            },

            "h1, h2, h3, h4": {
                color: 'neutral.900',
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "500",
                letterSpacing: "-0.025rem", //-0.4px
                lineHeight: "100%",
            },


            h1: {
                fontSize: ["2rem", "3.5rem"], // 32px, 56px
            },

            h2: {
                fontSize: ["1.5rem", "2.25rem"], // 24px, 36px
            },

            h3: {
                fontSize: ["1.125rem", "1.5rem"], // 18px, 24px
            },

            h4: {
                fontSize: ["0.875rem", "1.125rem"], // 14px, 18px
            },

            p: { // default b_medium
                fontSize: ["1.125rem", "1.25rem"], // 18px, 20px
                lineHeight: ["1.5rem", "1.625rem"], // 24px, 26px

                color: 'neutral.900',
                letterSpacing: "-0.025rem", //-0.4px
                marginY: "1rem",

            },

        }
    },

    components: {
        Button,
        Text,
    }
})