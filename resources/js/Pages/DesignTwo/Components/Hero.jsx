import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: "85vh",
                background: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                py: 8,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 3,
                                color: "white",
                            }}
                        >
                            Transform Your Life Through Movement
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                lineHeight: 1.7,
                                color: "rgba(255,255,255,0.9)",
                            }}
                        >
                            Experience fitness reimagined. Modern facilities,
                            expert instructors, and a community that supports
                            your journey.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    backgroundColor: "white",
                                    color: "primary.main",
                                    borderRadius: 3,
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(255,255,255,0.9)",
                                    },
                                }}
                            >
                                Start Your Journey
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    borderColor: "white",
                                    color: "white",
                                    borderRadius: 3,
                                    "&:hover": {
                                        borderColor: "white",
                                        backgroundColor:
                                            "rgba(255,255,255,0.1)",
                                    },
                                }}
                            >
                                Book a Tour
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 6 }}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        backgroundColor:
                                            "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <TrendingUpIcon
                                        sx={{
                                            fontSize: 48,
                                            color: "white",
                                            mb: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="h3"
                                        sx={{ color: "white", fontWeight: 700 }}
                                    >
                                        98%
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: "rgba(255,255,255,0.9)" }}
                                    >
                                        Goal Achievement
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        backgroundColor:
                                            "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        mt: 4,
                                    }}
                                >
                                    <GroupsIcon
                                        sx={{
                                            fontSize: 48,
                                            color: "white",
                                            mb: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="h3"
                                        sx={{ color: "white", fontWeight: 700 }}
                                    >
                                        1200+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: "rgba(255,255,255,0.9)" }}
                                    >
                                        Happy Members
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        p: 3,
                                        backgroundColor:
                                            "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <EmojiEventsIcon
                                        sx={{
                                            fontSize: 48,
                                            color: "white",
                                            mb: 1,
                                        }}
                                    />
                                    <Typography
                                        variant="h3"
                                        sx={{ color: "white", fontWeight: 700 }}
                                    >
                                        50+
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: "rgba(255,255,255,0.9)" }}
                                    >
                                        Weekly Classes
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
