import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";
import { Link } from "@inertiajs/react";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "background.paper", boxShadow: 1 }}
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                        <SelfImprovementIcon
                            sx={{ fontSize: 32, color: "primary.main" }}
                        />
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ fontWeight: 700, color: "primary.main" }}
                        >
                            FlowFit Studio
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Button color="primary" component="a" href="#classes">
                            Classes
                        </Button>
                        <Button color="primary" component="a" href="#trainers">
                            Instructors
                        </Button>
                        <Button color="primary" component="a" href="#pricing">
                            Membership
                        </Button>
                        <Button
                            color="primary"
                            component="a"
                            href="#testimonials"
                        >
                            Reviews
                        </Button>
                        <Link href="/">
                            <Button color="primary">Home</Button>
                        </Link>
                        <Link href="/admin">
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<AdminPanelSettingsIcon />}
                                sx={{ ml: 1, borderRadius: 3 }}
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
