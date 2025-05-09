function generateNumber(){

const min = Math.ceil(document.querySelector(".select1").value)
const max = Math.floor(document.querySelector(".select2").value)
let num = document.querySelector(".resultado")

if(min >= max){
    alert("O valor mínimo não pode ser IGUAL ou MAIOR do que valor máximo! ")
}
else{
const result = Math.floor(Math.random() * (max - min +1)) + min;

let num = document.querySelector(".resultado").innerHTML = result;
}
}
