let input = document.querySelector('input');
let value_money = document.getElementById('value_money');
let select = document.querySelector('select');

let list_money = [["UF"],["Dólar"],["Euro"],["UTM"],["Bitcoin"]];

async function getMoneyChanges() {
    const res = await fetch("https://mindicador.cl/api");
    const data = await res.json();
    list_money[0].push(Number(data.uf.valor));
    list_money[1].push(Number(data.dolar.valor));
    list_money[2].push(Number(data.euro.valor));
    list_money[3].push(Number(data.utm.valor));
    list_money[4].push(Number(data.bitcoin.valor));
}

getMoneyChanges();

let text = `<option value = "Seleccione moneda" class="text-center">Seleccione moneda</option>`;

for (i=1; i<=5; i++) {
    text += `<option value = ${i-1} class="text-center">${list_money[i-1]}</option>`;
}

select.innerHTML = text;

function moneyConvert() {
    if (select.value == "Seleccione moneda") {
        value_money.innerHTML = "...";
    } else {
        value_money.innerHTML = Number(input.value/list_money[select.value][1]).toFixed(2) + " " + list_money[select.value][0];
    }
    graph();
}

function graph() {
    console.log("Graficando");
}