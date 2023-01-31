import './assets/css/style.css';
import generatePass from './modules/generatePass';

const cq1 = document.querySelector('.char-quant');
const cb1 = document.querySelector('.cb1');
const cb2 = document.querySelector('.cb2');
const cb3 = document.querySelector('.cb3');
const cb4 = document.querySelector('.cb4');
const res = document.querySelector('.res');
const err = document.querySelector('.err');

document.getElementById("submit")
  .addEventListener("click", function(event) {
    generatePassword();
    event.preventDefault();
  });


function generatePassword(){
  let result = '';

  if(cq1.value < 6 || cq1.value > 50){
    err.innerHTML = `<p class="color-error">Por favor digite a quantidade de caracteres entre 6 e 50</p>`;
    
  }else{
    if(!cb1.checked && !cb2.checked && !cb3.checked && !cb4.checked){
      err.innerHTML = `<p class="color-error">Por favor, adicione tipo de charset para a senha</p>`;
    }else{
      result = generatePass(cb1.checked,cb2.checked,cb3.checked,cb4.checked);
      err.innerHTML = '';
      res.innerHTML = `<p class="res">${result}</p>`;
    }
  }
}