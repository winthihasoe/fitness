import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Link as MuiLink,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderTop: "2px solid",
                borderColor: "primary.light",
                py: 8,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                mb: 3,
                            }}
                        >
                            <SpaIcon
                                sx={{ fontSize: 36, color: "primary.main" }}
                            />
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 600, color: "primary.main" }}
                            >
                                Zenith Wellness
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 3, lineHeight: 1.8 }}
                        >
                            A sanctuary for holistic healing and peaceful
                            transformation. Nurture your whole self in harmony
                            with nature.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "primary.main",
                                    "&:hover": { color: "primary.dark" },
                                }}
                            >
                                <InstagramIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "primary.main",
                                    "&:hover": { color: "primary.dark" },
                                }}
                            >
                                <FacebookIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "primary.main",
                                    "&:hover": { color: "primary.dark" },
                                }}
                            >
                                <PinterestIcon />
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                color: "text.primary",
                            }}
                        >
                            Explore
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <MuiLink
                                href="#classes"
                                color="text.secondary"
                                underline="hover"
                            >
                                Programs
                            </MuiLink>
                            <MuiLink
                                href="#trainers"
                                color="text.secondary"
                                underline="hover"
                            >
                                Guides
                            </MuiLink>
                            <MuiLink
                                href="#pricing"
                                color="text.secondary"
                                underline="hover"
                            >
                                Packages
                            </MuiLink>
                            <MuiLink
                                href="#testimonials"
                                color="text.secondary"
                                underline="hover"
                            >
                                Stories
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                color: "text.primary",
                            }}
                        >
                            Visit Us
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                }}
                            >
                                <LocationOnIcon
                                    sx={{
                                        fontSize: 20,
                                        color: "primary.main",
                                        mt: 0.3,
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.6 }}
                                >
                                    789 Serenity Lane
                                    <br />
                                    Peaceful Valley, Nature State
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <PhoneIcon
                                    sx={{ fontSize: 20, color: "primary.main" }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    (555) 246-8135
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <EmailIcon
                                    sx={{ fontSize: 20, color: "primary.main" }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    welcome@zenithwellness.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                color: "text.primary",
                            }}
                        >
                            Wellness Tips
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2, lineHeight: 1.6 }}
                        >
                            Subscribe for mindfulness practices and wellness
                            inspiration
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                            }}
                        >
                            <TextField
                                variant="outlined"
                                placeholder="Your email"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 3,
                                        backgroundColor: "background.default",
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    borderRadius: 3,
                                    py: 1.2,
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 8,
                        pt: 4,
                        borderTop: "1px solid",
                        borderColor: "divider",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2026 Zenith Wellness Center. All rights reserved. |
                        Showcase by Your Web Development Company
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
