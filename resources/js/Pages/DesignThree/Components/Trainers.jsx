import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Chip,
} from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const guides = [
    {
        name: "Aria Moonlight",
        specialty: "Yoga & Meditation Guide",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        certifications: ["E-RYT 500", "Mindfulness Teacher"],
        philosophy:
            "Bringing ancient wisdom into modern practice for holistic healing.",
        experience: "15 Years",
    },
    {
        name: "River Chen",
        specialty: "Tai Chi Master",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&q=80",
        certifications: ["Tai Chi Master", "Qigong Healer"],
        philosophy: "Flow like water, find strength in gentleness and grace.",
        experience: "20 Years",
    },
    {
        name: "Luna Sage",
        specialty: "Breathwork Facilitator",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
        certifications: ["Pranayama Expert", "Holistic Coach"],
        philosophy:
            "Breath is the bridge between body and soul, connecting all aspects of being.",
        experience: "12 Years",
    },
    {
        name: "Oak Thompson",
        specialty: "Nature Therapy Guide",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
        certifications: ["Eco Therapist", "Wilderness Guide"],
        philosophy:
            "Nature is the greatest teacher. We heal when we remember our connection to Earth.",
        experience: "18 Years",
    },
];

export default function Trainers() {
    return (
        <Box
            id="trainers"
            sx={{ py: 12, backgroundColor: "background.default" }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    Your Wellness Guides
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 8, maxWidth: 700, mx: "auto", fontWeight: 400 }}
                >
                    Compassionate practitioners devoted to supporting your
                    journey toward wholeness.
                </Typography>
                <Grid container spacing={4}>
                    {guides.map((guide, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 6,
                                    border: "2px solid",
                                    borderColor: "divider",
                                    boxShadow: "none",
                                    overflow: "visible",
                                    position: "relative",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        borderColor: "primary.main",
                                        boxShadow:
                                            "0 8px 24px rgba(5, 150, 105, 0.15)",
                                    },
                                }}
                            >
                                <Box sx={{ textAlign: "center", pt: 4 }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "inline-block",
                                        }}
                                    >
                                        <Avatar
                                            src={guide.image}
                                            alt={guide.name}
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                mx: "auto",
                                                border: "4px solid",
                                                borderColor:
                                                    "background.default",
                                                boxShadow:
                                                    "0 4px 16px rgba(0,0,0,0.1)",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                backgroundColor: "primary.main",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "3px solid white",
                                            }}
                                        >
                                            <LocalFloristIcon
                                                sx={{
                                                    color: "white",
                                                    fontSize: 20,
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <CardContent sx={{ textAlign: "center", p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ mb: 1, fontWeight: 600 }}
                                    >
                                        {guide.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 500,
                                            color: "primary.main",
                                        }}
                                    >
                                        {guide.specialty}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        "{guide.philosophy}"
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 0.5,
                                            mb: 2,
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {guide.certifications.map((cert, i) => (
                                            <Chip
                                                key={i}
                                                label={cert}
                                                size="small"
                                                sx={{
                                                    backgroundColor:
                                                        "primary.light",
                                                    color: "white",
                                                    fontSize: "0.7rem",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                    <Chip
                                        label={`${guide.experience} Experience`}
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                        sx={{ fontWeight: 500 }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
