import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
  card: {
    minHeight: "180px",
    width: '100%',
    boxShadow: '0px 0px 10px 0px rgba(44, 44, 44, 0.2)',
    height:'280px',
    padding:'5px',
  },
  serviceName: {
    fontSize: '24px',
    fontWeight:'bold',
    textAlign: 'center',
    color:'#4D4D4D'
  },
  statusBox: {
    display:'flex',
    textAlign:'center',
    borderRadius:'5px',
    padding:'1px',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize:'16px',
  },
  span: {
    fontWeight: 'bold'
  }
});

// Display time HH/MM/SS
function FormattedTime(time) {
  let date = new Date(time);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime;
}

const CardContent = (props) => {

  const classes = useStyles();

// Data
  let hostname = '';
  let errorStatus = '';
  let errorMsg = '';
  let serviceName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  let timestamp = '';
  let status = 'Waiting...';
  let bgColor = '#404B61';
  let textColor = '#fff';


  if (props.data.message !== undefined) {

    if (props.data.message.includes("Healthy")) {
        status = "Healthy";
        bgColor = "#BDFEA6";
        textColor = "#2CA800"
        hostname = props.data.hostname;
        timestamp = FormattedTime(props.data.time);

    } else {

      if(props.data.error !== undefined){
          errorStatus = props.data.error.status;
          errorMsg = props.data.error.statusText;
          bgColor = '#FFDADA'
          textColor = "#D50000"
          status = 'Error'
      }
    }
  }

  return (
    
    <Card className={classes.card} variant="outlined">
      <div>
        {status === "Error" ? (
          <div>
              <h3 className={classes.serviceName}>
              {serviceName}
            </h3>
            <div className={classes.statusBox} style={{backgroundColor:bgColor, color: textColor}}>
              <p>{status}</p>
              <CloseIcon sx={{ fontSize: 22, color: '#D50000' }}/>
            </div>
            <p style={{ color: "Red" }}>
              OUTAGE
            </p>
            <p style={{ color: "Red" }} >
              <span className={classes.span}>Status Code: </span>{errorStatus}
            </p>
            <p style={{ color: "Red" }}>
              <span className={classes.span}>Message: </span>{errorMsg}
            </p>
          </div>
        ) : (
          <div>
                <h3 className={classes.serviceName}>
                {serviceName}
              </h3>
              <div className={classes.statusBox} style={{backgroundColor:bgColor, color: textColor}}>
                <p>{status} </p>
                <CheckIcon sx={{ fontSize: 22, color: '#2CA800' }}/>
              </div>
              <p className={classes.text}>
                <span className={classes.span}>Host Name: </span>{hostname}
              </p>
              <p className={classes.text}>
                  <span className={classes.span}>Time: </span>{timestamp}
              </p>
          </div>
        )}
      </div>
    </Card>
  );
}

export default CardContent