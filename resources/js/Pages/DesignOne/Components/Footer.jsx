import {
    Box,
    Container,
    Typography,
    Grid,
    Link as MuiLink,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
                py: 6,
                borderTop: "1px solid",
                borderColor: "divider",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 2,
                            }}
                        >
                            <FitnessCenterIcon
                                sx={{ fontSize: 32, color: "primary.main" }}
                            />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 800, color: "primary.main" }}
                            >
                                IRON TEMPLE
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                        >
                            Where legends are forged. Join the strongest
                            community in fitness.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <MuiLink
                                href="#"
                                color="inherit"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                <FacebookIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                color="inherit"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                <InstagramIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                color="inherit"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                <TwitterIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                color="inherit"
                                sx={{ "&:hover": { color: "primary.main" } }}
                            >
                                <YouTubeIcon />
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 700 }}
                        >
                            Quick Links
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <MuiLink
                                href="#classes"
                                color="text.secondary"
                                underline="hover"
                            >
                                Classes
                            </MuiLink>
                            <MuiLink
                                href="#trainers"
                                color="text.secondary"
                                underline="hover"
                            >
                                Trainers
                            </MuiLink>
                            <MuiLink
                                href="#pricing"
                                color="text.secondary"
                                underline="hover"
                            >
                                Pricing
                            </MuiLink>
                            <MuiLink
                                href="#testimonials"
                                color="text.secondary"
                                underline="hover"
                            >
                                Testimonials
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 700 }}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            123 Muscle Ave, Fitness City
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            Phone: (555) 123-4567
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: info@irontemple.com
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 700 }}
                        >
                            Hours
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            24/7 Access for Members
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            Staff Available:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Mon-Fri: 5 AM - 10 PM
                            <br />
                            Sat-Sun: 7 AM - 8 PM
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2026 Iron Temple Gym. All rights reserved. | Showcase
                        by Your Web Development Company
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
