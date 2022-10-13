import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';

// local storage: Usado para guardarmos dados não sensiveis do usuário, como token por exemplo

function Navbar() {

  let navigate = useNavigate();

  const dispatch = useDispatch();//responsavel por enviar o token

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )

  function goLogout(){
  dispatch(addToken(''));
  alert("Usuário deslogado")
  navigate('/login');
  }
  var navbarComponent;
  if(token!= ""){ navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className='LogoBlogPessoal'>
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Link to="/home" className='text-decorator-none'>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                HOME
                <img src="" alt="" />
              </Typography>
            </Box>
            </Link>
            <Link to="/postagens" className='text-decorator-none'>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>
            <Link to="/temas" className='text-decorator-none'>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            </Link>
            <Link to="/formularioTema" className='text-decorator-none'>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            </Link>
           
            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" style={{ color:'hotpink' }}>
                Logout
              </Typography>
            </Box>
        
          </Box>
        </Toolbar>
      </AppBar>
}
    return (
      <>
      {navbarComponent}
      </>
    );
    }
export default Navbar;