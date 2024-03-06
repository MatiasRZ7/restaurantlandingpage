import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Phone } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    }
    
  ];
  return (
    <nav>
      <div className='nav-logo-container'>
      <img src={Logo} alt=''/>
      </div>
      <div className='navbar-links-container'>
      <ScrollLink to="home" smooth={true}>Home</ScrollLink>
      <ScrollLink to="about" smooth={true}>About</ScrollLink>
      <ScrollLink to="testimonials" smooth={true}>Testimonial</ScrollLink>
      <ScrollLink to="contact" smooth={true}>Contact</ScrollLink>
      <a href="">
        <BsCart2 className='navbar-cart-icon'/>
      </a>
      <button className='primary-button'>
        Book Now
      </button>
      </div>
      <div className='navbar-menu-container'>
      <HiOutlineBars3
        onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer
  anchor="right"
  open={openMenu}
  onClose={() => setOpenMenu(false)}
>
  <Box
    sx={{width: 250 }}
    role="presentation"
    onClick={() => setOpenMenu(false)}
    onKeyDown={() => setOpenMenu(false)}
  >
    <List>
      {menuOptions.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ScrollLink to={item.text.toLowerCase()} smooth={true} style={{ width: '100%', display: 'flex' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ScrollLink>
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>
    </nav>
  )
}

export default Navbar