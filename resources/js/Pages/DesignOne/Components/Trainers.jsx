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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InstagramIcon from "@mui/icons-material/Instagram";

const trainers = [
    {
        name: 'Marcus "Tank" Johnson',
        specialty: "Strength & Conditioning",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
        certifications: ["NSCA-CSCS", "Olympic Lifting"],
        experience: "12 Years",
        instagram: "@tank_fitness",
    },
    {
        name: 'Sarah "Iron" Mitchell',
        specialty: "Powerlifting Coach",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
        certifications: ["IPF Coach", "Sports Nutrition"],
        experience: "8 Years",
        instagram: "@iron_sarah",
    },
    {
        name: 'Diego "Thunder" Rodriguez',
        specialty: "Boxing & MMA",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
        certifications: ["USA Boxing", "MMA Level 2"],
        experience: "15 Years",
        instagram: "@thunder_strikes",
    },
    {
        name: 'Alex "Beast" Chen',
        specialty: "HIIT & Functional Training",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
        certifications: ["NASM-PES", "CrossFit L2"],
        experience: "10 Years",
        instagram: "@beast_mode_alex",
    },
];

export default function Trainers() {
    return (
        <Box id="trainers" sx={{ py: 10, backgroundColor: "background.paper" }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    ELITE TRAINING STAFF
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Our world-class trainers are dedicated to helping you
                    achieve your fitness goals.
                </Typography>
                <Grid container spacing={4}>
                    {trainers.map((trainer, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "background.default",
                                    textAlign: "center",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box sx={{ p: 3 }}>
                                    <Avatar
                                        src={trainer.image}
                                        alt={trainer.name}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            mx: "auto",
                                            mb: 2,
                                            border: "4px solid",
                                            borderColor: "primary.main",
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{ mb: 1, fontWeight: 700 }}
                                    >
                                        {trainer.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary"
                                        sx={{ mb: 2, fontWeight: 600 }}
                                    >
                                        {trainer.specialty}
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
                                        {trainer.certifications.map(
                                            (cert, i) => (
                                                <Chip
                                                    key={i}
                                                    label={cert}
                                                    size="small"
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                            ),
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 1,
                                            mb: 1,
                                        }}
                                    >
                                        <EmojiEventsIcon
                                            sx={{ color: "primary.main" }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {trainer.experience} Experience
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 0.5,
                                        }}
                                    >
                                        <InstagramIcon
                                            sx={{
                                                fontSize: 16,
                                                color: "primary.main",
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {trainer.instagram}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
