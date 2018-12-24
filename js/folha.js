function calcularFolha() {
    let dado = getDados()
    console.log(dado)
    let provento = calcularProventos(dado)
    console.log(provento)
    let desconto = calcularDescontos(provento)
    console.log(desconto)
    //let salarioLiquido = provento.total - desconto.total
    //console.log(salarioLiquido)
}

function getDados () {
    return {
        empregado : getInputSeletor('txtEmpregado'),
        salario : getInputSeletor('txtSalario')
    }
}

function getInputSeletor(value) {
    return document.getElementById(value).value
}