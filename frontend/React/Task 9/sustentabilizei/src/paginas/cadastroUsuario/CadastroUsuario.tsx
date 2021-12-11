import React, {useState, useEffect, ChangeEvent} from "react";
import { useHistory } from "react-router-dom";
import User from "../../models/User"
import { cadastroUsuario } from "../../services/service";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";

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
            console.log (userResult)
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
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid container direction = "row" justifyContent = "center" alignItems = "center">
            <Grid item xs = {12} alignItems = "center" className = "background">
                <Box paddingX = {10} display="flex" justifyContent="center" alignItems="center" height="80vh" borderRadius = {5}>
                    <form onSubmit = {onSubmit} className="card" >
                            <Typography variant = "h3" gutterBottom  component = "h3" align = "center" >Cadastrar</Typography>
                            <TextField value = {user.nome} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "nome" label = "nome" variant = "outlined" name = "nome" margin = "normal" fullWidth />
                            <TextField value = {user.usuario} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "usuario" label = "usuario" variant = "outlined" name = "usuario" margin = "normal"  fullWidth />
                            <TextField value = {user.senha} onChange = {(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id = "senha" label = "senha" variant = "outlined" name = "senha" margin = "normal" type = "password"fullWidth />
                            <TextField value = {confirmarSenha} onChange = {(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id = "confirmarsenha" label = "confirmarsenha" variant = "outlined" name = "confirmarsenha" margin = "normal" type = "password" fullWidth />
                            <Box marginTop = {2} textAlign = "center"  > 
                                <Link to = "/login" className = "text-decorator-none" >
                                    <Button  variant = "contained"   className = "btnCancelar botao"  >
                                        Cancelar
                                    </Button>   
                                </Link>
                                <Button type = "submit" variant = "contained" className = "botao-cor botao" >
                                        Cadastrar
                                    </Button>   
                            </Box>    
                            
                        </form>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;