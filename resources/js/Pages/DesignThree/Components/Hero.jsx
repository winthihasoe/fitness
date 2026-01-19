import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import EcoIcon from "@mui/icons-material/Eco";

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: "88vh",
                backgroundColor: "background.default",
                position: "relative",
                display: "flex",
                alignItems: "center",
                py: 8,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ mb: 3 }}>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 2,
                                    py: 1,
                                    backgroundColor: "primary.light",
                                    color: "white",
                                    borderRadius: 8,
                                    mb: 3,
                                }}
                            >
                                {/* <EcoIcon sx={{ fontSize: 20 }} /> */}
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Holistic Wellness Center
                                </Typography>
                            </Box>
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 3,
                                color: "text.primary",
                            }}
                        >
                            Nurture Your Body, Mind & Spirit
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mb: 4, lineHeight: 1.8, fontWeight: 400 }}
                        >
                            Discover a sanctuary dedicated to your complete
                            well-being. Experience gentle movement, restorative
                            practices, and peaceful energy in our serene
                            wellness space.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    px: 5,
                                    py: 2,
                                    fontSize: "1rem",
                                    borderRadius: 8,
                                }}
                            >
                                Begin Your Journey
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                sx={{
                                    px: 5,
                                    py: 2,
                                    fontSize: "1rem",
                                    borderRadius: 8,
                                }}
                            >
                                Schedule Visit
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 6 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        backgroundColor: "white",
                                        borderRadius: 4,
                                        border: "2px solid",
                                        borderColor: "primary.light",
                                    }}
                                >
                                    <SelfImprovementIcon
                                        sx={{
                                            fontSize: 56,
                                            color: "primary.main",
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: "primary.main",
                                            fontWeight: 600,
                                            mb: 1,
                                        }}
                                    >
                                        200+
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Meditation Sessions
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        backgroundColor: "white",
                                        borderRadius: 4,
                                        border: "2px solid",
                                        borderColor: "secondary.light",
                                        mt: 6,
                                    }}
                                >
                                    <FavoriteBorderIcon
                                        sx={{
                                            fontSize: 56,
                                            color: "secondary.main",
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: "secondary.main",
                                            fontWeight: 600,
                                            mb: 1,
                                        }}
                                    >
                                        95%
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Stress Reduction
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        backgroundColor: "white",
                                        borderRadius: 4,
                                        border: "2px solid",
                                        borderColor: "primary.light",
                                    }}
                                >
                                    {/* <EcoIcon
                                        sx={{
                                            fontSize: 56,
                                            color: "primary.main",
                                            mb: 2,
                                        }}
                                    /> */}
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: "primary.main",
                                            fontWeight: 600,
                                            mb: 1,
                                        }}
                                    >
                                        100% Natural
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Organic & Sustainable Practices
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
