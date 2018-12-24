function calcularDescontos(provento) {
    let inss = calcularINSS(provento.total)
    let irrf = calcularIRRF(provento.salario, inss)

    return {
        inss : inss,
        irrf : irrf, 
        total : total(inss, irrf)
    }
}


function calcularINSS(salario) {
    if (salario <= 1693.72) {
        return salario * 0.08
    } else if (salario >= 1693.73 && salario <= 2822.9) {
        return salario * 0.09
    } else if (salario >= 2822.91 && salario <= 5645.8) {
        return salario * 0.11
    } else {
        return 5645.8 * 0.11
    }
}

function calcularIRRF(salario, inss) {
    let baseCalculo = salario - inss

    if (baseCalculo <= 1903.99) {
        return 0
    } else if (baseCalculo >= 1903.99 && baseCalculo <= 2826.65) {
        return (baseCalculo * 0.07) - 142.8
    } else if (baseCalculo >= 2826.66 && baseCalculo <= 3751.05) {
        return (baseCalculo * 0.15) - 354.8
    } else if (baseCalculo >= 3751.06 && baseCalculo <= 4664.68) {
        return (baseCalculo * 22.5) - 636.13
    } else {
        return (baseCalculo * 27.5) - 869.36
    }
}

//Melhorar o funcionamento da função
function total ( inss, irrf ) {

    return inss + irrf
}