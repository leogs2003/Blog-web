import  {  Action  }  from  "./action" ;

 interface de  exportação TokenState  {
  tokens : string ,
  id : cadeia
}

const  estado inicial  =  {
  fichas : ''  ,
  identificação : ''
}

export  const  tokensReducer  =  ( state : TokenState  =  initialState ,  action : Action )  =>  {
  switch  ( ação . tipo ) {
    case  "ADD_TOKEN" : {
      return  { tokens : ação . carga útil ,  id : estado . identificação }
    } ;
    case  "ADD_ID" : {
      return  { id : ação . carga útil ,  tokens : estado . fichas }
    }
    padrão : estado de retorno 
  }
}