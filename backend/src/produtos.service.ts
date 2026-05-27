import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosServices {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD E BDD na prática", 29.90, "Prateleira Programação"),
        new Produto("LIV02", "Iniciando com Flutter", 39.90, "Prateleira Programação"),
        new Produto("LIV03", "ChatGPT como serviço", 29.90, "Prateleira Programação"),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push;
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
}