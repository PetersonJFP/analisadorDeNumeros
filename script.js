let numberInput = document.getElementById('numberInput')
let addNumber = document.getElementById('addNumber')
let numbersField = document.getElementById('numbersField')
let calculate = document.getElementById('calculate')
let results = document.getElementById('results')
let numbers = []

function updateNumbersField(){
  numbersField.innerHTML = ''
  numbers.forEach(n => {
    let p = document.createElement('p')
    p.innerText = `Você adicionou o número ${n}`
    numbersField.appendChild(p)
  })
}

function validate(n) {
  if (Number.isNaN(n)) {
    numberInput.value = ''
    alert('Por favor digite um número')
    return null
  }
  if (n < 1 || n > 100) {
    numberInput.value = ''
    alert('Por favor digite um número entre 1 e 100')
    return null
  }
  if (numbers.indexOf(n) !== -1) {
    numberInput.value = ''
    alert('Número já existe na lista')
    return null
  }
  return true
}

function addNumberToNumbers(){
  results.innerHTML = ''
  let n = Number(numberInput.value)
  if (validate(n)) {
    numbers.push(n)
    numberInput.value = ''
    updateNumbersField()
  }
}

function showLenght() {
  let p = document.createElement('p')
  p.innerText = `Você adicionou ${numbers.length} números`
  results.appendChild(p)
}

function showMin() {
  let r = numbers[0]
  numbers.forEach(n => {
    if(n < r){
      r = n
    }
  })
  let p = document.createElement('p')
  p.innerText = `O menor número adicionado é ${r}`
  results.appendChild(p)
}

function showMax() {
  let r = numbers[0]
  numbers.forEach(n => {
    if(n > r){
      r = n
    }
  })
  let p = document.createElement('p')
  p.innerText = `O maior número adicionado é ${r}`
  results.appendChild(p)
}

function showSum() {
  let r = 0
  numbers.forEach(n => {
    r += n
  })
  let p = document.createElement('p')
  p.innerText = `A soma dos números é ${r}`
  results.appendChild(p)
}

function showAverage() {
  let r = 0
  numbers.forEach(n => {
    r += n
  })
  r = r / numbers.length
  let p = document.createElement('p')
  p.innerText = `A média dos números é ${r.toFixed(2)}`
  results.appendChild(p)
}

function calculateResults() {
  showLenght()
  showMin()
  showMax()
  showSum()
  showAverage()
}

addNumber.addEventListener('click', addNumberToNumbers)
calculate.addEventListener('click', calculateResults)
