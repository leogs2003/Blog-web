export  type  Ação  =  { type : "ADD_TOKEN" | "ADD_ID" ,  carga útil : string }

export  const  addToken  =  ( token : string ) : Ação  =>  ( {
  tipo : 'ADD_TOKEN' ,
  carga útil : token
} )

//pegar o id do usuário na hora do login
export  const  addId  =  ( id : string ) : Ação  => ( {
  tipo : "ADD_ID" ,
  carga útil : id 
} )