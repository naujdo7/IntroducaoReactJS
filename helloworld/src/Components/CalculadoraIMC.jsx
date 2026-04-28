import { useState } from 'react';

const CalculadoraIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultadoTexto, setResultadoTexto] = useState('');
  const [resultadoImc, setResultadoImc] = useState('');
  const [cor, setCor] = useState('#333');

  const calcularIMC = (event) => {
    event.preventDefault();

    const alturaNum = parseFloat(altura.replace(',', '.'));
    const pesoNum = parseFloat(peso.replace(',', '.'));

    if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
      setResultadoTexto('Por favor, insira valores válidos para altura e peso.');
      setResultadoImc('');
      setCor('red');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcFormatado = imc.toFixed(1);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    setResultadoImc(imcFormatado);
    setResultadoTexto(`– ${classificacao}`);
    setCor('#333');
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (ex: 1.75): </label>
          <input 
            type="text" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)} 
          />
        </div>
        <br />
        <div>
          <label>Peso (ex: 70.5): </label>
          <input 
            type="text" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
          />
        </div>
        <br />
        <button type="submit">Calcular</button>
      </form>

      {resultadoTexto && (
        <div style={{ color: cor, marginTop: '15px' }}>
          {resultadoImc ? (
            <p>Seu IMC é <strong>{resultadoImc}</strong> {resultadoTexto}</p>
          ) : (
            <p>{resultadoTexto}</p>
          )}
        </div>
      )}
    </div>
  );
};


export default CalculadoraIMC;
