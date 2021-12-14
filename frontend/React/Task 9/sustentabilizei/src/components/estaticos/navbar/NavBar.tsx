import React from 'react';
import { AppBar, Toolbar, Typography, Box, } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import "./NavBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from "react-toastify";

function Navbar() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
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

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static"  >
            <Toolbar variant="dense" className="color-nav container">
                <Box style={{ cursor: "pointer" }} >
                    <Typography variant="h5" color="inherit">
                        Sustentabilizei
                    </Typography>
                </Box>



                <Box display="flex" justifyContent="start" className="container2" >
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} className="container2">
                        <Typography variant="h6" color="inherit">
                            Sobre Nós
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} className="container2">
                        <Typography variant="h6" color="inherit">
                            Contato
                        </Typography>
                    </Box>
                </Box>
                <Box
                    display="inline-flex"
                    justifyContent="end"
                    alignItems="end"
                    marginLeft="1230px"
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
                            <Typography variant="h6" color="inherit">
                                Cadastre-se
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;