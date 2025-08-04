import { DeveloperMode, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  color: "white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((openMenu) => !openMenu);
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Caiko DEV
        </Typography>
        <DeveloperMode sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            sx={{ width: 30, height: 30 }}
            onClick={handleOpenMenu}
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant="span">Jerry Shmerry</Typography>
          <Avatar
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            sx={{ width: 30, height: 30 }}
            onClick={handleOpenMenu}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={handleOpenMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
