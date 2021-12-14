import React, {useEffect} from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Home.css";
import Container from '@mui/material/Container';
import CarouselComponent from "../../components/carousel/CarouselComponent";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

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
                        <CarouselComponent />
                    </Box>
                </Grid>
                








                <Grid item xs={12}>
                    <Box padding={5}>
<<<<<<< HEAD
                        <Typography variant="h3" align="center" id="sus-titulo">O que é sustentabilizar?</Typography>
=======
                        <Typography variant="h3" align="center" className="sus-titulo">SUSTENTABILIZE</Typography>
>>>>>>> 9559ec46835bd2237b62fbecafe1602337e85412
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <Box className="fontes">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box className="fontes">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box className="fontes">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                        <Box className="fontes">
                            <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box className="fontes">
                    <Typography variant="h5" align="center" color="primary">O que é sustentabilizar?</Typography>
                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid3, page3">
                <Box className="fontes">
                    <Typography variant="h5" align="center" color="primary">QUEM SOMOS?</Typography>
                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid4, page4">
                <Box className="fontes">
                    <Typography variant="h5" align="center" color="primary">QUEM SOMOS?</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Home;