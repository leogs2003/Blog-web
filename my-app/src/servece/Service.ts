importar  axios  de  'axios'

export  const  api  =  axios . criar ( {
    baseURL : 'https://blogpessoal-2lhh.onrender.com'
} )

export  const  cadastroUsuario  =  async ( url : any ,  dados : any ,  setDados : any )  =>  {
    const  resposta  =  esperar  api . post ( url , dados )
    setDados ( resposta . data )
}

export  const  login  =  async ( url : any ,  dados : any ,  setDados : any )  =>  {
    const  resposta  =  esperar  api . post ( url , dados )
    setDados ( resposta . data )
}

export  const  busca  =  async ( url : any ,  setDados : any ,  header : any )  => {
    const  resposta  =  esperar  api . get ( url ,  cabeçalho )
    setDados ( resposta . data )
}

export  const  buscaId  =  async ( url : any ,  setDados : any ,  header : any )  => {
    const  resposta  =  esperar  api . get ( url ,  cabeçalho )
    setDados ( resposta . data )
}

export  const  post  =  async ( url : any ,  dados : any ,  setDados : any ,  header : any )  => {
    const  resposta  =  esperar  api . post ( url ,  dados ,  cabeçalho )
    setDados ( resposta . data )
}

export  const  put  =  async ( url : any ,  dados : any ,  setDados : any ,  header : any )  => {
    const  resposta  =  esperar  api . put ( url ,  dados ,  cabeçalho )
    setDados ( resposta . data )
}

export  const  deleteId  =  async ( url : any ,  header : any )  => {
    aguardo  api . delete ( url ,  cabeçalho )
}