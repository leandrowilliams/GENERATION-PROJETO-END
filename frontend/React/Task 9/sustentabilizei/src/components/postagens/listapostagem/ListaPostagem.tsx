import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModalPostagem from '../modalPostagem/ModalPostagem';

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
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
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <Box display="flex" justifyContent="center" flexWrap="wrap" className="back-lista-post">
            {
                posts.map(post => (
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={12} alignItems="center" >
                            <Box marginX="auto" marginY={2} borderRadius={5} className="card-postagem">
                                <Box display="flex" justifyContent="end" mb={1} marginTop={1} >
                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button className="marginLeft" size='small' color="primary" >
                                                <EditOutlinedIcon />
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button size='small' color="secondary">
                                                <DeleteOutlineOutlinedIcon />
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                                <Box marginY={1}>
                                    <Typography variant="h5" component="h2" >
                                        {post.titulo}
                                    </Typography>
                                </Box>
                                    <Typography variant="body2" component="p">
                                        {post.conteudo}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {post.tema?.descricao}
                                    </Typography>

                            </Box>
                           
                        </Grid>

                    </Grid>
                ))
            }
            <Box marginRight={1} sx={{ position: 'absolute', bottom: 16, right: 16 }} >
                <ModalPostagem />
            </Box>
        </Box>
    )
}


export default ListaPostagem;