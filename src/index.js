import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


document.querySelector('#botao').addEventListener('click', function () {
  var peso = document.querySelector('#peso').value;
  var altura = document.querySelector('#altura').value;
  var imc = peso / (altura * altura);
  var hr = document.createElement('hr');
  var spanIMC = document.createElement('span');


  var classe = '';
  if (imc < 18.5){
    classe = 'magreza';
  }
  else if (imc > 18.5 && imc <= 24.9){
    classe = 'normal';
  }
  else if (imc >= 25 && imc <= 29.9){
    classe = 'sobrepeso';
  }
  else if (imc >= 30 && imc <= 39.9){
    classe = 'obesidade';
  }
  else if(imc > 40){
    classe = 'obesidade grave'
  }


  spanIMC.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e é classificado como ' + classe + '.';
  
  var divResultado = document.querySelector('#resultado');

  divResultado.appendChild(hr);
  divResultado.appendChild(spanIMC);
});
