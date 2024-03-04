import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode } from "react";

import "./style.css"

export type AppItemProps = {
    key: string
    text: string
    page: string
    icon: ReactNode
}

function AppItem(props: AppItemProps) {
  return (
    <ListItem disablePadding className="li">
      <ListItemButton component="a" href={props.page}>
        <ListItemIcon sx={{ color: "#cd2355" }}>{props.icon}</ListItemIcon>
        <ListItemText className="lit" primary={props.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default AppItem;
