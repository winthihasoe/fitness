import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    AppBar,
    Toolbar,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const homeTheme = createTheme({
    palette: {
        primary: {
            main: "#2563EB",
        },
        secondary: {
            main: "#7C3AED",
        },
    },
    typography: {
        fontFamily: "Instrument Sans, Arial, sans-serif",
    },
});

const designs = [
    {
        title: "Iron Temple",
        subtitle: "Classic Hardcore Gym",
        description:
            "Dark and bold design featuring powerful aesthetics, intense class offerings, and a focus on strength training. Perfect for serious athletes and bodybuilders.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        route: "/design-one",
        color: "#FF6B35",
        features: [
            "Beast Mode Strength",
            "Powerlifting",
            "Boxing",
            "24/7 Access",
        ],
    },
    {
        title: "FlowFit Studio",
        subtitle: "Modern Minimalist Fitness",
        description:
            "Clean, vibrant design with gradient accents and contemporary layouts. Emphasizes diverse class offerings and community engagement with modern UI patterns.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
        route: "/design-two",
        color: "#6366F1",
        features: ["Yoga Flow", "Spin Cycle", "Dance Cardio", "HIIT Classes"],
    },
    {
        title: "Zenith Wellness",
        subtitle: "Holistic Wellness Spa",
        description:
            "Calm and natural design with organic tones and peaceful imagery. Focuses on mind-body connection, meditation, and restorative practices for complete wellness.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
        route: "/design-three",
        color: "#059669",
        features: ["Meditation", "Tai Chi", "Spa Therapy", "Nature Walks"],
    },
];

export default function Home() {
    return (
        <ThemeProvider theme={homeTheme}>
            <Box sx={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
                {/* Header */}
                <AppBar
                    position="static"
                    sx={{ backgroundColor: "white", boxShadow: 1 }}
                >
                    <Container maxWidth="xl">
                        <Toolbar
                            sx={{ justifyContent: "space-between", py: 1.5 }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <FitnessCenterIcon
                                    sx={{ fontSize: 32, color: "primary.main" }}
                                />
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: 700,
                                        color: "primary.main",
                                    }}
                                >
                                    Fitness Center Showcase
                                </Typography>
                            </Box>
                            <Link href="/admin">
                                <Button
                                    variant="contained"
                                    startIcon={<AdminPanelSettingsIcon />}
                                    sx={{ borderRadius: 2 }}
                                >
                                    Admin Panel
                                </Button>
                            </Link>
                        </Toolbar>
                    </Container>
                </AppBar>

                {/* Hero Section */}
                <Box
                    sx={{
                        background:
                            "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                        color: "white",
                        py: 10,
                        textAlign: "center",
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            variant="h2"
                            sx={{ fontWeight: 700, mb: 3 }}
                        >
                            Three Unique Fitness Center Designs
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                opacity: 0.95,
                                fontWeight: 400,
                                maxWidth: 800,
                                mx: "auto",
                            }}
                        >
                            Explore our showcase of three distinct fitness
                            center website designs, each with unique aesthetics,
                            components, and user experiences. Built with React,
                            MUI, and Inertia.js.
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            Created by Your Web Development Company | All data
                            is hardcoded for demonstration purposes
                        </Typography>
                    </Container>
                </Box>

                {/* Designs Showcase */}
                <Container maxWidth="xl" sx={{ py: 8 }}>
                    <Grid container spacing={6}>
                        {designs.map((design, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                                        transition: "all 0.3s ease",
                                        border: "2px solid transparent",
                                        "&:hover": {
                                            transform: "translateY(-12px)",
                                            boxShadow: `0 16px 48px ${design.color}40`,
                                            borderColor: design.color,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={design.image}
                                        alt={design.title}
                                        sx={{ objectFit: "cover" }}
                                    />
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                mb: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                        design.color,
                                                }}
                                            />
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: design.color,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {design.subtitle}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 2, fontWeight: 700 }}
                                        >
                                            {design.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 3, lineHeight: 1.7 }}
                                        >
                                            {design.description}
                                        </Typography>
                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ mb: 1, fontWeight: 600 }}
                                            >
                                                Key Features:
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: 1,
                                                }}
                                            >
                                                {design.features.map(
                                                    (feature, i) => (
                                                        <Box
                                                            key={i}
                                                            sx={{
                                                                px: 2,
                                                                py: 0.5,
                                                                backgroundColor: `${design.color}15`,
                                                                color: design.color,
                                                                borderRadius: 2,
                                                                fontSize:
                                                                    "0.875rem",
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {feature}
                                                        </Box>
                                                    ),
                                                )}
                                            </Box>
                                        </Box>
                                        <Link href={design.route}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    py: 1.5,
                                                    borderRadius: 3,
                                                    backgroundColor:
                                                        design.color,
                                                    fontWeight: 600,
                                                    "&:hover": {
                                                        backgroundColor: `${design.color}dd`,
                                                    },
                                                }}
                                            >
                                                View {design.title}
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Footer */}
                <Box
                    sx={{
                        backgroundColor: "#1E293B",
                        color: "white",
                        py: 6,
                        mt: 8,
                    }}
                >
                    <Container maxWidth="xl">
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: 700 }}
                                >
                                    About This Showcase
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.9, lineHeight: 1.7 }}
                                >
                                    This is a demonstration of three different
                                    fitness center website designs, each with
                                    unique branding, color schemes, and user
                                    experiences. All designs feature responsive
                                    layouts, MUI components with the new Grid
                                    syntax, and hardcoded sample data for
                                    showcase purposes.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ mb: 2, fontWeight: 700 }}
                                >
                                    Technologies Used
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.9, lineHeight: 1.7 }}
                                >
                                    Laravel 12 • React 19 • Inertia.js •
                                    Material-UI (MUI) 7 • Vite 7 • Tailwind CSS
                                    4 syntax
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                mt: 6,
                                pt: 4,
                                borderTop: "1px solid rgba(255,255,255,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                © 2026 Your Web Development Company. All rights
                                reserved. | Fitness Center Showcase
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
