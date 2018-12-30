function calcularFolha(empregado) {
    let provento = calcularProventos(empregado)
    let desconto = calcularDescontos(provento)
    let salarioLiquido = obterTotalFolha(provento, desconto)

    return {empregado, provento, desconto, salarioLiquido};
}

function obterTotalFolha(provento, desconto) {
    return provento.total - desconto.total
}