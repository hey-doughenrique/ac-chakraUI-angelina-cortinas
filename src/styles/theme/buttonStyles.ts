export const ButtonStyles = {
    // Styles for the base style
    baseStyle: {
        fontWeight: "light",
        borderRadius: "base",
        fontFamily: 'DM Sans, sans-serif',
    },
    // Styles for the size variations xs , sm, md or lg
    sizes: {
        sm: {
            fontSize: "12px",
            px: 8,
            py: 6,
            minWidth: ["100%", "auto"],
            borderRadius: "8px",
        },

        md: {
            fontSize: "14px",
            px: 10,
            py: 8,
            minWidth: ["100%", "auto"],
            borderRadius: "8px",
        },

    },
    // Styles for the visual style variations, solid, outline, ghost
    variants: {
        solid: {
            bg: "primary.500",
            color: "white",
            _hover: {
                bg: "primary.600"
            },
            boxShadow: "xl",
        },

        outline: {
            bg: "transparent",
            color: "primary.500",
            borderColor: "primary.500",
            _hover: {
                color: "primary.500"
            },
            boxShadow: "xl",

        },

        successful: {
            bg: "green.500",
            color: "white",
            borderColor: "green.500",
        }
    },
    // The default `size` or `variant` values
    defaultProps: {
        size: "md",
        variant: "primary",
    },
}