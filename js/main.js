function fazerCalculo() {
    let empregado = obterEmpregado()
    let folha = calcularFolha(empregado)
    mostrarFolha(folha)
}

function obterEmpregado () {
    return {
        empregado : getInputSeletor('#txtEmpregado'),
        salario : parseFloat(getInputSeletor('#txtSalario'))
    }
}

function getInputSeletor(value) {
    return document.querySelector(value).value
}

//Função que irá gerar uma table para ser mostrada na página html
function mostrarFolha(object) {
    console.log(object)
    document.getElementById('result-folha').innerHTML = `
    <h3>Folha de pagamento do empregado ${object.empregado.empregado} </h3>
    <table>
        <tr>
            <th>Descrição</th>
            <th>Provento</th>
            <th>Desconto</th>
        </tr>
        <tr>
            <td>Salário</td>
            <td>${(object.provento.salario).toFixed(2)}</td>
            <td></td>
        </tr>
        <tr>
            <td>INSS</td>
            <td></td>
            <td>${(object.desconto.inss).toFixed(2)}</td>
        </tr>
        <tr>
            <td>IRRF</td>
            <td></td>
            <td>${(object.desconto.irrf.total).toFixed(2)}</td>
        </tr>
        <tr>
            <td></td>
            <td><strong>total dos proventos</strong</td>
            <td><strong>total dos descontos</storng></td>
        </tr>
        <tr>
            <td></td>
            <td>${(object.provento.total).toFixed(2)}</td>
            <td>${(object.desconto.total).toFixed(2)}</td>
        </tr>
        <tr>
            <td></td>
            <td>Salário Líquido</td>
            <td>${(object.salarioLiquido).toFixed(2)}</td>
        </tr>
    </table>`
}