
const carrinho =[
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 43.45}',
    '{"nome": "Cante", "preco": 5.45}',
]


const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

