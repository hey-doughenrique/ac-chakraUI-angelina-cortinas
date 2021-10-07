import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './theme/buttonStyles'

import Typography from './theme/typography'



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

    fontSizes: {
        d1desktop: "7.5rem",
        d2desktop: "5rem",
        d3desktop: "4rem",
        h1desktop: ["2rem", "3.5rem"],
        lgpdesktop: "1.5rem",
    },

    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ["32px", "56px"],
            fontWeight: "500",
            lineHeight: "100%",
            letterSpacing: "-0.4px",
        },
    },

    styles: {
        global: {
            "html, body": {
                bg: 'white',
                color: 'neutral.500',
                overflowX: "hidden",
            },

            "h1, h2, h3, h4": {
                color: 'neutral.900',
            },
        }
    },

    components: {
        Button,
    }
})