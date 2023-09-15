import { Pessoa } from "../model/Pessoa"

let pessoa = new Pessoa('Amadea',
                        '1111111111',
                        new Date(2000,9,15),
                        '000000000',
                        'Rua Número 1',
                        170,
                        70);
pessoa.falar();


pessoa.falarfrase("VAI CURINTIA!!! BANDO DE OREIUDO");

console.log("\n");

let pessoa2 = new Pessoa('Maria Zeferina', '33333333333', new Date(1972, 8, 29),'99999999999', 'Rua das Corridas', 165, 55);
pessoa2.andar();
pessoa.andarQuilometros(20);

console.log("\n");

let pessoa3 = new Pessoa('Garfield', '222222222', new Date(1978, 6, 19), '999999999', 'Rua das Lasanhas', 40, 15);

pessoa3.comer();
pessoa3.comerPrato("lasanha");

console.log("\n");

pessoa.mostraPessoa();
pessoa2.mostraPessoa();
pessoa3.mostraPessoa();
