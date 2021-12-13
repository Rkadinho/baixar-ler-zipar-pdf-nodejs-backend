var resp = require('readline-sync');
const baixar = require('download-pdf');

const pdf = 'https://www.gov.br/ans/pt-br/arquivos/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-tiss/padrao-tiss/padrao-tiss_componente-organizacional_202111.pdf';

const config = {
    directory: './Pdfs/',
    filename: 'Padrão Tiss Atualizado 2021-11.pdf'
}

var resposta = resp.question('deseja baixar o arquivo?\n')

if(resposta == 'sim'){
    baixar(pdf, config, function(err){
        if (err) throw err 
        console.log('Pdf Baixado!')
    })
}else if(resposta == 'nao'){
    console.log('programa encerrado!')
}




