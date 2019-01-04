function calcularProventos(object) {
    let diasTrabalhados = object.diasTrabalhados
    let salario = calcularSalario(object.salario, diasTrabalhados)
    let total = obterTotalProventos(salario.total)

    return  {salario, total}
}

function calcularSalario(salarioBruto, ref = 30) {
    let total = ref != 30 ? obterSalarioProporcional(salarioBruto, ref) : salarioBruto
    return {salarioBruto, ref, total}
}

function obterSalarioProporcional(salarioBruto, ref) {
    return (salarioBruto / 30) * ref
}

function obterTotalProventos (salarioBruto) {
    return salarioBruto
}