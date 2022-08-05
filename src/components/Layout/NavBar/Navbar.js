import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        flexGrow: 1,
        position:'sticky',
        marginTop:'100px'
    },
    appBar: {
        backgroundColor: "#00BBE8",
        padding:'0px 20px',
    },
    logo: {
        fontSize:'24px',
        cursor:'pointer',
        textDecoration: 'none',
        color:'#fff',
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                        <a className={classes.logo} href="/">
                            Status Dashboard
                        </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar