import { createTheme } from "@mui/material/styles";

export const designThreeTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#059669",
            light: "#10B981",
            dark: "#047857",
        },
        secondary: {
            main: "#0EA5E9",
            light: "#38BDF8",
            dark: "#0284C7",
        },
        background: {
            default: "#F0FDF4",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#064E3B",
            secondary: "#6B7280",
        },
    },
    typography: {
        fontFamily: "Instrument Sans, Arial, sans-serif",
        h1: {
            fontWeight: 600,
            fontSize: "3.5rem",
            letterSpacing: "-0.01em",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
        },
        h3: {
            fontWeight: 500,
            fontSize: "2rem",
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.5rem",
        },
        button: {
            fontWeight: 500,
            textTransform: "none",
        },
    },
    shape: {
        borderRadius: 16,
    },
});
