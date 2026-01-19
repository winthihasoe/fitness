import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Chip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const classes = [
    {
        name: "Beast Mode Strength",
        description:
            "Heavy compound lifts focused on building raw power and muscle mass.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
        duration: "60 min",
        intensity: "High",
        schedule: "Mon, Wed, Fri - 6:00 AM",
    },
    {
        name: "HIIT Inferno",
        description:
            "High-intensity interval training to torch calories and boost endurance.",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400&q=80",
        duration: "45 min",
        intensity: "Extreme",
        schedule: "Tue, Thu, Sat - 7:00 AM",
    },
    {
        name: "Olympic Lifting",
        description:
            "Master the snatch, clean & jerk with professional coaching.",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80",
        duration: "75 min",
        intensity: "Advanced",
        schedule: "Mon, Thu - 5:00 PM",
    },
    {
        name: "Fight Club Boxing",
        description:
            "Learn boxing techniques while getting an intense full-body workout.",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80",
        duration: "50 min",
        intensity: "High",
        schedule: "Tue, Fri - 6:30 PM",
    },
    {
        name: "Core Domination",
        description:
            "Targeted ab and core strengthening for stability and definition.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
        duration: "30 min",
        intensity: "Medium",
        schedule: "Daily - 12:00 PM",
    },
    {
        name: "Powerlifting Fundamentals",
        description:
            "Focus on the big three: squat, bench press, and deadlift.",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
        duration: "90 min",
        intensity: "High",
        schedule: "Wed, Sat - 4:00 PM",
    },
];

export default function Classes() {
    return (
        <Box
            id="classes"
            sx={{ py: 10, backgroundColor: "background.default" }}
        >
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    DOMINATE YOUR WORKOUT
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    Choose from our intense class lineup designed to push your
                    limits and deliver real results.
                </Typography>
                <Grid container spacing={4}>
                    {classes.map((classItem, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "background.paper",
                                    transition:
                                        "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 12px 24px rgba(255, 107, 53, 0.3)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={classItem.image}
                                    alt={classItem.name}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        sx={{ mb: 2, fontWeight: 700 }}
                                    >
                                        {classItem.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {classItem.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            mb: 2,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Chip
                                            icon={<AccessTimeIcon />}
                                            label={classItem.duration}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />
                                        <Chip
                                            icon={<LocalFireDepartmentIcon />}
                                            label={classItem.intensity}
                                            size="small"
                                            color="secondary"
                                        />
                                    </Box>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {classItem.schedule}
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
