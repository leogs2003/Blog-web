import  React ,  { useState ,  useEffect ,  ChangeEvent }  de  'react' ;
import  {  useNavigate  }  from  'react-router-dom' ;
importar  usuário  de  '../../models/User' ;
import  {  cadastroUsuario  }  from  '../../services/Service' ;
import  {  Box ,  Button ,  Grid ,  TextField ,  Typography  }  from  '@material-ui/core' ;
import  {  Link  }  from  'react-router-dom' ;
import  './CadastroUsuario.css' ;

função  CadastroUsuario ( )  {

    deixe  navegar  =  useNavigate ( ) ;  //usado em useEffect, usado para navegar de uma tela para outra
    const  [ confirmarSenha , setConfirmarSenha ]  =  useState < String > ( "" )  //verifica se o valor da senha é igual à senha
    const  [ user ,  setUser ]  =  useState < User > (  //contém as informações de cadastro

        {
            identificação : 0 ,
            nome : '' ,
            usuario : '' ,
            senha : ''
        } )

    const  [ userResult ,  setUserResult ]  =  useState < User > (
        {
            identificação : 0 ,
            nome : '' ,
            usuario : '' ,
            senha : ''
        } )

    useEfeito ( ( )  =>  {
        if  ( userResult . id  !=  0 )  {
            navegue ( "/Login" )
        }
    } ,  [ userResult ] )


    function  confirmarSenhaHandle ( e : ChangeEvent < HTMLInputElement > ) {
        setConfirmarSenha ( e . target . value )
    }


    function  updatedModel ( e : ChangeEvent < HTMLInputElement > )  {

        setUsuário ( {
            ... usuário ,
            [ e . alvo . nome ] : e . alvo . valor
        } )

    }
     função  assíncrona onSubmit ( e : ChangeEvent < HTMLFormElement > )  {
        e . preventDefault ( )
        if ( confirmarSenha  ==  usuário . senha ) {
        cadastroUsuario ( `/usuarios/cadastrar` ,  user ,  setUserResult )
        alert ( 'Usuario cadastrado com sucesso' )
        } senão {
            alert ( 'Dados inconsistentes. Favor verificar as informações de cadastro.' )
        }
    }  
    retornar  (
        < Grid  container  direction = 'row'  justifyContent = 'center'  alignItems = 'center' >
            < Grid  item  xs = { 6 }  className = 'imagem2' > < / Grid >
            < Item de grade  xs = { 6 } > 
                < Box  paddingX = { 10 } >
                < form  onSubmit = { onSubmit } >
                        < Typography  variant = 'h3'  gutterBottom  color = 'textPrimary'  component = 'h3'  align = 'center'  className = 'textos2' > Cadastrar < / Typography >
                        < valor TextField  = { usuário . nome } onChange = { ( e : ChangeEvent < HTMLInputElement > ) => updatedModel ( e ) } id = 'nome' label = 'nome' variant = 'outlined' name = 'nome' margin = 'normal' fullWidth / >          
                        < valor TextField  = { usuário . usuario } onChange = { ( e : ChangeEvent < HTMLInputElement > ) => updatedModel ( e ) } id = 'usuario' label = 'usuario' variant = 'outlined' name = 'usuario' margin = 'normal' fullWidth / >        
                        < valor TextField  = { usuário . senha } onChange = { ( e : ChangeEvent < HTMLInputElement > ) => updatedModel ( e ) } id = 'senha' label = 'senha' variant = 'outlined' name = 'senha' margin = 'normal' type = 'password' largura total / >          
                        < TextField  value = { confirmarSenha }  onChange = { ( e : ChangeEvent < HTMLInputElement > )  =>  confirmarSenhaHandle ( e ) } id = 'confirmarSenha'  label = 'confirmarSenha'  variant = 'outlined'  name = 'confirmarSenha'  margin = 'normal'  type = 'password'  fullWidth  / >
                        < Box  marginTop = { 2 }  textAlign = 'center' >
                            < Link  para = '/login'  className = 'text-decorator-none2' >
                                < Variante do botão  = 'contido' color = 'secundário' className = 'btnCancelar' >  
                                Cancelar
                                < / Botão >
                            < / Links >
                            < Tipo de botão  = 'enviar' variante = 'contido' color = 'primário' >  
                                Cadastrar
                            < / Botão >
                        < / Caixa >
                    < / formulário >  
            < / Caixa >
        < / Grade >



    < / Grade >
    )



export  default  CadastroUsuario ; }