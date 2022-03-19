// Global
// 1 - O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header');

header[0].style.backgroundColor ="#2E948A";

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
document.querySelector('#menu_opcoes nav a').href='cursos.html';


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

