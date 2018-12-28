function calcularFolha(empregado) {
    let provento = calcularProventos(empregado)
    let desconto = calcularDescontos(provento)
    let salarioLiquido = obterTotal(provento, desconto)

    return {empregado, provento, desconto, salarioLiquido};
}

function obterTotal(provento, desconto) {
    return provento.total - desconto.total
}