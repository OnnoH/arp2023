import { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { IconButton, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import TestimonialIcon from '@mui/icons-material/RecordVoiceOver';
import HomeIcon from "@mui/icons-material/Home"
import ManifestoIcon from "@mui/icons-material/MenuBook"
import ContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ChapterIcon from '@mui/icons-material/People';
import MeetupIcon from '@mui/icons-material/Groups';
import RentakitIcon from '@mui/icons-material/HomeRepairService';
import ProjectsIcon from '@mui/icons-material/DeveloperBoard';
import AppItem from "../AppItem";
import List from "@mui/material/List";

import "./style.css";
import AppRouter from "../AppRouter";
import AppFooter from "../AppFooter";

const items = [
  { key: "1", text: "About", page: "/", icon: <HomeIcon /> },
  { key: "2", text: "Manifesto", page: "/manifesto", icon: <ManifestoIcon /> },
  { key: "3", text: "Testimonials", page: "/testimonials", icon: <TestimonialIcon /> },
  { key: "4", text: "Chapters", page: "/chapters", icon: <ChapterIcon /> },
  { key: "5", text: "Projects", page: "/projects", icon: <ProjectsIcon /> },
  { key: "6", text: "Meetups", page: "/meetups", icon: <MeetupIcon /> },
  { key: "7", text: "Rent-A-Kit", page: "rentakit", icon: <RentakitIcon /> },
  { key: "8", text: "Contact", page: "/contact", icon: <ContactIcon /> },
];

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: "#00979d",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#00979d",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AppHeader() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Router>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Arduino Raspberry Pi Meetup Club
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon
                    sx={{ background: "#00979d", color: "white" }}
                  />
                ) : (
                  <ChevronLeftIcon
                    sx={{ background: "#00979d", color: "white" }}
                  />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {items.map((item) => (
                <AppItem {...item} />
              ))}
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <br />
            <br />
            <AppRouter />
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default AppHeader;
