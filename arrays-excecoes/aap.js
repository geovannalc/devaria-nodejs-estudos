try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    const listaDeProdutosSolicitadosIndisponiveis = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosIndisponiveis.forEach(argumento => console.log(`Este produto nos não temos: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel excutar pedido de compra')
}

