import { Grid, Input, InputAdornment, InputLabel, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Login.css";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken, addId } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import { UserLogin } from "../../model/UserLogin";
import GoogleLogin from "react-google-login";
import { SyncLoader } from "react-spinners";

export function Login() {

    const [loading, setLoading] = useState(false);

    let navigate = useNavigate()
    const dispatch = useDispatch()
    // const [token, setToken] = useLocalStorage('token')
    const [token, setToken] = useState('')
    const [entrar, setEntrar] = useState(false)
    const[userLogin, setUserLogin] = useState<UserLogin>({
        id:0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: '',
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
        
    }

    async function conectar(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        setLoading(true)
        try{
          await login(`/usuarios/logar`,userLogin, setRespUserLogin);
          
          toast.success('Usuário logado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        });

        }catch(error){
          setLoading(false)
          toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        }

        
    }

    useEffect(() => {
      if(userLogin.usuario.length >= 4 &&  userLogin.senha.length>=8){
          setEntrar(true)
      } else{
        setEntrar(false)
      }
    },[userLogin])


    useEffect(() => {
        if(token!==''){
            
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token]);

    useEffect(()=>{
      if(respUserLogin.token !== ''){
        dispatch(addToken(respUserLogin.token))
        dispatch(addId(respUserLogin.id.toString()))
        console.log ('Token:'+respUserLogin.token);
        
        navigate('/home');
      }
    },[respUserLogin.token])

    useEffect(() => {

    })


  const [nome, setNome] = useState();
	const [usuario, setUsuario] = useState();
	const [foto, setFoto] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const responseGoogle = (response:any) => {
		console.log(response);
		const {
			profileObj: { nome, usuario, imageUrl },
		} = response;
		setNome(nome);
		setUsuario(usuario);
		setFoto(imageUrl);
		setIsLoggedIn(true);
	};
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className='login'
      >
          <Box paddingX={10} className='box'>
            <form onSubmit={conectar}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><img src='https://i.imgur.com/RLltIpo.png' className='logo-size'></img></Typography>
            <Typography variant="h5" className="titulo-blog">Katanosaka Blog</Typography>
              <Typography variant="h3" gutterBottom color ='textPrimary' component='h3' align="center" className="textos1">Login</Typography>
              <TextField
                onChange={(event:ChangeEvent<HTMLInputElement>)=>updateModel(event)}
                value={userLogin.usuario}
                id="usuario"
                name="usuario"
                label = "E-mail"
                variant="filled"
                type="e-mail"
                fullWidth
                margin="normal"
                className='fundo'
              />
              <TextField
                onChange={(event:ChangeEvent<HTMLInputElement>)=>updateModel(event)}
                value={userLogin.senha}
                id="senha"
                type="password"
                name="senha"
                label="Senha"
                fullWidth
                variant="filled"
                margin="normal"
              />
            <Box marginTop={5} textAlign='center'>
                    <Button type="submit" variant="contained" disabled={!entrar}>
                        Entrar
                    </Button>
                    {loading?(<SyncLoader className="loading-login" size={5} color={'#36D7B7'} loading={loading}/>)
                    :(<SyncLoader className="loading-login" size={0} color={'#36D7B7'} loading={true}/>)}
                    

            </Box>
                
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>
                    <Link to='/cadastrousuario' className="text-decorator-none">
                      <Typography  gutterBottom align='center' className='textos-link'>Registre-se</Typography>
                    </Link>
                    
            </Box>
            
          </Box>
          
          

      </Grid>
      {/* <GoogleLogin
				clientId="405026633290-pnhkq91b351crvmg323n2nt5m8n1jt7m.apps.googleusercontent.com"
        buttonText="Entrar com Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/>
			{isLoggedIn ? (
				<div style={{ textAlign: "center" }}>
					<h1>User Information</h1>
					<img className="profile" src={foto} alt="Profile" />
					<p>nome: {nome}</p>
					<p>usuario: {usuario}</p>
				</div>
			) : (
				""
			)} */}
    </>
  );
}

