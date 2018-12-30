function calcularDescontos(provento) {
    let inss = calcularINSS(provento.total)
    let irrf = calcularIRRF(provento.total, inss.total)
    let total = obterTotalDescontos(inss.total, irrf.total)

    return {inss, irrf , total}
}

/* Funções relativas do cálculo do inss */

function calcularINSS(salarioBruto) {
    let baseCalculo = salarioBruto > 5645.8 ? 5645.8 :  salarioBruto
    let aliquota = obterAliquotaINSS(baseCalculo)
    let total = obterResultadoINSS(baseCalculo, aliquota)

    return {baseCalculo, aliquota, total}
}

function obterBaseCalculoINSS(salarioBruto) {
    if (salarioBruto > 5645.8) return 5645.8
    return salarioBruto
}

function obterAliquotaINSS(baseCalculoINSS) {
    if (baseCalculoINSS <= 1693.72) {
        return 0.08
    } else if (baseCalculoINSS >= 1693.73 && baseCalculoINSS <= 2822.9) {
        return 0.09
    } else if (baseCalculoINSS >= 2822.91 && baseCalculoINSS <= 5645.8) {
        return 0.11
    } else {
        return 0.11
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

function obterBaseCalculoIRRF(salarioBruto, inss, dependentes = 0) {
    return (salarioBruto - inss) - (dependentes * 176.8)
}

function obterAliquotaIRRF(baseCalculo) {
    if (baseCalculo <= 1903.99) {
        return 0
    } else if (baseCalculo >= 1903.99 && baseCalculo <= 2826.65) {
        return 0.07
    } else if (baseCalculo >= 2826.66 && baseCalculo <= 3751.05) {
        return 0.15
    } else if (baseCalculo >= 3751.06 && baseCalculo <= 4664.68) {
        return 0.225
    } else {
        return 0.275
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
function obterTotalDescontos(inss, irrf) {
    return inss + irrf
}