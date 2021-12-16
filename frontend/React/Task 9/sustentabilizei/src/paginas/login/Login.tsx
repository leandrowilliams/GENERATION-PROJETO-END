import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { login } from "../../services/Service";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage"
import UserLogin from "../../models/UserLogin";
import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import { url } from "inspector";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";


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
            history.push("/feed")
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
        
            <Grid container direction = "row" justifyContent = "center" alignItems = "center">
                <Grid item xs = {12} alignItems = "center" className = "background">
                    <Box  display="flex" justifyContent="center" alignItems="center" height="100vh" borderRadius = {5}>
                        <form onSubmit = {onSubmit} className="card"  >
                                <Typography variant = "h3" gutterBottom  component = "h3" align = "center" className = "fonte" >Logar</Typography>
                                <TextField  onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "usuario" label = "Usuario" variant = "outlined" name = "usuario" margin = "normal"  fullWidth />
                                <TextField  onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "senha" label = "Senha" variant = "outlined" name = "senha" margin = "normal" type = "password"fullWidth />
                                <Box marginTop = {2} textAlign = "center"  > 
                                    <Link to = "/login" className = "text-decorator-none" >
                                        <Button  variant = "contained"   className = "btnCancelar botao"  >
                                            Cancelar
                                        </Button>   
                                    </Link>
                                    <Button type = "submit" variant = "contained" className = "botao-cor botao" >
                                            Logar
                                        </Button>   
                                </Box>    
                                <Box display = "flex" justifyContent = "center" marginTop = {2}>
                        <Box marginRight = {1}>
                            <Typography variant = "subtitle1" gutterBottom align = "center" className = "fonte">Não tem uma conta?</Typography>
                        </Box>
                        <Link to = "/cadastrousuario">
                        <Typography variant = "subtitle1" gutterBottom align = "center" className = "textos1">Cadastre-se</Typography>
                        </Link>
                            
                    </Box>     
                            </form>
                            
                    </Box>
    
                </Grid>
    
            </Grid>

    

      
    );

}

export default Login;
