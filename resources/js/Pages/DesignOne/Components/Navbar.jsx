import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "background.paper", boxShadow: 3 }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <FitnessCenterIcon
                            sx={{ fontSize: 32, color: "primary.main" }}
                        />
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ fontWeight: 800, color: "primary.main" }}
                        >
                            IRON TEMPLE
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                        <Button color="inherit" component="a" href="#classes">
                            Classes
                        </Button>
                        <Button color="inherit" component="a" href="#trainers">
                            Trainers
                        </Button>
                        <Button color="inherit" component="a" href="#pricing">
                            Pricing
                        </Button>
                        <Button
                            color="inherit"
                            component="a"
                            href="#testimonials"
                        >
                            Testimonials
                        </Button>
                        <Link href="/">
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link href="/admin">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AdminPanelSettingsIcon />}
                                sx={{ ml: 2 }}
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
