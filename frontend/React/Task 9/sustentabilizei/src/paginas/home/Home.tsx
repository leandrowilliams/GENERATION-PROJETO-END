import React, { useEffect } from "react";
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
                    <Box paddingTop={1}>
                        <img className="parceirosepatrocinadores imglogo2" src="https://i.imgur.com/fmYFcHr.png" alt="LOGO SUSTENTABILIZEI" />
                    </Box>
                </Grid>


                <Grid item xs={12} >
                    <Box className="carousel" paddingX="0%">
                        <CarouselComponent />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box padding={5}>
                        <Typography variant="h3" align="center" className="sus-titulo">SUSTENTABILIZE</Typography>
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
                <Box>
                    <div className="holder">
                        
                        <img src="https://i.imgur.com/TzH9iup.png" alt="SUSTENTABILIZEI-AJUDANDO" />
                        <Typography className="sus-titulo" variant="h5" align="center" color="primary">AJUDANDO NOVAS GERAÇÕES A SE INTERESSAR PELA SUSTENTABILIDADE Por meio de parcerias, a SUSTENTABILIZEI está ajudando a próxima geração a conhecer o que há de mais moderno na área de sustentabilidade. Nossas parcerias alcançam e educam ao redor do mundo Trabalhar com Redes-Sociais para tornar a sustentabilidade parte de nosso futuro coletivo é uma iniciativa que promove a prosperidade e assegura nosso futuro.</Typography>
                    </div>
                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box>
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/jcbi0LA.jpg" alt="SUSTENTABILIZEI-COLETOR-MESTRUAL" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box>
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/AvvWdh0.png" alt="SUSTENTABILIZEI-IAMGREEN" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid3, page3">
                <Box>
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/SZ2clE3.png" alt="SUSTENTABILIZEI-ALIMENTO" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid4, page4">
                <Box className="fontes">
                    <Typography variant="h2" align="center" className="textos">Parceiros e Patrocinadores</Typography>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/fYYvNQS.png" alt="LOGO GENERATION" />
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/EZd8APl.png" alt="LOGO BRASSCOM" />
                    </Box>
                </Box>

            </Grid>
        </>
    );
}

export default Home;