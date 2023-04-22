setInterval(function time(){
let DiaHoje = new Date()
let horas = DiaHoje.getHours()
let minutos = DiaHoje.getMinutes()
let segundos = DiaHoje.getSeconds()
let paragrafoh = document.getElementById("horas")
let paragrafom = document.getElementById("minutos")
let paragrafos = document.getElementById("segundos")
let horasf = 21 -  horas 
let minutosf =  59 -  minutos 
let segundosf =  59 -  segundos 
let resposta = document.getElementById("resposta")
if (horasf == 0 && minutosf == 0 && segundosf <= 10){
    resposta.innerHTML = `Contagem regressiva`
    resposta.style.color = 'red'
    paragrafoh.style.color = 'red'
    paragrafom.style.color = 'red'
    paragrafos.style.color = 'red'    
} else if (horasf == 0 && minutosf <= 30 && segundosf <= 59){
    resposta.innerHTML = `Está quase chegando a hora se prepara arrombado`
    resposta.style.color = 'orange'
    paragrafoh.style.color = 'orange'
    paragrafom.style.color = 'orange'
    paragrafos.style.color = 'orange'    
} else {
    resposta.innerHTML = `Espere ainda, ainda sobra tempo, aproveita para descasar`
    resposta.style.color = 'green'
    paragrafoh.style.color = 'green'
    paragrafom.style.color = 'green'
    paragrafos.style.color = 'green'    
}
if (horasf < 10){
   horasf = "0"+horasf
}
if (minutosf < 10){
    minutosf = "0"+minutosf
}
if (segundosf < 10){
    segundosf = "0"+segundosf
}

paragrafoh.innerHTML = `${horasf}`
paragrafom.innerHTML = `${minutosf}`
paragrafos.innerHTML = `${segundosf}`
})


