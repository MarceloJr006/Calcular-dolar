let dolar = 0;

fetch('https://api.hgbrasil.com/finance?format=json-cors&key=2b375e9f')
  .then(response => response.json())
  .then(data => {
    dolar = data.results.currencies.USD.buy;
    document.getElementById('dolar').innerHTML = dolar.toFixed(2);
  })
  .catch(error => console.error(error));

document.getElementById('btn-convert').addEventListener('click', function() {
  const valorReais = document.getElementById('valor-reais').value;
  const valorDolar = valorReais / dolar;
  document.getElementById('valor-dolar').innerHTML = valorDolar.toFixed(2);
});
