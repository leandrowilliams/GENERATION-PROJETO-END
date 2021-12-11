import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage"
import { login } from "../../services/service";
import UserLogin from "../../models/UserLogin";
import React,{ ChangeEvent, useState, useEffect } from "react";
import "./Login.css";


    function Login() {
        let history = useHistory();
        const[token, setToken] = useLocalStorage("token");
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
                console.log("Login "+JSON.stringify(userLogin));
            }
    
                useEffect(()=>{
                    if(token != "" ){
                        history.push("/home")
                    }
                }, [token])
    
            async function onSubmit(e: ChangeEvent<HTMLFormElement>){
                e.preventDefault();
               try {
                   await login("/usuarios/logar", userLogin, setToken)
                   
    
                   alert("Usuario logado com sucesso!");
               } catch (error) {
                   alert("Dados do usuario incorretos. Erro ao logar!")
               }
            }

    return (
            <Grid container direction = "row" justifyContent = "center" alignItems = "center">
                <Grid item xs = {12} alignItems = "center" className = "background">
                    <Box paddingX = {10} display="flex" justifyContent="center" alignItems="center" height="80vh" borderRadius = {5}>
                        <form onSubmit = {onSubmit} className="card" >
                                <Typography variant = "h3" gutterBottom  component = "h3" align = "center"  >Logar</Typography>
                                <TextField  onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "usuario" label = "usuario" variant = "outlined" name = "usuario" margin = "normal"  fullWidth />
                                <TextField  onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "senha" label = "senha" variant = "outlined" name = "senha" margin = "normal" type = "password"fullWidth />
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
                                
                            </form>
                    </Box>
    
                </Grid>
    
            </Grid>
        );
    
}

export default Login;
