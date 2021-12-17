import react from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== "") {
            footerComponent= <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}  className="box3">
                        <div className="backgroufooter">
                            <Typography variant="h2" align="center" gutterBottom className="textos">#Sustentabilize para um planeta melhor!</Typography>

                            <Box display="flex">
                                <div>
                                    <img className="imglogo" src="https://i.imgur.com/fmYFcHr.png" alt="LOGO" />
                                </div>
                            </Box>

                        </div>
                    </Grid>

                    <Grid alignItems="center" item xs={12}>

                        <Box className="box1">

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h4" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.facebook.com/sustentabilizei" target="_blank">
                                    <FacebookIcon className="redes" />
                                </a>
                                <a href="https://www.instagram.com/sustentabilizei/" target="_blank">
                                    <InstagramIcon className="redes" />
                                </a>
                                <a href="https://www.linkedin.com/school/sustentabilizei/" target="_blank">
                                    <LinkedInIcon className="redes" />
                                </a>
                            </Box>
                        </Box>
                        <Box className="box2">
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom className="textos" >CopyrightÂ© 2021 SUSTENTABILIZEI - All Rights Reserved | Proudly powered by GENERATION.<a target="_blank" href="www.sustentabilizei.com.br">
                                </a></Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="www.sustentabilizei.com.br">
                                    <Typography variant="subtitle2" gutterBottom className="textos" align="center">SUSTENTABILIZEI</Typography>
                                </a>
                            </Box>
                        </Box>

                    </Grid>
            </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )

}


export default Footer;