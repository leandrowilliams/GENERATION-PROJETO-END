import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import Postagem from "../../models/Postagem";
import { busca } from "../../services/Service";
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagem from "../../components/postagens/listapostagem/ListaPostagem";

function Feed() {
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
        <>
            
                <Box justifyContent="center" alignItems="center" >
                    <ListaPostagem />
                </Box>
                <Box marginRight={1} sx={{ position: 'absolute', bottom: 16, right: 16 }} >
                    <ModalPostagem />
                </Box>
            

        </>
    )
}

export default Feed;
