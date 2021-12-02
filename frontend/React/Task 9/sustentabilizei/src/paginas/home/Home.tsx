import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import "./Home.css";
import Container from '@mui/material/Container'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid1">
                <Grid alignItems="center" item xs={12}>
                    <Box paddingTop={5}>
                        <Typography variant="h2" align="center" color="primary">#Sustentabilizei</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" alignItems="center" justifyContent="center" padding={10}>
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={12}>
                    <Box padding={5}>
                        <Typography variant="h3" align="center" color="primary">O que é sustentabilizar?</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" padding={10}>
                        <Box padding={2}>
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box padding={2}>
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box padding={2}>
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;