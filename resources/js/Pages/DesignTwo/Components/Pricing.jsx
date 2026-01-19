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
    Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

const pricingPlans = [
    {
        name: "Starter",
        price: "$59",
        period: "/month",
        description: "Perfect for beginners exploring fitness",
        color: "#6366F1",
        features: [
            "Access to all facilities",
            "10 group classes per month",
            "Locker room & showers",
            "Fitness app access",
            "Community events",
        ],
        buttonText: "Get Started",
        popular: false,
    },
    {
        name: "Premium",
        price: "$99",
        period: "/month",
        description: "Most popular choice for committed members",
        color: "#EC4899",
        features: [
            "Everything in Starter",
            "Unlimited group classes",
            "2 personal training sessions",
            "Nutrition consultation",
            "Guest pass (1 per month)",
            "Priority class booking",
        ],
        buttonText: "Join Premium",
        popular: true,
    },
    {
        name: "Ultimate",
        price: "$159",
        period: "/month",
        description: "Complete wellness experience",
        color: "#8B5CF6",
        features: [
            "Everything in Premium",
            "Unlimited personal training",
            "Spa & recovery lounge",
            "Monthly wellness coaching",
            "Guest passes (unlimited)",
            "VIP events access",
            "Supplement discounts",
        ],
        buttonText: "Go Ultimate",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <Box
            id="pricing"
            sx={{ py: 10, backgroundColor: "background.default" }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "text.primary" }}
                >
                    Choose Your Path
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Flexible memberships designed to fit your lifestyle and
                    budget.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {pricingPlans.map((plan, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    position: "relative",
                                    boxShadow: plan.popular
                                        ? "0 20px 60px rgba(236, 72, 153, 0.25)"
                                        : "0 4px 20px rgba(0,0,0,0.08)",
                                    transform: plan.popular
                                        ? "scale(1.05)"
                                        : "scale(1)",
                                    border: plan.popular
                                        ? "3px solid"
                                        : "2px solid transparent",
                                    borderColor: plan.popular
                                        ? plan.color
                                        : "transparent",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: plan.popular
                                            ? "scale(1.08)"
                                            : "scale(1.03)",
                                        boxShadow: `0 20px 60px ${plan.color}40`,
                                    },
                                }}
                            >
                                {plan.popular && (
                                    <Chip
                                        icon={<StarIcon />}
                                        label="Most Popular"
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            backgroundColor: plan.color,
                                            color: "white",
                                            fontWeight: 700,
                                        }}
                                    />
                                )}
                                <Box
                                    sx={{
                                        height: 6,
                                        background: `linear-gradient(90deg, ${plan.color} 0%, ${plan.color}dd 100%)`,
                                    }}
                                />
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 700,
                                            color: plan.color,
                                        }}
                                    >
                                        {plan.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="text.secondary"
                                        sx={{ mb: 3 }}
                                    >
                                        {plan.description}
                                    </Typography>
                                    <Box sx={{ textAlign: "center", mb: 4 }}>
                                        <Typography
                                            variant="h2"
                                            component="span"
                                            sx={{
                                                fontWeight: 700,
                                                color: "text.primary",
                                            }}
                                        >
                                            {plan.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            color="text.secondary"
                                        >
                                            {plan.period}
                                        </Typography>
                                    </Box>
                                    <List sx={{ mb: 3 }}>
                                        {plan.features.map((feature, i) => (
                                            <ListItem
                                                key={i}
                                                disablePadding
                                                sx={{ mb: 1.5 }}
                                            >
                                                <ListItemIcon
                                                    sx={{ minWidth: 32 }}
                                                >
                                                    <CheckCircleIcon
                                                        sx={{
                                                            color: plan.color,
                                                            fontSize: 22,
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        fontSize: "0.95rem",
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            py: 1.5,
                                            borderRadius: 3,
                                            backgroundColor: plan.color,
                                            fontWeight: 600,
                                            fontSize: "1rem",
                                            "&:hover": {
                                                backgroundColor: `${plan.color}dd`,
                                            },
                                        }}
                                    >
                                        {plan.buttonText}
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
