// Arquivo que contém o código relacionado ao bloqueio de classificação para comentários.

document.addEventListener("DOMContentLoaded", function() {
    // Bloqueia a classificação para todos os comentários
    document.querySelectorAll(".star").forEach(function(star) {
      star.classList.remove("star");
      star.classList.add("star-disabled");
    });
  });
  