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
        icon: <InfoIcon fontSize="large"/>
    },
    {
        id:"skill",
        text: "Acerca de Mi",
        icon: <EmojiObjectsIcon fontSize="large"/>
    },
    {
        id:"work",
        text: "Trabajos",
        icon: <BuildTwoToneIcon fontSize="large"/>
    },
    {
        id:"contact",
        text: "Contactos",
        icon: <ContactMailTwoToneIcon fontSize="large"/>
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
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <IconButton  onClick={() => setOpen(false)}>
                <CancelIcon fontSize="large" className={classes.cancelicon}></CancelIcon>
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
                            offset={-70}>
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
        </Drawer>
        </>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#00BFA5",
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
     display: "none"
    },
    "& a": {
        color: "white",
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
        color: "#9297b3",
        position: "absolute",
        top: 0,
        right:10,
    }
},
cancelicon:{
    color: "#9297b3",
    position: "absolute",
    top: 0,
    right: 10
},
sidebar:{
    width:"40vh",
    [theme.breakpoints.down("sm")]:{
        width: "60vw"
    },
    " & h5":{
        margin: theme.spacing(7,0,0,4),
        fontSize: "1.4rem",
        color:"#333",
        fontWeight: "bold"
    },
"& h5:hover":{
    color: "#9297b3",
    cursor:"pointer"
}}
    

}))

export default Navbar