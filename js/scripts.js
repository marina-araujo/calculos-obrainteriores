document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-revestimentos").addEventListener("submit", function (event) {
        event.preventDefault();
        calcularRevestimentos();
    });
    
    document.getElementById("form-tinta").addEventListener("submit", function (event) {
        event.preventDefault();
        calcularTinta();
    });

    // Mostra a primeira seção ao carregar a página
    showPage('revestimentos');
});

function parseInput(value) {
    // Permite . e , como separadores decimais
    value = value.replace(",", ".");
    return parseFloat(value);
}

function calcularRevestimentos() {
    let largura = parseInput(document.getElementById("largura").value);
    let altura = parseInput(document.getElementById("altura").value);
    let larrev = parseInput(document.getElementById("larrev").value);
    let altrev = parseInput(document.getElementById("altrev").value);
    let qtdCaixa = parseInt(document.getElementById("qtd-caixa").value);

    if (isNaN(largura) || isNaN(altura) || isNaN(larrev) || isNaN(altrev) || isNaN(qtdCaixa)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let areaTotal = largura * altura;
    let areaPeça = larrev * altrev;
    let qtdPeças = Math.ceil(areaTotal / areaPeça);
    let caixasNecessarias = Math.ceil(qtdPeças / qtdCaixa);

    document.getElementById("resultado-revestimentos").innerHTML = `Área total: ${areaTotal.toFixed(2)} m² <br> Peças necessárias: ${qtdPeças} <br> Caixas necessárias: ${caixasNecessarias}`;
}

function calcularTinta() {
    let largura = parseInput(document.getElementById("largura-tinta").value);
    let altura = parseInput(document.getElementById("altura-tinta").value);
    let rendimento = parseInput(document.getElementById("rendimento").value);

    if (isNaN(largura) || isNaN(altura) || isNaN(rendimento)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let areaTotal = largura * altura;
    let quantidadeTinta = areaTotal / rendimento;

    document.getElementById("resultado-tinta").innerHTML = `Área total: ${areaTotal.toFixed(2)} m² <br> Litros de tinta necessários: ${quantidadeTinta.toFixed(2)} L`;
}

function showPage(pageId) {
    document.querySelectorAll(".container").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(pageId).classList.remove("hidden");
}