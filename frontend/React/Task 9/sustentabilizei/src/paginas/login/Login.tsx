import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Button } from '@mui/material'
import "./Login.css"

function Login() {


    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={400} height="50vh" borderRadius={5} marginTop={10} display="flex" justifyContent="center" alignItems="center">
                        <Box className = "fonte">
                            <Typography variant="h4" color="#545951" align="center">
                                Login
                            </Typography>

                            <form >
                                <Box marginY={6}>
                                    <input type="text" className="color-input"
                                        placeholder="                 Email" />
                                </Box>

                                <Box marginY={6}>

                                    <input type="password" className="color-input"
                                        placeholder="                 Senha             " />
                                </Box>
                                <Button variant="contained"   className="botao">
                                    Login
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Login;
