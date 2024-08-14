document.getElementById('executeBtn').addEventListener('click', function() {
    const sqlInput=document.getElementById('sqlInput').value;
    const resultDiv=document.getElementById('result');

    // Simulação básica de execução SQL
    if (sqlInput.toLocaleLowerCase().includes('select')) {
        resultDiv.innerHTML='<p>Resultado da consulta: Exemplo de dados retornados.</p>';
    } else if (sqlInput.toLocaleLowerCase().includes('insert')) {
        resultDiv.innerHTML='<p>Dados inseridos com sucesso!</p>';
    } else if (sqlInput.toLocaleLowerCase().includes('update')) {
        resultDiv.innerHTML='<p>Dados atualizados com sucesso!</p>';
    } else if (sqlInput.toLocaleLowerCase().includes('delete')) {
        resultDiv.innerHTML='<p>Dados deletados com sucesso!</p>';
    } else {
        resultDiv.innerHTML='<p>Erro: Comando SQL não reconhedido ou não suportado.</p>';
    }
})