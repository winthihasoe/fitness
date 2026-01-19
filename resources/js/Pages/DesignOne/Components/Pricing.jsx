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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const pricingPlans = [
    {
        name: "Basic",
        price: "$49",
        period: "/month",
        description: "Perfect for beginners starting their fitness journey",
        features: [
            "Gym access 7 days a week",
            "Free fitness assessment",
            "Access to cardio equipment",
            "Access to weight room",
            "Locker room access",
        ],
        buttonText: "Get Started",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$89",
        period: "/month",
        description: "For serious athletes ready to level up",
        features: [
            "Everything in Basic",
            "24/7 gym access",
            "4 personal training sessions/month",
            "All group classes included",
            "Nutrition consultation",
            "Free gym merchandise",
        ],
        buttonText: "Most Popular",
        highlighted: true,
    },
    {
        name: "Elite",
        price: "$149",
        period: "/month",
        description: "Ultimate package for peak performance",
        features: [
            "Everything in Pro",
            "Unlimited personal training",
            "Priority class booking",
            "Private locker",
            "Guest privileges (2/month)",
            "Monthly body composition analysis",
            "Supplement discounts",
        ],
        buttonText: "Go Elite",
        highlighted: false,
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
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    MEMBERSHIP PLANS
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Choose the plan that fits your goals. All plans include
                    access to our world-class facility.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {pricingPlans.map((plan, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: plan.highlighted
                                        ? "primary.main"
                                        : "background.paper",
                                    position: "relative",
                                    border: plan.highlighted
                                        ? "3px solid"
                                        : "1px solid",
                                    borderColor: plan.highlighted
                                        ? "secondary.main"
                                        : "divider",
                                    transform: plan.highlighted
                                        ? "scale(1.05)"
                                        : "scale(1)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: plan.highlighted
                                            ? "scale(1.08)"
                                            : "scale(1.03)",
                                    },
                                }}
                            >
                                {plan.highlighted && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: -15,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            backgroundColor: "secondary.main",
                                            color: "black",
                                            px: 3,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontWeight: 700,
                                            fontSize: "0.875rem",
                                        }}
                                    >
                                        BEST VALUE
                                    </Box>
                                )}
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 800,
                                            color: plan.highlighted
                                                ? "black"
                                                : "text.primary",
                                        }}
                                    >
                                        {plan.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        sx={{
                                            mb: 3,
                                            color: plan.highlighted
                                                ? "rgba(0,0,0,0.7)"
                                                : "text.secondary",
                                        }}
                                    >
                                        {plan.description}
                                    </Typography>
                                    <Box sx={{ textAlign: "center", mb: 3 }}>
                                        <Typography
                                            variant="h2"
                                            component="span"
                                            sx={{
                                                fontWeight: 900,
                                                color: plan.highlighted
                                                    ? "black"
                                                    : "primary.main",
                                            }}
                                        >
                                            {plan.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            sx={{
                                                color: plan.highlighted
                                                    ? "rgba(0,0,0,0.6)"
                                                    : "text.secondary",
                                            }}
                                        >
                                            {plan.period}
                                        </Typography>
                                    </Box>
                                    <List sx={{ mb: 3 }}>
                                        {plan.features.map((feature, i) => (
                                            <ListItem
                                                key={i}
                                                disablePadding
                                                sx={{ mb: 1 }}
                                            >
                                                <ListItemIcon
                                                    sx={{ minWidth: 36 }}
                                                >
                                                    <CheckCircleIcon
                                                        sx={{
                                                            color: plan.highlighted
                                                                ? "black"
                                                                : "secondary.main",
                                                            fontSize: 20,
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        fontSize: "0.95rem",
                                                        color: plan.highlighted
                                                            ? "black"
                                                            : "text.primary",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Button
                                        variant={
                                            plan.highlighted
                                                ? "contained"
                                                : "outlined"
                                        }
                                        color={
                                            plan.highlighted
                                                ? "secondary"
                                                : "primary"
                                        }
                                        fullWidth
                                        size="large"
                                        sx={{
                                            py: 1.5,
                                            fontWeight: 700,
                                            ...(plan.highlighted && {
                                                color: "black",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "secondary.dark",
                                                },
                                            }),
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
