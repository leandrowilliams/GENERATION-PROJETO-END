import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Home.css";
import Container from '@mui/material/Container';
import CarouselComponent from "../../components/carousel/CarouselComponent";


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid1, page">
                <Grid alignItems="center" item xs={12}>
                    <Box paddingTop={5}>

                        <Typography align="center" id="sus-titulo" >#Sustentabilizei </Typography>
                    </Box>
                </Grid>
                
                
                <Grid item xs={12}>
                    <Box className="carousel" paddingX="10%">
                        <CarouselComponent/>
                    </Box>
                </Grid>
                








                <Grid item xs={12}>
                    <Box padding={5}>
                        <Typography variant="h3" align="center" id="sus-titulo">O que é sustentabilizar?</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <Box className="card">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box className="card">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box className="card">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;