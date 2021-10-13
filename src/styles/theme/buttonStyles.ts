export const ButtonStyles = {
    // Styles for the base style
    baseStyle: {
        fontWeight: "light",
        borderRadius: "base",
        fontFamily: "DM Sans",
    },
    // Styles for the size variations xs , sm, md or lg
    sizes: {
        sm: {
            fontSize: "sm",
            px: 4,
            py: 3,
        },

        md: {
            fontSize: "md",
            px: 10,
            py: 8,
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

        }
    },
    // The default `size` or `variant` values
    defaultProps: {
        size: "md",
        variant: "primary",
    },
}