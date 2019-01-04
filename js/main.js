function fazerCalculo() {
    let empregado = obterEmpregado()
    let folha = calcularFolha(empregado)
    mostrarFolha(folha)
}

function obterEmpregado () {
    return {
        empregado : getInputSeletor('#txtEmpregado'),
        salario : parseFloat(getInputSeletor('#txtSalario')),
        diasTrabalhados: parseFloat(getInputSeletor('#txtDiasTrabalhados'))
    }
}

function getInputSeletor(value) {
    return document.querySelector(value).value
}

//Função que irá gerar uma table para ser mostrada na página html
function mostrarFolha(object) {
    console.log(object)
    document.getElementById('result-folha').innerHTML = `
    <h3>resultado da folha do empregado ${object.empregado.empregado} </h3>
    <table>
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Ref</th>
                <th>Provento</th>
                <th>Desconto</th>
            </tr>
        </thead>
        <tbody>
            ${campoFolha('SALÁRIO', object.provento.salario, 'provento')}
            ${campoFolha('INSS', object.desconto.inss, 'desconto')}
            ${campoFolha('IRRF', object.desconto.irrf, 'desconto')}
            <tr>
                <td></td>
                <td></td>
                <td><strong>total dos proventos</strong</td>
                <td><strong>total dos descontos</storng></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>${(object.provento.total).toFixed(2)}</td>
                <td>${(object.desconto.total).toFixed(2)}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>Salário Líquido</td>
                <td>${(object.salarioLiquido).toFixed(2)}</td>
            </tr>
        </tbody>
    </table>`
}

function campoFolha(descricao, object, tipo) {
    return `
    <tr>
        <td>${descricao}</td>
        <td>${(object.ref).toFixed(2)}</td>
        <td>${tipo ==='provento' ? (object.total).toFixed(2): ''}</td>
        <td>${tipo ==='desconto' ? (object.total).toFixed(2) : ''}</td>
    </tr>`
}