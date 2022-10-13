import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from './../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../../../../src/store/tokens/tokenReducer';

function Home() {
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
      )
  
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='bemVinde'>Bem-vinde!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center">Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                            <Link to="/postagens" className="text-decorator-none">
                        <Button variant="outlined" className='verPost'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{backgroundColor: "#80d4ea"}}>
                    <img src="https://user-images.githubusercontent.com/52469840/193488092-652bb13d-df35-41ea-8a8f-d0d06cbfda4c.png" height="500px" width="500px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;