import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Link as MuiLink,
} from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: "primary.main", color: "white", py: 8 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                mb: 3,
                            }}
                        >
                            <SelfImprovementIcon sx={{ fontSize: 36 }} />
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                FlowFit Studio
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}
                        >
                            Transform your life through movement. Join our
                            community and discover the joy of fitness.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "white",
                                    "&:hover": { opacity: 0.7 },
                                }}
                            >
                                <InstagramIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "white",
                                    "&:hover": { opacity: 0.7 },
                                }}
                            >
                                <FacebookIcon />
                            </MuiLink>
                            <MuiLink
                                href="#"
                                sx={{
                                    color: "white",
                                    "&:hover": { opacity: 0.7 },
                                }}
                            >
                                <TwitterIcon />
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 600 }}
                        >
                            Quick Links
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                            }}
                        >
                            <MuiLink
                                href="#classes"
                                sx={{
                                    color: "white",
                                    opacity: 0.9,
                                    textDecoration: "none",
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                Classes
                            </MuiLink>
                            <MuiLink
                                href="#trainers"
                                sx={{
                                    color: "white",
                                    opacity: 0.9,
                                    textDecoration: "none",
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                Instructors
                            </MuiLink>
                            <MuiLink
                                href="#pricing"
                                sx={{
                                    color: "white",
                                    opacity: 0.9,
                                    textDecoration: "none",
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                Membership
                            </MuiLink>
                            <MuiLink
                                href="#testimonials"
                                sx={{
                                    color: "white",
                                    opacity: 0.9,
                                    textDecoration: "none",
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                Reviews
                            </MuiLink>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 600 }}
                        >
                            Contact Us
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <LocationOnIcon sx={{ fontSize: 20 }} />
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.9 }}
                                >
                                    456 Wellness Blvd, Studio City
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <PhoneIcon sx={{ fontSize: 20 }} />
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.9 }}
                                >
                                    (555) 987-6543
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <EmailIcon sx={{ fontSize: 20 }} />
                                <Typography
                                    variant="body2"
                                    sx={{ opacity: 0.9 }}
                                >
                                    hello@flowfit.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontWeight: 600 }}
                        >
                            Newsletter
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ mb: 2, opacity: 0.9 }}
                        >
                            Get fitness tips and class updates
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                variant="outlined"
                                placeholder="Your email"
                                size="small"
                                sx={{
                                    flex: 1,
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    borderRadius: 2,
                                    "& .MuiOutlinedInput-root": {
                                        color: "white",
                                        "& fieldset": {
                                            borderColor:
                                                "rgba(255,255,255,0.3)",
                                        },
                                        "&:hover fieldset": {
                                            borderColor:
                                                "rgba(255,255,255,0.5)",
                                        },
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "rgba(255,255,255,0.7)",
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "secondary.main",
                                    "&:hover": {
                                        backgroundColor: "secondary.dark",
                                    },
                                }}
                            >
                                Join
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 6,
                        pt: 4,
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        © 2026 FlowFit Studio. All rights reserved. | Showcase
                        by Your Web Development Company
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
