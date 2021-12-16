import React, {useState, useEffect, ChangeEvent} from "react";
import { useHistory } from "react-router-dom";
import User from "../../models/User"
import { cadastroUsuario } from "../../services/Service";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
    
    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuario cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }else{
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.", {
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
        <Grid container direction = "row" justifyContent = "center" alignItems = "center" className = "background" >
            <Grid item xs = {12} alignItems = "center"   >
            <Box className = "imagem-logo" >
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh" borderRadius = {8} >
                    <form onSubmit = {onSubmit} className="card-cadastro" >
                            <Typography variant = "h3" gutterBottom  component = "h3" align = "center" className = "fonte" >Cadastrar</Typography>
                            <TextField  value = {user.nome} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "nome" label = "Nome" variant = "outlined" name = "nome" margin = "normal" fullWidth />
                            <TextField  value = {user.usuario} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "usuario" label = "Usuario" variant = "outlined" name = "usuario" margin = "normal"  fullWidth />
                            <TextField  value = {user.senha} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "senha" label = "Senha" variant = "outlined" name = "senha" margin = "normal" type = "password"fullWidth />
                            <TextField  value = {confirmarSenha} onChange = {(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id = "confirmarsenha" label = "Confirmar Senha" variant = "outlined" name = "confirmarsenha" margin = "normal" type = "password" fullWidth />
                            <Box marginTop = {2} textAlign = "center"  > 
                                <Link to = "/login" className = "text-decorator-none" >
                                    <Button  variant = "contained"   className = "botao"  >
                                        Cancelar
                                    </Button>   
                                </Link>
                                <Button type = "submit" variant = "contained" className = "botao" >
                                        Cadastrar
                                    </Button>   
                            </Box>  

                             <Box display = "flex" justifyContent = "center" marginTop = {2}>
                        <Box marginRight = {1}>
                            <Typography variant = "subtitle1" gutterBottom align = "center" className = "fonte">Já tem uma conta?</Typography>
                        </Box>
                        <Link to = "/login">
                        <Typography variant = "subtitle1" gutterBottom align = "center" className = "fonte">Logue-se</Typography>
                        </Link>
                            
                    </Box>
                            
                        </form>
                </Box>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;