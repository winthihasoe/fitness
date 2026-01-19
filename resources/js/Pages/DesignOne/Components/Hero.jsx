import { Box, Container, Typography, Button, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: "90vh",
                background:
                    "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #2A2A2A 100%)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                py: 8,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.2,
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 3,
                                background:
                                    "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            FORGE YOUR GREATNESS
                        </Typography>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{ mb: 4, lineHeight: 1.6 }}
                        >
                            Transform your body, elevate your mind, and unleash
                            your potential at the most hardcore gym in the city.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                startIcon={<PlayArrowIcon />}
                                sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
                            >
                                Watch Tour
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <Box sx={{ textAlign: "center", minWidth: 150 }}>
                                <Typography
                                    variant="h2"
                                    color="primary.main"
                                    sx={{ fontWeight: 900 }}
                                >
                                    500+
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Active Members
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: "center", minWidth: 150 }}>
                                <Typography
                                    variant="h2"
                                    color="primary.main"
                                    sx={{ fontWeight: 900 }}
                                >
                                    24/7
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Open Access
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: "center", minWidth: 150 }}>
                                <Typography
                                    variant="h2"
                                    color="primary.main"
                                    sx={{ fontWeight: 900 }}
                                >
                                    15+
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    Expert Trainers
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
