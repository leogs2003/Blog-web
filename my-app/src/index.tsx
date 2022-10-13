importe  Reagir  de  'reagir' ;
importe  ReactDOM  de  'react-dom' ;
import  './index.css' ;
importar  App  de  './App' ;
importar  reportWebVitals  de  './reportWebVitals' ;
ReactDOM . renderizar (
< Reagir . Modo Estrito >
< Aplicativo  / >
< / Reagir . StrictMode > ,
documento . getElementById ( 'root' )
) ;
// Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals ( ) ;