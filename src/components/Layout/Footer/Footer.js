import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '50px 0px',
        backgroundColor: '#404B61',
        color: '#fff',
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
}));

const Footer = () => {
    const classes = useStyles();

    const d = new Date();
    let year = d.getFullYear();
  return (
    <div className={classes.footer}>
      <p>© Copyright Factory Four {year}</p>
    </div>
  );
};
export default Footer;