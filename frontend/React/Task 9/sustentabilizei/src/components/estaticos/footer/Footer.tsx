import react from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css";


function Footer() {

    return (
        <>
            <div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12}>
                        <Box className="box1">
                            <Typography variant="h5" align="center" gutterBottom className="textos">#SUSTENTABILIZE PARA UM PLANETA MELHOR</Typography>
                            <Typography variant="h2" align="center" gutterBottom className="textos">PARCEIROS  E PATROCINADORES</Typography>
                            <div>
                                <img src="https://i.imgur.com/fYYvNQS.png" alt="LOGO ficar na div left" />
                                <img src="https://res.cloudinary.com/generation/image/upload/w_200,h_70,c_lpad/brazil/2021/03/1-Logo-Brasscom-2021-PNG.png" alt="LOGO ficar na div left" />
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/1306/1306170.png" alt="LOGO ficar na div left" />
                            </div>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
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
                                <Typography variant="subtitle2" align="center" gutterBottom className="textos" >Copyright© 2021 SUSTENTABILIZEI - All Rights Reserved | Proudly powered by GENERATION.<a target="_blank" href="www.sustentabilizei.com.br">
                                </a></Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="www.sustentabilizei.com.br">
                                    <Typography variant="subtitle2" gutterBottom className="textos" align="center">SUSTENTABILIZEI</Typography>
                                </a>
                            </Box>
                            <div>
                                <img src="" alt="Descrição jogar na div right" />
                            </div>
                        </Box>

                    </Grid>
                </Grid>
            </div>

        </>
    )

}


export default Footer;