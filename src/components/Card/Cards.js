import React from 'react'
import {Grid, Box} from "@material-ui/core/";
import CardContent from './CardContent';

const CardsContainer = (props) => {

    return (
      <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} >
            {/*Usign map to show every Card with their data*/}
                {Object.keys(props.data).map((item,i) => {
                    return (
                        <Grid key={i} item xs={6} md={2}>
                            <CardContent name={item} data={props.data[item]} />
                        </Grid>
                    );
                    })}
            </Grid>
      </Box>
    );
}

export default CardsContainer