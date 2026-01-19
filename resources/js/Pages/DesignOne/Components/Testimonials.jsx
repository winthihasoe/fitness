import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
    {
        name: "Mike Peterson",
        role: "Lost 45 lbs in 6 months",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        rating: 5,
        text: "Iron Temple changed my life. The trainers pushed me beyond limits I didn't know I had. Best investment I've ever made in myself.",
    },
    {
        name: "Jessica Martinez",
        role: "Competitive Powerlifter",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        rating: 5,
        text: "The powerlifting program here is world-class. I've increased my total by 200 lbs and qualified for nationals. These coaches know their stuff.",
    },
    {
        name: "James Williams",
        role: "Marathon Runner",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        rating: 5,
        text: "Not just for bodybuilders! The HIIT and conditioning classes helped me shave 15 minutes off my marathon time. Incredible facility.",
    },
    {
        name: "Sarah Thompson",
        role: "Busy Mom of 3",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        rating: 5,
        text: "The 24/7 access is perfect for my schedule. I can work out at 5 AM before the kids wake up. Finally found a gym that works for my life.",
    },
    {
        name: "David Chen",
        role: "Former Athlete",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
        rating: 5,
        text: "After years away from serious training, Iron Temple got me back in championship shape. The equipment is top-notch and the community is motivating.",
    },
    {
        name: "Amanda Rodriguez",
        role: "CrossFit Enthusiast",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
        rating: 5,
        text: "Best gym I've ever trained at. The functional training area is massive and the coaching is personalized. Worth every penny.",
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
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    SUCCESS STORIES
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Real transformations from real people. Join hundreds of
                    members achieving their goals.
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "background.default",
                                    position: "relative",
                                    "&:hover": {
                                        boxShadow:
                                            "0 8px 16px rgba(255, 107, 53, 0.2)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <FormatQuoteIcon
                                        sx={{
                                            fontSize: 48,
                                            color: "primary.main",
                                            opacity: 0.3,
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.7,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 700 }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {testimonial.role}
                                            </Typography>
                                            <Box sx={{ mt: 0.5 }}>
                                                <Rating
                                                    value={testimonial.rating}
                                                    readOnly
                                                    size="small"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
