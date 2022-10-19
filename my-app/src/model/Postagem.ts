import { Tema } from "./Tema";
import { Usuario } from "./User";

export interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null;
    usuario?: Usuario | null //vincula um usuario
}