import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
      )

      var footerComponent;

      if(token != ""){ footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textBox1'>Acompanhe meus projetos e me siga nas redes sociais</Typography>
                        </Box>
                            <a href="https://www.linkedin.com/in/leonardo-gon%C3%A7alves-0020b2246/" target="_blank" rel="link para conhecer o trabalho do criador">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                    <Box style={{ backgroundColor: "#000", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#fff" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/leogs2003" rel="git do criador">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "#fff" }} align="center">Leonardo Gonçalves</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
}

return(
    <>
    
    {footerComponent}

    </>
)

}

export default Footer;