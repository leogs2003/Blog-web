import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Card, CardActions, CardContent, Button, Typography, Box} from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';


function ListaTema() {
  //HOOKS
  const[temas, setTemas] = useState<Tema[]>([]) //Listando tema

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  )
  
  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado', {
        });
        navigate("/login")
    }
  }, [token])

  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    } )
  }

  useEffect(() =>{ //mapeando os temas para renderizar
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>( //usando array para armazenar temas de cada usuário
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;