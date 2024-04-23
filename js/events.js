//Arquivo que contém o código relacionado a eventos de clique e eventos de mudança.

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona evento de clique aos links de navegação
    document.querySelectorAll(".nav-link").forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        // Oculta todos os elementos com a classe "content"
        document.querySelectorAll(".content").forEach(function(content) {
          content.style.display = "none";
        });
  
        // Exibe o conteúdo correspondente ao link clicado
        document.querySelector(this.getAttribute("href")).style.display = "block";
      });
    });
  
    // Adiciona evento de mudança ao campo de quantidade
    document.querySelector("#quantidade").addEventListener("input", function() {
      // Adicione a lógica para atualizar o preço total com base na quantidade selecionada
    });
  
    // Adiciona evento de mudança ao campo de cor (supondo que existe um campo com o id "cor")
    document.querySelector("#cor").addEventListener("change", function() {
      // Adicione a lógica para atualizar o preço total com base na cor selecionada
    });
  });

  
  