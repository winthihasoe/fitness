import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
    Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const classes = [
    {
        name: "Yoga Flow",
        instructor: "Emma Stone",
        description:
            "Find balance and flexibility through mindful movement and breathing.",
        color: "#6366F1",
        icon: "🧘",
        duration: "60 min",
        level: "All Levels",
        spots: "12 spots",
    },
    {
        name: "Spin Cycle",
        instructor: "Marcus Lee",
        description:
            "High-energy cycling class with motivating music and dynamic intervals.",
        color: "#EC4899",
        icon: "🚴",
        duration: "45 min",
        level: "Intermediate",
        spots: "20 spots",
    },
    {
        name: "Pilates Core",
        instructor: "Sarah Chen",
        description:
            "Strengthen your core and improve posture with controlled movements.",
        color: "#8B5CF6",
        icon: "💪",
        duration: "50 min",
        level: "Beginner",
        spots: "15 spots",
    },
    {
        name: "Dance Cardio",
        instructor: "Carlos Rivera",
        description:
            "Burn calories while grooving to the latest hits in this fun cardio workout.",
        color: "#F59E0B",
        icon: "💃",
        duration: "45 min",
        level: "All Levels",
        spots: "25 spots",
    },
    {
        name: "Barre Fusion",
        instructor: "Lily Johnson",
        description:
            "Ballet-inspired workout combining strength, flexibility, and grace.",
        color: "#10B981",
        icon: "🩰",
        duration: "55 min",
        level: "Intermediate",
        spots: "18 spots",
    },
    {
        name: "HIIT Blast",
        instructor: "Jake Wilson",
        description:
            "Maximum results in minimum time with explosive interval training.",
        color: "#EF4444",
        icon: "⚡",
        duration: "30 min",
        level: "Advanced",
        spots: "16 spots",
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
                    sx={{ mb: 2, color: "text.primary" }}
                >
                    Our Classes
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
                >
                    From yoga to HIIT, we offer diverse classes for every
                    fitness level and goal.
                </Typography>
                <Grid container spacing={3}>
                    {classes.map((classItem, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    transition: "all 0.3s ease",
                                    border: "2px solid transparent",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 12px 32px rgba(0,0,0,0.12)",
                                        borderColor: classItem.color,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 120,
                                        background: `linear-gradient(135deg, ${classItem.color} 0%, ${classItem.color}dd 100%)`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "4rem",
                                    }}
                                >
                                    {classItem.icon}
                                </Box>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{ mb: 1, fontWeight: 600 }}
                                    >
                                        {classItem.name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                bgcolor: classItem.color,
                                            }}
                                        >
                                            <PersonIcon sx={{ fontSize: 16 }} />
                                        </Avatar>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {classItem.instructor}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.6 }}
                                    >
                                        {classItem.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Chip
                                            label={classItem.duration}
                                            size="small"
                                            sx={{
                                                backgroundColor:
                                                    "background.default",
                                            }}
                                        />
                                        <Chip
                                            label={classItem.level}
                                            size="small"
                                            sx={{
                                                backgroundColor:
                                                    classItem.color,
                                                color: "white",
                                            }}
                                        />
                                        <Chip
                                            icon={
                                                <CalendarTodayIcon
                                                    sx={{ fontSize: 14 }}
                                                />
                                            }
                                            label={classItem.spots}
                                            size="small"
                                            variant="outlined"
                                        />
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
