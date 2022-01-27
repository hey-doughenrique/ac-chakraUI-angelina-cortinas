export default {
    // style object for base or default style
    baseStyle: {
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 'md',
        letterSpacing: '0.25px',




    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        sm: {
            padding: '8',
            fontSize: 'xs',
        }
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        solid: {
            bg: "primary.500",
            color: "white",
            boxShadow: "xl",

            _hover: {
                bg: "primary.600",

            },

        },
        outline: {
            bg: "none",
            color: "primary.500",
            borderColor: "primary.500",

            _hover: {
                bg: "none",
                color: "primary.600",
                borderColor: "primary.600",
            },
        }
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: 'sm',
        variant: 'solid',
    }
}



