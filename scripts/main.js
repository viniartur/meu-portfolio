document.addEventListener('DOMContentLoaded', function() {
    // Carrega o README.md do seu repositório
    fetch('https://raw.githubusercontent.com/viniartur/viniartur/main/README.md')
        .then(response => response.text())
        .then(markdown => {
            // Converte Markdown para HTML
            document.getElementById('readme-content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('Erro ao carregar README:', error);
            document.getElementById('readme-content').innerHTML = 
                '<p>Não foi possível carregar o perfil. Visite meu <a href="https://github.com/viniartur">GitHub</a>.</p>';
        });
    
    // Botão de contato simples
    document.querySelector('.btn-contact')?.addEventListener('click', function() {
        alert('Entre em contato pelo LinkedIn ou email!');
    });
});

// Mantenha as funções fetchRepositories e getLanguageColor do exemplo anterior