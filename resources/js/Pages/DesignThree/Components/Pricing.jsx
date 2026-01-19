import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SpaIcon from "@mui/icons-material/Spa";

const packages = [
    {
        name: "Serenity",
        price: "$79",
        period: "/month",
        description: "Begin your wellness journey with gentle guidance",
        features: [
            "Unlimited yoga & meditation",
            "Access to wellness library",
            "Monthly wellness check-in",
            "Nature walk sessions",
            "Community gatherings",
        ],
        buttonText: "Start Serenity",
    },
    {
        name: "Harmony",
        price: "$129",
        period: "/month",
        description: "Deepen your practice with personalized support",
        features: [
            "Everything in Serenity",
            "4 private wellness sessions",
            "Personalized wellness plan",
            "Nutrition & lifestyle guidance",
            "Spa & hydrotherapy access",
            "Retreat discounts",
        ],
        buttonText: "Choose Harmony",
        featured: true,
    },
    {
        name: "Transcendence",
        price: "$199",
        period: "/month",
        description: "Complete transformation with holistic care",
        features: [
            "Everything in Harmony",
            "Unlimited private sessions",
            "Dedicated wellness coach",
            "Monthly spa treatments",
            "Exclusive retreat access",
            "Herbal medicine consultations",
            "Energy healing sessions",
        ],
        buttonText: "Embrace Transcendence",
    },
];

export default function Pricing() {
    return (
        <Box id="pricing" sx={{ py: 12, backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <SpaIcon
                        sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                    />
                    <Typography
                        variant="h2"
                        sx={{ mb: 2, color: "primary.main" }}
                    >
                        Wellness Packages
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
                    >
                        Investment in your well-being. Choose the path that
                        resonates with your soul.
                    </Typography>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {packages.map((pkg, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 6,
                                    border: "3px solid",
                                    borderColor: pkg.featured
                                        ? "primary.main"
                                        : "divider",
                                    boxShadow: pkg.featured
                                        ? "0 12px 32px rgba(5, 150, 105, 0.2)"
                                        : "none",
                                    position: "relative",
                                    overflow: "visible",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: pkg.featured
                                            ? "0 16px 40px rgba(5, 150, 105, 0.25)"
                                            : "0 12px 32px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                {pkg.featured && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: -16,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            backgroundColor: "primary.main",
                                            color: "white",
                                            px: 3,
                                            py: 1,
                                            borderRadius: 8,
                                            fontWeight: 600,
                                            fontSize: "0.875rem",
                                        }}
                                    >
                                        Most Loved
                                    </Box>
                                )}
                                <CardContent sx={{ p: 5 }}>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        sx={{
                                            mb: 1.5,
                                            fontWeight: 600,
                                            color: "primary.main",
                                        }}
                                    >
                                        {pkg.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="text.secondary"
                                        sx={{ mb: 4, lineHeight: 1.6 }}
                                    >
                                        {pkg.description}
                                    </Typography>
                                    <Box sx={{ textAlign: "center", mb: 4 }}>
                                        <Typography
                                            variant="h2"
                                            component="span"
                                            sx={{
                                                fontWeight: 600,
                                                color: "text.primary",
                                            }}
                                        >
                                            {pkg.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            color="text.secondary"
                                        >
                                            {pkg.period}
                                        </Typography>
                                    </Box>
                                    <List sx={{ mb: 4 }}>
                                        {pkg.features.map((feature, i) => (
                                            <ListItem
                                                key={i}
                                                disablePadding
                                                sx={{ mb: 1.5 }}
                                            >
                                                <ListItemIcon
                                                    sx={{ minWidth: 32 }}
                                                >
                                                    <CheckCircleOutlineIcon
                                                        sx={{
                                                            color: "primary.main",
                                                            fontSize: 22,
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        fontSize: "0.95rem",
                                                        fontWeight: 400,
                                                        color: "text.primary",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Button
                                        variant={
                                            pkg.featured
                                                ? "contained"
                                                : "outlined"
                                        }
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            py: 2,
                                            borderRadius: 8,
                                            fontWeight: 500,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {pkg.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
