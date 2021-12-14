import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import { url } from "inspector";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history.push("/home")
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)


            toast.success("Usuario logado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error("Dados do usuário inconsistentes. Erro ao logar.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} alignItems="center" className="background">
                <Box paddingX={10} display="flex" justifyContent="center" alignItems="center" height="80vh" borderRadius={5}>
                    <form onSubmit={onSubmit} className="card" >
                        <Typography variant="h3" gutterBottom component="h3" align="center" >Logar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center"  >
                            <Button type="submit" variant="contained" className="btnCancelar botao"  >
                                Cancelar
                            </Button>
                            <Button type="submit" variant="contained" className="botao-cor botao" >
                                Logar
                            </Button>
                        </Box>

                    </form>
                </Box>

            </Grid>

        </Grid>
    );

}

export default Login;
