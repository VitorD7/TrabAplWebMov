// Executa o código quando o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links dentro do menu de navegação
    var links = document.querySelectorAll("nav ul li a");

    // Adiciona um evento de clique para cada link
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Obtém o id da seção de destino a partir do atributo href do link
            var targetId = this.getAttribute("href").substring(1);

            // Seleciona todas as seções do documento
            var sections = document.querySelectorAll("section");

            // Itera sobre cada seção e exibe ou esconde com base no id
            sections.forEach(function(section) {
                if (section.id === targetId) {
                    section.style.display = "block"; // Exibe a seção alvo
                } else {
                    section.style.display = "none"; // Esconde as outras seções
                }
            });

            // Previne o comportamento padrão do link (navegação)
            event.preventDefault();
        });
    });
});
