import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Rating,
    Chip,
} from "@mui/material";

const testimonials = [
    {
        name: "Sophie Anderson",
        role: "Yoga Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        rating: 5,
        text: "FlowFit has been life-changing! The yoga classes helped me find balance both physically and mentally. The instructors are phenomenal.",
        color: "#6366F1",
        achievement: "-20 lbs",
    },
    {
        name: "Ryan Mitchell",
        role: "Cycling Fan",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        rating: 5,
        text: "The spin classes are incredible! High energy, great music, and Marcus is an amazing instructor. I've never been in better shape.",
        color: "#EC4899",
        achievement: "6 months member",
    },
    {
        name: "Emily Rodriguez",
        role: "Pilates Student",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
        rating: 5,
        text: "After a back injury, Sarah's pilates classes helped me rebuild my core strength. I'm pain-free and stronger than ever!",
        color: "#8B5CF6",
        achievement: "Recovered",
    },
    {
        name: "Marcus Johnson",
        role: "Dance Cardio Regular",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
        rating: 5,
        text: "I never thought fitness could be this fun! Carlos makes every dance cardio class a party. Lost 30 pounds and gained confidence.",
        color: "#F59E0B",
        achievement: "-30 lbs",
    },
    {
        name: "Olivia Thompson",
        role: "Wellness Journey",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
        rating: 5,
        text: "The community at FlowFit is unmatched. Everyone is supportive and the variety of classes keeps me motivated every single day.",
        color: "#10B981",
        achievement: "1 year member",
    },
    {
        name: "Jordan Lee",
        role: "HIIT Warrior",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
        rating: 5,
        text: "The HIIT classes are no joke! Jake pushes you to your limits but the results speak for themselves. Best shape of my life at 45.",
        color: "#EF4444",
        achievement: "Transformed",
    },
];

export default function Testimonials() {
    return (
        <Box
            id="testimonials"
            sx={{ py: 10, backgroundColor: "background.paper" }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "text.primary" }}
                >
                    Member Success Stories
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Real people, real results. Hear from our amazing community.
                </Typography>
                <Grid container spacing={3}>
                    {testimonials.map((testimonial, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    position: "relative",
                                    overflow: "visible",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: `0 12px 32px ${testimonial.color}30`,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        right: 20,
                                    }}
                                >
                                    <Chip
                                        label={testimonial.achievement}
                                        sx={{
                                            backgroundColor: testimonial.color,
                                            color: "white",
                                            fontWeight: 700,
                                            boxShadow: `0 4px 12px ${testimonial.color}40`,
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 3, pt: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            mb: 3,
                                        }}
                                    >
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                border: "3px solid",
                                                borderColor: testimonial.color,
                                            }}
                                        />
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{
                                                    display: "block",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {testimonial.role}
                                            </Typography>
                                            <Rating
                                                value={testimonial.rating}
                                                readOnly
                                                size="small"
                                            />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.7,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
