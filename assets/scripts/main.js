const inpItem = document.querySelector(".item")
const inpName = document.querySelector(".name")
const btnEnviar = document.querySelector(".enviar")
const btnSortear = document.querySelector(".sortear")
const result = document.querySelector(".result")

let data = []

const sortear = (min, max) => Math.floor(Math.random() * (max - min) + min)

btnEnviar.addEventListener("click", ()=>{
    data.push(inpName.value)
    inpName.value = ""
})

btnSortear.addEventListener("click",()=>{
    result.innerHTML = `${data[sortear(0, data.length)]} ganhou ${inpItem.value}`
})


