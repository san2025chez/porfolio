import { AppBar, Toolbar, makeStyles,List, IconButton, Drawer, Divider, ListItem,ListItemIcon } from '@material-ui/core'
import React from 'react'
import {useState} from 'react';
import logo from "../img/logo.png";
import {Link, animateScroll as scroll} from "react-scroll"
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone'
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import MenuIcon from "@mui/icons-material/Menu"
import CancelIcon from "@mui/icons-material/Cancel"
const links =[

    {
        id:"about",
        text: "Inicio",
        icon: <InfoIcon fontSize="medium"/>
    },
    {
        id:"skill",
        text: "Acerca de Mi",
        icon: <EmojiObjectsIcon fontSize="medium"/>
    },
    {
        id:"work",
        text: "Trabajos",
        icon: <BuildTwoToneIcon fontSize="medium"/>
    },
    {
        id:"contact",
        text: "Contactos",
        icon: <ContactMailTwoToneIcon fontSize="medium"/>
    },
    
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
        <>
        <AppBar position='sticky' className={classes.root}>
            <Toolbar className='toolbar'>
            {/*     <img src={logo} className={classes.logo} alt="logo" /> */}
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            <Link key={index}
                            to={id}
                            spy={true}
                            activeClass ="active"
                            smooth={true}
                            duration={500}
                            offset={-70}>
                                {text}</Link>
                        ))
                    }
                </List>
                <IconButton  edge="end" 
                className={classes.menubutton}
                onClick={()=> setOpen(!open)}>
                <MenuIcon font size="large"/>

                </IconButton>
            
            </Toolbar>

        </AppBar>
        <Drawer style={{color:'red'}} anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={classes.sidebarWrapper}>
            <IconButton  onClick={() => setOpen(false)}>
                <CancelIcon fontSize="medium" className={classes.cancelicon}></CancelIcon>
            </IconButton>
            <Divider/>
            {
                        links.map(({id, text , icon}, index)=>(
                            <Link key={index}
                            className={classes.sidebar}
                            to={id}
                            spy={true}
                            onClick={() => setOpen(false)}
                            activeClass = "active"
                            smooth={true}
                            duration={500}
                            offset={70}>
                                <ListItem component="h5">
                                    <span>
                                        <ListItemIcon>
                                            {icon}
                                            </ListItemIcon>
                                    </span>{text}
                                </ListItem>
                                </Link>
                        ))
                    }
                    </div>
        </Drawer>
        </>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'#d2ede3',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999

    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:"red",

    },
    logo: {
        height: "4rem",
        objectFit: "contain",
        "&: hover": {
            cursor: "pointer"
        }}
,
menu:{
    [theme.breakpoints.down("sm")]:{
     display: "none",
 
    },
    "& a": {
     color:'#228c55',
             fontSize: "1.4rem",
        fontWeight:"bold",
        marginLeft: theme.spacing(3)
    },
    "& a:hover":{
        cursor: "pointer",
        color:"#9297b3",
        borderBottom: "3px solid #252a5c",
    }

},
menubutton:{
    display: "none",
    [theme.breakpoints.down("sm")]:{
        display: "block",
        color: "#00BFA5",
        position: "absolute",
        top: 0,
        right:10,
    }
},
cancelicon:{
    color: "#9297b3",
    position: "absolute",
    top: 0
    
},
sidebar:{
    width:"40vh",

    [theme.breakpoints.down("sm")]:{
        width: "60vw",
        backgroundColor:'#00BFA5'
    },
   
    " & h5":{
        margin: theme.spacing(2,0,0,4),
        fontSize: "1rem",
        color:"#333",
        fontWeight: "bold"
    },
  
"& h5:hover":{
    color: "#9297b3",
    cursor:"pointer"
}},
sidebarWrapper: {
    background: '#8fd3ba', // Set your desired background color (green in this case)
    minHeight: '100vh', // Ensure the sidebar has at least the height of the viewport


},
    

}))

export default Navbar