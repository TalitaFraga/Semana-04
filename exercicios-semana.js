// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

function cartaoDeCredito(cartao) {
  const numeroDoCartao = cartao.split('')
  const ultimoNumero = numeroDoCartao.pop()
  numeroDoCartao.reverse()
  

  console.log('numeroDoCartao', numeroDoCartao)

  const array1 = []
  for(let i = 0; i < numeroDoCartao.length; i++) {
    if ((i+1) % 2 === 0) {
      array1.push(parseInt(numeroDoCartao[i]))
    } else {
      array1.push(parseInt(numeroDoCartao[i]) * 2)
    }
  }
  console.log(array1)

  const array2 = []
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] > 9) {
      array2.push(array1[i] - 9)
    } else {
      array2.push(array1[i])
    }
  }
 console.log(array2)

 let soma = 0
 for(let i = 0; i <array2.length; i++) {
   soma = array2[i] + soma
   
 }
 soma = soma + parseInt(ultimoNumero)
 console.log(soma)

 return soma % 10 === 0
}
console.log(cartaoDeCredito('5555666677778884'))

///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
    Clotilde: {
      visitas: 1,
    },
    Florinda: {
      visitas: 2,
    },
    Paty: {
      visitas: 3,
    },
  }

  function saudarCliente(nomeCliente) { 
    let clienteDaBase = baseClientes [nomeCliente]
    if(clienteDaBase === undefined) {
      console.log('Olá, é a primeira vez por aqui?')
    }
   
    if(clienteDaBase !== undefined && clienteDaBase.visitas === 1) {
    console.log(`Bem-vinda, ${nomeCliente}! Que bom que voltou!`)
    }
  
    if(clienteDaBase !==undefined && clienteDaBase.visitas > 1) {
      console.log(`Bem-vinda mais uma vez, ${nomeCliente}`)
    }
  
  }
  saudarCliente("Florinda")