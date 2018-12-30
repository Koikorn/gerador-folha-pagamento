function calcularProventos(object) {
    let salario = calcularSalario(object.salario)
    let total = obterTotalProventos(salario.total)

    return  {salario, total}
}

function calcularSalario(salarioBruto, diasTrabalhados = 30) {
    let total = diasTrabalhados != 30 ? obterSalarioProporcional(salarioBruto, diasTrabalhados) : salarioBruto
    return {salarioBruto, diasTrabalhados, total}
}

function obterSalarioProporcional(salarioBruto, diasTrabalhados) {
    return (salarioBruto / 30) * diasTrabalhados
}

function obterTotalProventos (salarioBruto) {
    return salarioBruto
}