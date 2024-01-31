
import express from 'express'

const app = express()

app.use(express.json())

const gatos = [
  {
    name: "Cajuzinho",
    idade: 2,
    raca: "SRD",
    cor: "preta",
    nascimento:"07/12/2021",
    bloco: "A",
    microchip: "1234567890123456",
  },
  {
    name: "Luna",
    idade: 16,
    raca: "SRD",
    cor: "tricolor",
    nascimento: "12/04/2008",
    bloco: "B",
    microchip: "9876543210987654",
  },
  {
    name: "Epaminondas",
    idade: 3,
    raca: "SRD",
    cor: "rajada",
    nascimento: "27/03/2020",
    bloco: "C",
    microchip: "0987654321098765",
  },
  {
    name: "Yulia",
    idade: 5,
    raca: "Persa",
    cor: "branca",
    nascimento: "21/06/2019",
    bloco: "D",
    microchip: "8765432109876543",
  },
  {
    name: "Teo",
    idade: 10,
    raca: "SRD",
    cor: "laranja",
    nascimento: "11/02/2014",
    bloco: "E",
    microchip: "7654321098765432",
  },
];

app.use(express.json())

function buscarGatoPorBloco(bloco){
  return gatos.filter( cat => cat.bloco == bloco)
}

app.get('/', (req, res) => {
  res.send('Cadastre um Gatinho')
})

app.get('/gatos', (req, res) => {
  res.status(200).send(gatos)
})

app.post('/gatos/novocadastro', (req, res) =>{
  gatos.push(req.body)
  res.status(201).send('gato cadastrada com sucesso!')
})

app.get('/gatos/novocadastro/busca/:bloco', (req, res) => {
  res.json(buscarGatoPorBloco(req.params.bloco))
})

export default app
