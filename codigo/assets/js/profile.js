document.addEventListener('DOMContentLoaded', (event) => {
    const userProfile = {
        "photo": "../assets/images/User Photo.png",
        "name": "@user06475",
        "bio": "Desenvolvedor apaixonado por tecnologia, especializado em Python e JavaScript. Adoro resolver problemas complexos e criar soluções inovadoras. 🚀💻<br>#TechLover #CodeLife",
        "socialMedia": [
            {
                "platform": "GitHub",
                "handle": "github.com/login"
            },
            {
                "platform": "Instagram",
                "handle": "instagram.com/"
            },
            {
                "platform": "LinkedIn",
                "handle": "linkedin.com/"
            }
        ],
        "score": 29,
        "rankingPosition": 27,
        "currentLevel": "Iniciante"
    };

    document.getElementById('user-photo').src = userProfile.photo;
    document.getElementById('user-name').textContent = userProfile.name;
    document.getElementById('user-bio').innerHTML = `<strong>Bio:</strong> ${userProfile.bio}`;

    const socialMediaLinks = document.getElementById('social-media-links');
    userProfile.socialMedia.forEach(media => {
        let a = document.createElement('a');
        a.href = `https://${media.handle}`;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        let svg;
        switch (media.platform) {
            case 'GitHub':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#83AFFF" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>`;
                break;
            case 'Instagram':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#83AFFF" class="bi bi-instagram ms-3" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>`;
                break;
            case 'LinkedIn':
                svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#83AFFF" class="bi bi-linkedin ms-3" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>`;
                break;
        }

        a.innerHTML = svg;
        socialMediaLinks.appendChild(a);
    });
    // Set user level
    document.getElementById('user-level').innerHTML = `<strong>Nível:</strong> ${userProfile.currentLevel}`;

    // Set user ranking position
    document.getElementById('user-position').innerHTML = `<strong>Posição:</strong><br>${userProfile.rankingPosition}°`;

    // Set user score
    document.getElementById('user-score').innerHTML = `<strong>Pontuação:</strong><br>${userProfile.score}/45`;

    // Calculate and set points to next level
    const pointsToNextLevel = 45 - userProfile.score;
    document.getElementById('points-to-next-level').innerHTML = `faltam <strong>${pointsToNextLevel} pontos</strong> para o próximo nível`;
});

document.addEventListener('DOMContentLoaded', function () {
    // Evento de clique no botão para abrir o modal
    document.getElementById('btn1').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('editModal'));
        myModal.show();
    });

    // Evento de submissão do formulário de edição
    document.getElementById('editForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        // Obter os novos dados do formulário
        var newPhoto = document.getElementById('newPhoto').files[0];
        var newBio = document.getElementById('newBio').value;
        var newLinkedIn = document.getElementById('newLinkedIn').value;
        var newGitHub = document.getElementById('newGitHub').value;
        var newInstagram = document.getElementById('newInstagram').value;

        // Atualizar a foto de perfil (exemplo)
        if (newPhoto) {
            // Código para atualizar a foto de perfil, pode ser uma chamada de API, etc.
            console.log('Nova Foto:', newPhoto);
        }

        // Atualizar a bio (exemplo)
        if (newBio) {
            // Código para atualizar a bio, pode ser uma chamada de API, etc.
            console.log('Nova Bio:', newBio);
        }

        // Atualizar os links das redes sociais (exemplo)
        
        if (newGitHub) {
            // Código para atualizar o link do GitHub, pode ser uma chamada de API, etc.
            console.log('Novo Link do GitHub:', newGitHub);
        }

        if (newInstagram) {
            // Código para atualizar o link do Instagram, pode ser uma chamada de API, etc.
            console.log('Novo Link do Instagram:', newInstagram);
        }

        if (newLinkedIn) {
            // Código para atualizar o link do LinkedIn, pode ser uma chamada de API, etc.
            console.log('Novo Link do LinkedIn:', newLinkedIn);
        }
        
        // Fechar o modal após salvar as alterações
        var myModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        myModal.hide();
    });
});

