import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const stories = [
    {
        name: "Maya Williams",
        journey: "Stress Recovery",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
        text: "After years of corporate burnout, Zenith Wellness helped me find peace again. The restorative yoga and meditation changed my relationship with stress completely.",
    },
    {
        name: "David Park",
        journey: "Chronic Pain Relief",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&q=80",
        text: "River's Tai Chi sessions eased my back pain better than any medication. I feel more mobile and energized than I have in a decade.",
    },
    {
        name: "Elena Rossi",
        journey: "Anxiety Management",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
        text: "Luna's breathwork circles taught me how to calm my anxious mind naturally. I finally feel in control of my emotions and responses.",
    },
    {
        name: "James Cooper",
        journey: "Life Transition",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80",
        text: "During a difficult life transition, the nature therapy walks with Oak reconnected me to myself. This place is truly a sanctuary.",
    },
    {
        name: "Sophie Martin",
        journey: "Holistic Healing",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80",
        text: "Zenith offers more than fitness - it's a complete wellness journey. I've never felt more balanced in body, mind, and spirit.",
    },
    {
        name: "Marcus Lee",
        journey: "Mindfulness Practice",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        text: "Aria's guided meditations transformed my daily life. I'm more present, patient, and grateful. This practice is invaluable.",
    },
];

export default function Testimonials() {
    return (
        <Box
            id="testimonials"
            sx={{ py: 12, backgroundColor: "background.default" }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    Healing Stories
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 8, maxWidth: 700, mx: "auto", fontWeight: 400 }}
                >
                    Journeys of transformation, resilience, and renewed
                    vitality.
                </Typography>
                <Grid container spacing={4}>
                    {stories.map((story, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 6,
                                    border: "2px solid",
                                    borderColor: "divider",
                                    boxShadow: "none",
                                    backgroundColor: "white",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        borderColor: "primary.light",
                                        boxShadow:
                                            "0 8px 24px rgba(5, 150, 105, 0.12)",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <FormatQuoteIcon
                                        sx={{
                                            fontSize: 40,
                                            color: "primary.light",
                                            opacity: 0.4,
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 4,
                                            lineHeight: 1.8,
                                            fontStyle: "italic",
                                            color: "text.primary",
                                        }}
                                    >
                                        {story.text}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                        }}
                                    >
                                        <Avatar
                                            src={story.image}
                                            alt={story.name}
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                border: "3px solid",
                                                borderColor: "primary.light",
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: "text.primary",
                                                }}
                                            >
                                                {story.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "primary.main",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {story.journey}
                                            </Typography>
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
