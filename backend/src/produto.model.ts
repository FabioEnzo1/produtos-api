export class Produto {
    codigo: string;
    nome: string;
    preco: number;
    setor: string
    
    constructor(codigo: string, nome: string, preco: number, setor: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.setor = setor;
    }
}