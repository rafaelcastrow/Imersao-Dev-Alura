function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReais = parseFloat(valor);
    var dolar = 5.24;
    var euro = 6.19;

    var valorEmDolar = valorEmReais / dolar;
    var valorEmEuro = valorEmReais / euro;

    var elementoValorConvertidoDolar = document.getElementById("valorConvertidoDolar");
    var elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
    var valorConvertidoDolar = `O resultado em Dolar é U$${valorEmDolar.toFixed(1)}`
    elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
    var valorConvertidoEuro = `O resultado em Euro é Є${valorEmEuro.toFixed(1)}`
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}