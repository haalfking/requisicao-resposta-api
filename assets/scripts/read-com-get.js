function buscaProdutos() {

    fetch('http://localhost:3000/produtos',{
    method: 'GET',
    headers: {
        'content-type':'application/json'
    }
})
      .then(resposta => resposta.json())
      .then(resposta => {

        document.querySelector('#listaProdutos').innerHTML = '';

        const tituloProduto = document.createElement('h2');
        tituloProduto.classList.add('titulo-lista');
        tituloProduto.innerHTML = 'Lista de Produtos';
        document.querySelector('#listaProdutos').appendChild(tituloProduto);


         for(let i=0; i< resposta.length; i++){

            const ul = document.createElement('ul');
            ul.classList.add('produto');

            if (resposta[i].atualizado) {
                ul.style.color = 'blue';
            }
        
            const liId = document.createElement('li');
            liId.setAttribute('data-produto', 'id');
            liId.innerHTML = resposta[i].id;
            liId.classList.add('produto-id');

            const liDescricao = document.createElement('li');
            liDescricao.setAttribute('data-produto', 'descricao');
            liDescricao.innerHTML = resposta[i].descricao;

            const liPreco = document.createElement('li');
            liPreco.setAttribute('data-produto', 'preco');
            liPreco.innerHTML = resposta[i].preco;

            ul.append(liId, liDescricao, liPreco);

            document.querySelector('#listaProdutos').appendChild(ul);
      }
  });   
}

export { buscaProdutos };