import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { orange } from "@mui/material/colors";

export default function AppNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { route, signOut, user } = useAuthenticator((context) => [
    context.route,
    context.signOut,
    context.user,
  ]);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    // { name: "lobby", path: "/lobby/1" },
    // { name: "Game", path: "/game/1" },
    { name: "Home", path: "/" },
  ];

  function logOut() {
    signOut();
    navigate("/login");
  }
  return (
      <AppBar position="static" sx={{height:'4vh'}}>
        <Toolbar style={{height:'100%', minHeight:'0'}}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Typography> Logged in as {user.attributes?.email}</Typography>
          <Button onClick={() => logOut()}>
            <LogoutIcon htmlColor={"orange"} />
          </Button>
        </Toolbar>
      </AppBar>
  );
}
