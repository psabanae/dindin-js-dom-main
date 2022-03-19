// Global
// 1 - O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header');

header[0].style.backgroundColor ="#2E948A";

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
document.querySelector('#menu_opcoes nav a').href='cursos.html';


//Checar filename
const url = window.location.pathname;
const filename = url.substring(url.lastIndexOf('/')+1);


if (filename == "index.html") {
// Home

// 1 - No banner da home, está faltando centralizar os elementos ﬁlhos da section que tem o id #introducao.
document.getElementById('introducao').style.justifyContent = "center";

// 2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector('.depoimento h3').innerHTML = "O que falam sobre nós";

// 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
document.querySelectorAll('.titulo h3')[1].innerHTML = "Mais conteúdo pra você";

// 4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
const lista = document.querySelectorAll('.titulo').forEach((query) => {
    query.style.textTransform = 'uppercase';
});

// 5 - O botão "ver todos os posts" deve ter um link que direciona para o arquivoblog.html
document.getElementById('todos_posts').setAttribute('href', 'blog.html');

// 6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia.

document.getElementById("investimentos_poupando_independencia").innerHTML += 
'<div id="independencia"> <img src="imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"> <h2>Independência Financeira</h2> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> <a class="comecar_agora" href="./curso.html">começar agora</a></div>';
} else {
//Contato
//1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
document.getElementsByTagName('form')[0].action = 'sucesso.html';

//2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

let newInput = document.createElement("input");
newInput.placeholder = "Telefone";

let formInput = document.getElementsByTagName('form')[0];

formInput.insertBefore(newInput, formInput.children[3]);

// 3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;

document.getElementsByTagName("textarea")[0].style.boxSizing = "border-box";

// 4 - O botão não está do tamanho adequado, precisa ter uma largura maior;

document.getElementById("enviar").style.width = "10em"

// 5 -  Abaixo da section do formulário, adicione uma seção de comentário igual a página Home (Jeito fácil e mais trabalhoso).
document.getElementsByTagName("main")[0].innerHTML += 
'<section class="titulo depoimento"> <h3>Depoimentos</h3> </section> <section id="falam_sobre"> <div class="depoimentos"> <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." <br><br> Wally, 25 </p> </div> <div class="depoimentos"> <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." <br><br> Jaden Smith, 23 </p></div> <div class="depoimentos"> <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim"> <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." <br><br> Whoopi Goldberg, 37 </p> </div> <div class="depoimentos"> <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim"> <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam." <br><br> Janes Joplin, 29</p> </div> </section>';

}
