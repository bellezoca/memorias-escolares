function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.nextElementSibling.innerHTML; // Pega a legenda
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
