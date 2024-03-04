import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AppItem from "../AppItem";

import "./style.css"

function AppDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const items = [
    { key: "1", text: "Home", page: "/", icon: <MenuIcon /> },
    { key: "2", text: "About", page: "/about", icon: <MailIcon /> },
    { key: "3", text: "Manifesto", page: "/manifesto", icon: <InboxIcon /> },
  ];

  const items2 = [
    { key: "4", text: "Chapters", page: "/chapters", icon: <MenuIcon /> },
    { key: "5", text: "Rent-A-Kit", page: "rentakit", icon: <MailIcon /> },
    { key: "6", text: "Contact", page: "/contact", icon: <InboxIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {items.map((item) => (
          <AppItem {...item} />
        ))}
      </List>
      <Divider />
      <List>
        {items2.map((item) => (
          <AppItem {...item} />
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default AppDrawer;
