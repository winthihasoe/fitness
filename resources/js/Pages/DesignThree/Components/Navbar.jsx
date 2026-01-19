import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import SpaIcon from "@mui/icons-material/Spa";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "background.paper",
                boxShadow: 0,
                borderBottom: "1px solid",
                borderColor: "primary.light",
            }}
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                        <SpaIcon sx={{ fontSize: 32, color: "primary.main" }} />
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ fontWeight: 600, color: "primary.main" }}
                        >
                            Zenith Wellness
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                        <Button
                            sx={{ color: "text.primary" }}
                            component="a"
                            href="#classes"
                        >
                            Programs
                        </Button>
                        <Button
                            sx={{ color: "text.primary" }}
                            component="a"
                            href="#trainers"
                        >
                            Guides
                        </Button>
                        <Button
                            sx={{ color: "text.primary" }}
                            component="a"
                            href="#pricing"
                        >
                            Packages
                        </Button>
                        <Button
                            sx={{ color: "text.primary" }}
                            component="a"
                            href="#testimonials"
                        >
                            Stories
                        </Button>
                        <Link href="/">
                            <Button sx={{ color: "text.primary" }}>Home</Button>
                        </Link>
                        <Link href="/admin">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AdminPanelSettingsIcon />}
                                sx={{ borderRadius: 8 }}
                            >
                                Admin
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
