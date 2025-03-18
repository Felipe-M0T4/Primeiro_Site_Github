//alert('Executou o javascript !!!');

function mostrarResultados () {
  //alert(document.getElementById('email').value + "\n" + document.getElementById('senha').value);
    var EMAIL = document.getElementById('inputEmail').value;
    var SENHA = document.getElementById('inputSenha').value;
    if (EMAIL == 'felipe@gmail.com' && SENHA=='1234'){
      alert('acertou a senha');
      window.location.href="file://192.168.15.18/Alunos/Cp3/Felipe%20Mota/ProjetoLogin/paginaPrincipal.html"
  } else{
      alert('senha ou email incorretos');
  }
  }
//MODO NOTURNO & DIURNO
function diurno(){
  document.body.style.backgroundColor="white";
  document.body.style.color="black";
  let sidebar_historia = document.getElementById("sidebar_historia");;
}
function noturno(){
  document.body.style.backgroundColor="rgb(19, 19, 19)";
  document.body.style.color="gainsboro";
}
function neutro(){
  document.body.style.backgroundColor="rgb(23,23,23)"
}



//SCRIPT DA LOJA
//funcão para adicionar o produto ao carrinho
// Função para adicionar produto ao carrinho
document.querySelectorAll('.adicionar').forEach(button => {
  button.addEventListener('click', function() {
      const produtoId = this.getAttribute('data-id');
      const produtoNome = this.getAttribute('data-nome');
      const produtoPreco = parseFloat(this.getAttribute('data-preco'));

      // Recupera o carrinho do localStorage
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Adiciona o produto ao carrinho
      carrinho.push({ id: produtoId, nome: produtoNome, preco: produtoPreco });

      // Salva o carrinho de volta no localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));

      alert("$" (produtoNome), "foi adicionado ao carrinho!");
  });
});
// Carrega os produtos no carrinho
if  (window.location.pathname.includes('carrinho.html')) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const listaCarrinho = document.getElementById('lista-carrinho'); 
  const  totalValor  =  document.getElementById('total-valentia'); 

  

  //  Exibe  os  produtos  no  carrinho
  let total = 0; 
  carrinho.
  carrinho.
  carrinhoforEach(produto => {
      const item = document.createElement('li');
      item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`; // Correção aqui
      listaCarrinho.appendChild(item);
      total += produto.preco;
  });

  // Exibe o total
  totalValor.textContent = total.toFixed(2);
}
//BOTÃO HISTÓRIA__________________________________________________________________
function show(){
  const show_modal1 = document.getElementById("show_modal1");
  show_modal1.addEventListener('click', ()=>{
    const modal1 = document.getElementById("modal1");
    modal1.showModal();
  })
}