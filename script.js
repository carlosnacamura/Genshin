setInterval(function time(){
let DiaHoje = new Date()
let horas = DiaHoje.getHours()
let minutos = DiaHoje.getMinutes()
let segundos = DiaHoje.getSeconds()
let paragrafoh = document.getElementById("horas")
let paragrafom = document.getElementById("minutos")
let paragrafos = document.getElementById("segundos")
let horasf = 22 -  horas
let minutosf =  59 -  minutos
let segundosf =  59 -  segundos
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


