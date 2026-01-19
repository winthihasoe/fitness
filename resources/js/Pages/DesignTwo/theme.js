import { createTheme } from "@mui/material/styles";

export const designTwoTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#6366F1",
            light: "#818CF8",
            dark: "#4F46E5",
        },
        secondary: {
            main: "#EC4899",
            light: "#F472B6",
            dark: "#DB2777",
        },
        background: {
            default: "#FAFAFA",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#1F2937",
            secondary: "#6B7280",
        },
    },
    typography: {
        fontFamily: "Instrument Sans, Arial, sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            letterSpacing: "-0.01em",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2rem",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
        },
        button: {
            fontWeight: 600,
            textTransform: "none",
        },
    },
    shape: {
        borderRadius: 12,
    },
});
