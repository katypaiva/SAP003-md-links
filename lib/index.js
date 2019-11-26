function mdLinks() {
    const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
    let arr = [];
    const str = `Uma comunidade open source nos propôs criar uma ferramenta, usando
    [Node.js](https://nodejs.org/), que leia e analise arquivos no formato
    \`Markdown\`, para verificar os arquivos que contenham links e mostrar algumas
    estatísticas.
    
    ![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)
    
    ## 2. Resumo do projeto
    
    [Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
    construído com o [motor de JavaScript V8 do
    [Chrome](https://developers.google.com/v8/). Ele vai nos permitir executar o
    JavaScript no nosso sistema operacional, seja no seu computador ou em um
    servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
    redes e etc.`;
    let m;
    
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
        arr.push({href: m[1], text: m[2]});
    }
    
    console.log(arr);

}
mdLinks()