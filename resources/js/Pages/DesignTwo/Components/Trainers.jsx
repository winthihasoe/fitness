import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Chip,
    Button,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const trainers = [
    {
        name: "Emma Stone",
        specialty: "Yoga & Mindfulness",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        certifications: ["RYT-500", "Meditation Coach"],
        bio: "Bringing zen and strength together for 10 years.",
        color: "#6366F1",
    },
    {
        name: "Marcus Lee",
        specialty: "Cycling Expert",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
        certifications: ["Spinning Cert", "Endurance Coach"],
        bio: "Former competitive cyclist with infectious energy.",
        color: "#EC4899",
    },
    {
        name: "Sarah Chen",
        specialty: "Pilates Master",
        image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80",
        certifications: ["PMA Certified", "Rehabilitation"],
        bio: "Specializing in injury recovery and core strength.",
        color: "#8B5CF6",
    },
    {
        name: "Carlos Rivera",
        specialty: "Dance & Cardio",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80",
        certifications: ["Dance Fitness", "Zumba Gold"],
        bio: "Making fitness fun through rhythm and movement.",
        color: "#F59E0B",
    },
];

export default function Trainers() {
    return (
        <Box id="trainers" sx={{ py: 10, backgroundColor: "background.paper" }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "text.primary" }}
                >
                    Meet Your Instructors
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Passionate professionals dedicated to helping you achieve
                    your wellness goals.
                </Typography>
                <Grid container spacing={4}>
                    {trainers.map((trainer, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-12px)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 80,
                                        background: `linear-gradient(135deg, ${trainer.color} 0%, ${trainer.color}dd 100%)`,
                                    }}
                                />
                                <Box sx={{ textAlign: "center", mt: -5 }}>
                                    <Avatar
                                        src={trainer.image}
                                        alt={trainer.name}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: "auto",
                                            border: "5px solid white",
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.15)",
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ textAlign: "center", p: 3 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 0.5,
                                            mb: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: 600 }}
                                        >
                                            {trainer.name}
                                        </Typography>
                                        <VerifiedIcon
                                            sx={{
                                                fontSize: 20,
                                                color: trainer.color,
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 600,
                                            color: trainer.color,
                                        }}
                                    >
                                        {trainer.specialty}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2, lineHeight: 1.6 }}
                                    >
                                        {trainer.bio}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 0.5,
                                            mb: 3,
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {trainer.certifications.map(
                                            (cert, i) => (
                                                <Chip
                                                    key={i}
                                                    label={cert}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: `${trainer.color}15`,
                                                        color: trainer.color,
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            ),
                                        )}
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderRadius: 2,
                                            borderColor: trainer.color,
                                            color: trainer.color,
                                            "&:hover": {
                                                borderColor: trainer.color,
                                                backgroundColor: `${trainer.color}10`,
                                            },
                                        }}
                                    >
                                        Book Session
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
