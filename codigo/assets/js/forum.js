document.addEventListener("DOMContentLoaded", function() {

    const postForm = document.getElementById("postForm");

    postForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const postTitle = document.getElementById("postTitle").value;
        const postContent = document.getElementById("postContent").value;
        
        const newPost = {
            postTitleJson: postTitle,
            postContentJson: postContent,
        }

        EnviarPosts(newPost);
    });
});


function PuxarPosts() {
    let listaPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log("Posts armazenados:", listaPosts);
}

function EnviarPosts(post) { 
    console.log("Enviando post:", post);

    if(post.postTitleJson && post.postContentJson){
        let listaPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        
        listaPosts.push(post);
        localStorage.setItem('posts', JSON.stringify(listaPosts));

        document.getElementById("postForm").reset();
        alert("Postagem enviada com sucesso!"); 
    }
    else{
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
}

// Puxar os posts ao carregar a página
document.addEventListener("DOMContentLoaded", PuxarPosts);
