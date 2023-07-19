     import { buscaProdutos } from './read-com-get.js'
    
     buscaProdutos();
       document.querySelector('#listaProdutos').addEventListener('click', event => {
          
          if (event.target.closest('ul').classList.contains('produto')) {
            
              const elementoBase = event.target.closest('ul');

              document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

              document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

              document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;
          }

          verificaSeInputsEstaoPreenchidos();
       });


       function verificaSeInputsEstaoPreenchidos() {

            const idPreenchido = document.querySelector('input#id').value !== "";
            const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
            const precoPreenchido = document.querySelector('input#preco').value !== "";

                // Verifica se há algum input preenchido
                if (idPreenchido || descricaoPreenchido || precoPreenchido) {
                     document.querySelector('button#btCancelar').removeAttribute('disabled');
                        } else {
                        document.querySelector('button#btCancelar').setAttribute('disabled', '');
                        }

                 // Faça o mesmo com o botão "Atualizar", para que ele fique ativo apenas se houver algum dado para ser atualizado e o campo ID estiver preenchido.
                if(idPreenchido) {
                 document.querySelector('button#btAtualizar').removeAttribute('disabled');
                    } else {
                 document.querySelector('button#btAtualizar').setAttribute('disabled', '');
                }
            }

        // Evento do botão Atualizar que dispara a requisição de PUT  
       document.querySelector('#btAtualizar').addEventListener('click',()=>{

        const dados = {
            'id': null,
            'descricao': document.querySelector('input#descricao').value,
            'preco': document.querySelector('input#preco').value,
            'atualizado': true
        }
        console.log(JSON.stringify(dados))

        const id = document.querySelector('input#id').value;


        fetch(`http://localhost:3000/produtos/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resposta => {
            if(resposta.ok) {
                alert('produto atualizado');
                buscaProdutos();
            }
        });

       });
            
        
    