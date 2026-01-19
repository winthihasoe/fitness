import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { designOneTheme } from "./theme";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Classes from "./Components/Classes";
import Trainers from "./Components/Trainers";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function DesignOne() {
    return (
        <ThemeProvider theme={designOneTheme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "background.default",
                }}
            >
                <Navbar />
                <Hero />
                <Classes />
                <Trainers />
                <Pricing />
                <Testimonials />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
