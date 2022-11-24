import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <div>
      
        {isLoggedIn ? (
     <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: '0',left: '0' ,marginTop: '30px' }} value={value} onChange={handleChange}>
     <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Tracker"
        value="trackers"
        icon={<FormatListBulletedIcon />}
      />
      <BottomNavigationAction
        label="Recipes"
        value="recipes"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
      />
          </BottomNavigation>
        ) : (
          <div>
          </div>
        )}
      
    </div>
  );
};

export default Navbar;
