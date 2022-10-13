importar  axios  de  'axios' ;


//TYPESCRIPT: Síncrono, o que significa que todas as suas funções são lidas uma após a outra.


//Serviço: Camada responsável por fazer a comunicação direta com o Back-End
//Service faz as requisições pra nossa API

//métodos GET, POST, PUT E DELETE
export  const  api  =  axios . criar ( {
    baseURL : 'https://blogpessoal-1lb3.onrender.com'
} )

export  const  cadastroUsuario  =  async ( url : any ,  dados : any ,  setDado : any )  =>  {
    const  resposta  =  esperar  api . post ( url ,  dados )
    setDado ( resposta . data )
}

export  const  login  =  async ( url : any ,  dados : any ,  setDado : any )  =>  {
    const  resposta  =  esperar  api . post ( url ,  dados )
    setDado ( resposta . data . token )
}

//autenticação dos dados. Usuário só pode cadastrar temas se estiver cadastrado.
export  const  busca  =  async ( url : any , setDado : any ,  header : any )  =>  {  //Dentro do header ele está o Token que vai autenticar o usuário
    const  resposta  =  esperar  api . get ( url ,  header )  //Passando uma URL + Token
    setDado ( resposta . data )
}

export  const  buscaId  =  async ( url : any , setDado : any ,  header : any )  =>  { 
    const  resposta  =  esperar  api . get ( url ,  cabeçalho ) 
    setDado ( resposta . data )
}

export  const  post  =  async ( url : any ,  dados : any ,  setDado : any ,  header : any )  =>  {
    const  resposta  =  esperar  api . post ( url ,  dados ,  cabeçalho ) 
    setDado ( resposta . data )
}

export  const  put  =  async ( url : any ,  dados : any ,  setDado : any ,  header : any )  =>  { 
    const  resposta  =  esperar  api . put ( url ,  dados ,  cabeçalho ) 
    setDado ( resposta . data )
}

export  const  deleteId  =  async ( url : any ,  header : any )  =>  { 
    aguardo  api . delete ( url ,  cabeçalho ) }