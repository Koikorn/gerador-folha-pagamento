function calcularFolha() {
    let dado = getDados()
    let provento = calcularProventos(dado)
    let desconto = calcularDescontos(provento)
    let salarioLiquido = provento.total - desconto.total
    mostrarFolha({dado, provento, desconto, salarioLiquido})
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

function mostrarFolha(object) {
    console.log(object)
    document.getElementById('result-folha').innerHTML = `
    <h3>Folha de pagamento do empregado ${object.dado.empregado} </h3>
    <table>
        <tr>
            <th>Descrição</th>
            <th>Provento</th>
            <th>Desconto</th>
        </tr>
        <tr>
            <td>Salário</td>
            <td>${object.provento.salario}</td>
            <td></td>
        </tr>
        <tr>
            <td>INSS</td>
            <td></td>
            <td>${object.desconto.inss}</td>
        </tr>
        <tr>
            <td>IRRF</td>
            <td></td>
            <td>${object.desconto.irrf}</td>
        </tr>
        <tr>
            <td></td>
            <td>total dos proventos</td>
            <td>total dos descontos</td>
        </tr>
        <tr>
            <td></td>
            <td>${object.provento.total}</td>
            <td>${object.desconto.total}</td>
        </tr>
        <tr>
            <td></td>
            <td>Salário Líquido</td>
            <td>${object.salarioLiquido}</td>
        </tr>
    </table>`
}