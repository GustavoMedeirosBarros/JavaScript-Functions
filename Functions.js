// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõem uma estrutura
// e o conteúdo de um documento Web

// Essencial para manipular e interagir com elementos de uma página
// Document.querySelector()

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado';

// Uso principal: Buscar e modificar elemntos HTML


// Document.createElement()
// Cria novos elemntos dinamicamente

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM


// addEventListener()
// Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  alert('Botão Clicado!');
}
);
// Uso principal: Criar interatividade, como cliques ou movimento do mouse

// setTimeout()
// Controlam ações que ocorrem em intervalos ou após um tempo
// Executa uma função após um período de tempo (unidade de medida > Milisegundos)

setTimeout(() => {
  alert('Executado após 2 segundos!');
},2000);


// alert > ele executa o toString do seu objeto e apresenta em tela
// console.log > ele registra a informação no console do navegador ficando restrita ao conhecimento do desenvolvedor
// Uso principal: Atrasar execuções ou criar temporizadores

// Aula JavaScript > DOM e Functions > Github

// Executa uma função repetidamente em intervalos regulares.
const intervalo = setInterval(() => { 
    console.log('Executando a cada 1 segundo');
}, 1000);
// Para parar o intervalo
setTimeout(() => clearInterval(intervalo), 5000);

// Cria um novo array aplicando uma função a cada elemento do array original.
const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados);

// Filtra os elementos que atendem a uma condição.
const numeros2 = [10, 20, 30];
const maioresQue15 = numeros2.filter(num => num > 15);
console.log(maioresQue15); 

// Reduz o array a um único valor.
const numeros3 = [1, 2, 3];
const soma = numeros3.reduce((acumulador, num) => 
    acumulador + num, 0); 
    console.log(soma);

// Itera por cada elemento de um array.
const frutas = ['maçã', 'banana', 'laranja']; 
frutas.forEach(fruta =>
    console.log(fruta));

// JSON.parse() : Converte uma string JSON em um objeto.
// JSON.stringify() : Converte um objeto em uma string JSON.
const json = '{"nome":"Ana","idade":30}'; 
const obj = JSON.parse(json); 
console.log(obj.nome);

const novoJson = JSON.stringify(obj); 
console.log(novoJson);

// Realiza requisições HTTP.
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

// Executa código com base em condições.
const idade = 18; if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// Seleciona uma entre várias opções com base em um valor.
const cor = 'vermelho'; 
switch (cor) {
    case 'vermelho':
        console.log('Pare!'); 
        break;
    case 'amarelo':
        console.log('Atenção!'); 
        break;
    case 'verde': 
        console.log('Siga!');
        break;
    default:
        console.log('Cor inválida');
}

// Converte uma string para letras maiúsculas.
const texto = 'olá'; console.log(texto.toUpperCase());

// Converte uma string para letras minúsculas.
const texto2 = 'OLÁ'; console.log(texto2.toLowerCase()); 

// Verifica se uma string contém outra.
const frase = 'JavaScript é incrível';
console.log(frase.includes('incrível')); 

// Uma coleção de pares chave-valor.
const mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome'));

// Armazena valores únicos, sem repetições.
const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto);

// Gera um número aleatório entre 0 e 1.
const aleatorio = Math.random();
console.log(aleatorio);

// Arredonda um número para baixo.
const numero = 4.7; 
console.log(Math.floor(numero));

// Gustavo Medeiros Barros dos Santos
// 3956A