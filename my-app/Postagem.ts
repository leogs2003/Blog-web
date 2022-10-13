import Tema from './src/model/Tema'
interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;