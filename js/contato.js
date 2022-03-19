// Global
// 1 - O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header');

header[0].style.backgroundColor ="#2E948A";

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
document.querySelector('#menu_opcoes nav a').href='cursos.html';


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