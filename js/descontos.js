function calcularDescontos(provento) {
    return {
        inss : calcularINSS(provento.total),
        irrf : calcularIRRF(provento.total), 
        total : 0
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
    //TODO pensar na lógica do irrf
}