function calcularDescontos(provento) {
    let inss = calcularINSS(provento.total)
    let irrf = calcularIRRF(provento.salario, inss)

    return {
        inss : inss,
        irrf : irrf, 
        total : total(inss, irrf)
    }
}

/* Funções relativas do cálculo do inss */

function calcularINSS(salarioBruto) {
    let baseCalculo = salarioBruto > 5645.8 ? 5645.8 :  salarioBruto
    let aliquota = obterAliquotaINSS(baseCalculo)
    let total = obterResultadoINSS(baseCalculo, aliquota)

    return {baseCalculo, aliquota, total}
}

function obterAliquotaINSS(baseCalculo) {
    if (baseCalculo <= 1693.72) {
        return 0.08
    } else if (baseCalculo >= 1693.73 && baseCalculo <= 2822.9) {
        return 0.09
    } else if (baseCalculo >= 2822.91 && baseCalculo <= 5645.8) {
        return 0.11
    } else {
        return 5645.8 * 0.11
    }
}

function obterResultadoINSS(baseCalculo, aliquotaINSS) {
    return baseCalculo * aliquotaINSS
}

/* Funções relativas do cálculo do irrf */

function calcularIRRF(salarioBruto, inss) {
    let baseCalculo = obterBaseCalculoIRRF(salarioBruto, inss)
    let aliquota = obterAliquotaIRRF(baseCalculo)
    let taxaDeducao = obtertaxaDeducaoIRRF(baseCalculo)
    let total = obterResultadoIRRF(baseCalculo, aliquota, taxaDeducao)

    return {baseCalculo, aliquota, taxaDeducao, total}
}

function obterBaseCalculoIRRF(salarioBruto, inss) {
    return salarioBruto - inss
}

function obterAliquotaIRRF(baseCalculo) {
    if (baseCalculo <= 1903.99) {
        return 0
    } else if (baseCalculo >= 1903.99 && baseCalculo <= 2826.65) {
        return 0.07
    } else if (baseCalculo >= 2826.66 && baseCalculo <= 3751.05) {
        return 0.15
    } else if (baseCalculo >= 3751.06 && baseCalculo <= 4664.68) {
        return 22.5
    } else {
        return 27.5
    }
}

function obtertaxaDeducaoIRRF(baseCalculo) {
    if (baseCalculo <= 1903.99) {
        return 0
    } else if (baseCalculo >= 1903.99 && baseCalculo <= 2826.65) {
        return 142.8
    } else if (baseCalculo >= 2826.66 && baseCalculo <= 3751.05) {
        return 354.8
    } else if (baseCalculo >= 3751.06 && baseCalculo <= 4664.68) {
        return 636.13
    } else {
        return 869.36
    }
}

function obterResultadoIRRF(baseCalculo, aliquota, taxaDeducao) {
    return (baseCalculo * aliquota) - taxaDeducao
}

//Melhorar o funcionamento da função
function total ( inss, irrf ) {
    return inss.total + irrf.total
}