import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
// import "../assets/css/dropdown.css";
import "../assets/css/user.css"
import userIcon from "../assets/icons/user.png"
import editIcon from "../assets/icons/edit.png";
import userProfile from "../assets/icons/userprofile.jpg"
import logoutIcon from "../assets/icons/logout.png"
import {Link} from 'react-router-dom'

const Header1 = () => {

   const [state, setState] = React.useState({
     top: false,
     left: false,
     bottom: false,
     right: false,
   });

   const menuToggle=() =>{
     const toggleMenu = document.querySelector(".menu");
     toggleMenu.classList.toggle("active");
   }
   
   const toggleDrawer = (anchor, open) => (event) => {
     if (
       event.type === "keydown" &&
       (event.key === "Tab" || event.key === "Shift")
     ) {
       return;
     }

     setState({ ...state, [anchor]: open });
   };

   const list = (anchor) => (
     <Box
       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
       role="presentation"
       onClick={toggleDrawer(anchor, false)}
       onKeyDown={toggleDrawer(anchor, false)}
     >
       <List>
         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
           <ListItem button key={text}>
             <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItem>
         ))}
       </List>
       <Divider />
       <List>
         {["All mail", "Trash", "Spam"].map((text, index) => (
           <ListItem button key={text}>
             <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItem>
         ))}
       </List>
     </Box>
   );

  return (
    <div className="header1">
      <div className="header1-icon">
        <div>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <AppsIcon />
                <div className="hub-heading">
                  <h2>Loblaws Supplychain Hub</h2>
                </div>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="dropdown-login">
        <div className="action">
          <div className="profile" onClick={menuToggle}>
            <img src={userProfile} alt="profile" />
          </div>
          <div className="menu">
            <h3>
              <b>Jane Smith</b>
              <br></br> <span>Operations Manager</span>
            </h3>
            <ul>
              <li>
                <img src={userIcon} alt="user"></img>
                 <Link className="linkMain" to="/login">
                  Login
                </Link>
                {/* <a href="http://www.google.com">Login</a> */}
              </li>
              <li>
                <img src={editIcon} alt="edit"></img>
                <Link className="linkMain" to="/edit-profile">
                  Edit profile
                </Link>
              </li>
              <li>
                <img src={logoutIcon} alt="logout"></img>
                <Link className="linkMain" to="/">
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1