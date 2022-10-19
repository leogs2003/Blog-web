import React from "react";
import Footer from "./components/estaticos/footer/Footer";
import NavBar from "./components/estaticos/navbar/Navbar";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaTema from "./components/temas/listaTema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTemas/DeletarTema";
import { Provider } from "react-redux";
import store from "../../../../src/store/Store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/temas" element={<ListaTema />} />
        <Route path="/postagens" element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
