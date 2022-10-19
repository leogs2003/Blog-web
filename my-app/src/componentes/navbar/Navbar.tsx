import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';


export function Navbar() {
    // const [token, setToken] = useLocalStorage('token');
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="fixed" className='navbar-color'>
        <Toolbar variant="dense" className="">
            <Grid alignItems="center" item xs={6}>
                <Box>
                    <Typography variant="h5" className="titulo-blog-navbar">
                    Katanosaka Blog
                    </Typography>
                </Box>
            </Grid>
            <Grid className='itens-navbar' item xs={6}>
                <Box display="flex">
                    <Link to="/home" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='itens-font'>
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to ="/posts" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='itens-font'>
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to ="/temas" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='itens-font'>
                                temas
                            </Typography>
                        </Box>
                    </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='itens-font'>
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/perfil" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='itens-font'>
                                perfil
                            </Typography>
                        </Box>
                    </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                        <span className="material-symbols-outlined">logout</span>
                        {/* <Typography variant="h6" color="inherit" className='material-symbols-outlined'>
                            logout
                        </Typography> */}
                        </Box>
                
                    
                </Box>
            </Grid>
        </Toolbar>
    </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}