import React from 'react';
import { AppBar, Toolbar, Typography, Box, } from '@material-ui/core';
import "./NavBar.css"

function Navbar() {
    return (
        <>
            <AppBar position="static"  >
                <Toolbar variant="dense" className= "color-nav container">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Sustentabilizei
                        </Typography>
                    </Box>
                    

                    
                    <Box display="flex" justifyContent="start" className= "container2" >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                               Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}  className= "container2">
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}  className= "container2">
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>
                        </Box>
                    </Box>
                   <Box 
                   display = "inline-flex"
                   justifyContent = "end"
                   alignItems = "end"
                   marginLeft = "1230px"
                   >
                    <Box display="flex"  >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                               Login
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex"  >
                        <Box mx={1} style={{ cursor: "pointer" }}>
                        <div>
                                <a href="#">Useless Link</a>
                                <ul>
                                    <li>
                                    <a href="#">Dropdown Link</a>
                                    <ul>
                                        <li><a href="#">Link 1</a></li>
                                        <li><a href="#">Link 2</a></li>
                                        <li><a href="#">Link 3</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </div>
                            <Typography variant="h6" color="inherit">
                               Cadastre-se
                            </Typography>
                        </Box>
                    </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;