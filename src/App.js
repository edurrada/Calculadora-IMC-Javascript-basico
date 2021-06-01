import "./styles.css";

export default function App() {
return (

<div className="App">
<body>

<label>Peso<br/> <input id="peso"/></label><br/>
<label>Altura<br/> <input id="altura"/></label><br/>


<button id="botao">Calcular IMC</button>
  
<div id="resultado"></div>

</body>
</div>

);
}
