import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Paper,
    AppBar,
    Toolbar,
    Button,
    Avatar,
    Chip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "@inertiajs/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";

// Mock data for members
const membersData = [
    {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        membership: "Pro",
        status: "Active",
        joinDate: "2024-01-15",
        lastVisit: "2026-01-18",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@example.com",
        membership: "Elite",
        status: "Active",
        joinDate: "2023-11-20",
        lastVisit: "2026-01-19",
    },
    {
        id: 3,
        name: "Mike Wilson",
        email: "mike@example.com",
        membership: "Basic",
        status: "Active",
        joinDate: "2025-06-10",
        lastVisit: "2026-01-17",
    },
    {
        id: 4,
        name: "Emma Davis",
        email: "emma@example.com",
        membership: "Premium",
        status: "Active",
        joinDate: "2024-08-05",
        lastVisit: "2026-01-19",
    },
    {
        id: 5,
        name: "James Brown",
        email: "james@example.com",
        membership: "Pro",
        status: "Inactive",
        joinDate: "2024-03-12",
        lastVisit: "2025-12-20",
    },
    {
        id: 6,
        name: "Lisa Anderson",
        email: "lisa@example.com",
        membership: "Elite",
        status: "Active",
        joinDate: "2023-09-18",
        lastVisit: "2026-01-18",
    },
    {
        id: 7,
        name: "David Martinez",
        email: "david@example.com",
        membership: "Basic",
        status: "Active",
        joinDate: "2025-10-22",
        lastVisit: "2026-01-16",
    },
    {
        id: 8,
        name: "Jessica Taylor",
        email: "jessica@example.com",
        membership: "Ultimate",
        status: "Active",
        joinDate: "2024-05-30",
        lastVisit: "2026-01-19",
    },
];

// Mock data for classes
const classesData = [
    {
        id: 1,
        className: "Morning Yoga",
        instructor: "Emma Stone",
        schedule: "Mon, Wed, Fri - 6:00 AM",
        capacity: 20,
        enrolled: 18,
        status: "Active",
    },
    {
        id: 2,
        className: "HIIT Blast",
        instructor: "Jake Wilson",
        schedule: "Tue, Thu - 7:00 AM",
        capacity: 16,
        enrolled: 16,
        status: "Full",
    },
    {
        id: 3,
        className: "Spin Cycle",
        instructor: "Marcus Lee",
        schedule: "Mon-Fri - 5:30 PM",
        capacity: 25,
        enrolled: 22,
        status: "Active",
    },
    {
        id: 4,
        className: "Pilates Core",
        instructor: "Sarah Chen",
        schedule: "Wed, Sat - 10:00 AM",
        capacity: 15,
        enrolled: 12,
        status: "Active",
    },
    {
        id: 5,
        className: "Boxing",
        instructor: "Diego Rodriguez",
        schedule: "Tue, Thu - 6:00 PM",
        capacity: 20,
        enrolled: 19,
        status: "Active",
    },
    {
        id: 6,
        className: "Meditation",
        instructor: "Aria Moonlight",
        schedule: "Daily - 7:00 AM",
        capacity: 30,
        enrolled: 25,
        status: "Active",
    },
];

const memberColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "membership", headerName: "Plan", width: 120 },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value}
                color={params.value === "Active" ? "success" : "default"}
                size="small"
            />
        ),
    },
    { field: "joinDate", headerName: "Join Date", width: 130 },
    { field: "lastVisit", headerName: "Last Visit", width: 130 },
];

const classColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "className", headerName: "Class Name", width: 180 },
    { field: "instructor", headerName: "Instructor", width: 160 },
    { field: "schedule", headerName: "Schedule", width: 200 },
    { field: "capacity", headerName: "Capacity", width: 100 },
    { field: "enrolled", headerName: "Enrolled", width: 100 },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value}
                color={params.value === "Full" ? "error" : "success"}
                size="small"
            />
        ),
    },
];

export default function Admin() {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
            {/* Header */}
            <AppBar position="static" sx={{ backgroundColor: "#1E293B" }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <DashboardIcon sx={{ fontSize: 32 }} />
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Fitness Center Admin
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                            }}
                        >
                            <Link href="/">
                                <Button
                                    variant="outlined"
                                    startIcon={<HomeIcon />}
                                    sx={{
                                        borderColor: "white",
                                        color: "white",
                                        "&:hover": {
                                            borderColor: "white",
                                            backgroundColor:
                                                "rgba(255,255,255,0.1)",
                                        },
                                    }}
                                >
                                    Back to Home
                                </Button>
                            </Link>
                            <Avatar sx={{ bgcolor: "#3B82F6" }}>AD</Avatar>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container maxWidth="xl" sx={{ py: 4 }}>
                {/* Stats Cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                    >
                                        Total Members
                                    </Typography>
                                    <PeopleIcon
                                        sx={{ fontSize: 40, color: "#3B82F6" }}
                                    />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, color: "#1E293B" }}
                                >
                                    847
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        mt: 1,
                                    }}
                                >
                                    <TrendingUpIcon
                                        sx={{ fontSize: 16, color: "#10B981" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#10B981",
                                            fontWeight: 600,
                                        }}
                                    >
                                        +12% from last month
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                    >
                                        Active Classes
                                    </Typography>
                                    <FitnessCenterIcon
                                        sx={{ fontSize: 40, color: "#EC4899" }}
                                    />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, color: "#1E293B" }}
                                >
                                    42
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        mt: 1,
                                    }}
                                >
                                    <TrendingUpIcon
                                        sx={{ fontSize: 16, color: "#10B981" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#10B981",
                                            fontWeight: 600,
                                        }}
                                    >
                                        +3 new this week
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                    >
                                        Monthly Revenue
                                    </Typography>
                                    <AttachMoneyIcon
                                        sx={{ fontSize: 40, color: "#10B981" }}
                                    />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, color: "#1E293B" }}
                                >
                                    $89.2K
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        mt: 1,
                                    }}
                                >
                                    <TrendingUpIcon
                                        sx={{ fontSize: 16, color: "#10B981" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#10B981",
                                            fontWeight: 600,
                                        }}
                                    >
                                        +18% from last month
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                    >
                                        Avg Attendance
                                    </Typography>
                                    <TrendingUpIcon
                                        sx={{ fontSize: 40, color: "#F59E0B" }}
                                    />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, color: "#1E293B" }}
                                >
                                    87%
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        mt: 1,
                                    }}
                                >
                                    <TrendingUpIcon
                                        sx={{ fontSize: 16, color: "#10B981" }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#10B981",
                                            fontWeight: 600,
                                        }}
                                    >
                                        +5% improvement
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Members Table */}
                <Paper sx={{ p: 3, mb: 4, borderRadius: 3, boxShadow: 2 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                        Member Management
                    </Typography>
                    <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={membersData}
                            columns={memberColumns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{
                                border: "none",
                                "& .MuiDataGrid-cell:hover": {
                                    color: "primary.main",
                                },
                            }}
                        />
                    </Box>
                </Paper>

                {/* Classes Table */}
                <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                        Class Schedule & Enrollment
                    </Typography>
                    <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={classesData}
                            columns={classColumns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{
                                border: "none",
                                "& .MuiDataGrid-cell:hover": {
                                    color: "primary.main",
                                },
                            }}
                        />
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
