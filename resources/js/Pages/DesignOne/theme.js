import { createTheme } from "@mui/material/styles";

export const designOneTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#FF6B35",
            light: "#FF8A5B",
            dark: "#E85A2A",
        },
        secondary: {
            main: "#F7931E",
            light: "#FFA94D",
            dark: "#D97706",
        },
        background: {
            default: "#0F0F0F",
            paper: "#1A1A1A",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#B0B0B0",
        },
    },
    typography: {
        fontFamily: "Instrument Sans, Arial, sans-serif",
        h1: {
            fontWeight: 800,
            fontSize: "3.5rem",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontWeight: 700,
            fontSize: "2.5rem",
            letterSpacing: "-0.01em",
        },
        h3: {
            fontWeight: 700,
            fontSize: "2rem",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
        },
        button: {
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
        },
    },
    shape: {
        borderRadius: 4,
    },
});
