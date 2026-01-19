import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Chip,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

const programs = [
    {
        name: "Restorative Yoga",
        description:
            "Gentle poses held for longer periods to promote deep relaxation and healing.",
        icon: <SelfImprovementIcon sx={{ fontSize: 48 }} />,
        duration: "75 min",
        intensity: "Gentle",
        benefits: ["Stress Relief", "Flexibility", "Peace"],
        color: "#059669",
    },
    {
        name: "Guided Meditation",
        description:
            "Journey inward with expert-led mindfulness and breath awareness practices.",
        icon: <SpaIcon sx={{ fontSize: 48 }} />,
        duration: "45 min",
        intensity: "Peaceful",
        benefits: ["Mental Clarity", "Calm Mind", "Focus"],
        color: "#0EA5E9",
    },
    {
        name: "Tai Chi Flow",
        description:
            "Ancient Chinese movement practice for balance, energy, and mindful motion.",
        icon: <AccessibilityNewIcon sx={{ fontSize: 48 }} />,
        duration: "60 min",
        intensity: "Gentle",
        benefits: ["Balance", "Energy Flow", "Harmony"],
        color: "#10B981",
    },
    {
        name: "Nature Walk Therapy",
        description:
            "Mindful outdoor walking sessions connecting with nature and fresh air.",
        icon: <NaturePeopleIcon sx={{ fontSize: 48 }} />,
        duration: "90 min",
        intensity: "Light",
        benefits: ["Fresh Air", "Connection", "Vitality"],
        color: "#059669",
    },
    {
        name: "Aqua Wellness",
        description:
            "Water-based gentle exercises and hydrotherapy for body restoration.",
        icon: <WaterDropIcon sx={{ fontSize: 48 }} />,
        duration: "50 min",
        intensity: "Gentle",
        benefits: ["Joint Health", "Relaxation", "Recovery"],
        color: "#0EA5E9",
    },
    {
        name: "Breathwork Circle",
        description:
            "Conscious breathing techniques to release tension and energize naturally.",
        icon: <AirIcon sx={{ fontSize: 48 }} />,
        duration: "40 min",
        intensity: "Moderate",
        benefits: ["Energy", "Detox", "Vitality"],
        color: "#10B981",
    },
];

export default function Classes() {
    return (
        <Box id="classes" sx={{ py: 12, backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ mb: 2, color: "primary.main" }}
                >
                    Wellness Programs
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 8, maxWidth: 700, mx: "auto", fontWeight: 400 }}
                >
                    Thoughtfully curated experiences designed to restore balance
                    and promote natural healing.
                </Typography>
                <Grid container spacing={4}>
                    {programs.map((program, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 6,
                                    border: "2px solid",
                                    borderColor: "divider",
                                    boxShadow: "none",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        borderColor: program.color,
                                        boxShadow: `0 8px 24px ${program.color}20`,
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 4,
                                            backgroundColor: `${program.color}15`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: program.color,
                                            mb: 3,
                                        }}
                                    >
                                        {program.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 600,
                                            color: "text.primary",
                                        }}
                                    >
                                        {program.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        {program.description}
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
                                            label={program.duration}
                                            size="small"
                                            sx={{
                                                backgroundColor: `${program.color}10`,
                                                color: program.color,
                                                fontWeight: 500,
                                            }}
                                        />
                                        <Chip
                                            label={program.intensity}
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                borderColor: program.color,
                                                color: program.color,
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 0.5,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {program.benefits.map((benefit, i) => (
                                            <Chip
                                                key={i}
                                                label={benefit}
                                                size="small"
                                                sx={{
                                                    backgroundColor:
                                                        "background.default",
                                                    fontSize: "0.75rem",
                                                }}
                                            />
                                        ))}
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
