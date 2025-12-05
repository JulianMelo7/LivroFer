// LISTA DE AVALIAÇÕES
const reviews = [
    {
        name: "Ases da Literatura (feedback editorial)",
        stars: "★★★★★",
        text: "“Que leitura boa! Adoramos como a história da Manuela convida o leitor a refletir sobre identidade, pertencimento e escolhas. É sobre crescer, mesmo com medo. E sobre amar, mesmo sem garantias.”"
    },
    {
        name: "Fryve (feedback editorial)",
        stars: "★★★★★",
        text: "“Eu curti a narrativa. Ela tem diferentes camadas de conflito, com enredos que se entrelaçam e envolvem o leitor.” "
    },
    {
        name: "Bruna Kondo (leitora beta)",
        stars: "★★★★★",
        text: "“Personagens complexos, que não são de todo ruins e nem de todo bons, moralmente duvidosos. […] Acaba num clímax muito bom, quero muito a continuação!” "
    }
];

// INDEX DO SLIDE ATUAL
let currentReview = 0;

// ELEMENTOS DO HTML
const nameEl = document.getElementById("reviewer-name");
const starsEl = document.getElementById("review-stars");
const textEl = document.getElementById("review-text");

const prevBtn = document.getElementById("prev-review");
const nextBtn = document.getElementById("next-review");


// FUNÇÃO PARA ATUALIZAR A AVALIAÇÃO NA TELA
function showReview() {
    const r = reviews[currentReview];

    nameEl.textContent = r.name;
    starsEl.textContent = r.stars;
    textEl.textContent = r.text;
}


// EVENTOS DOS BOTÕES
nextBtn.addEventListener("click", () => {
    currentReview++;
    if (currentReview >= reviews.length) currentReview = 0;
    showReview();
});

prevBtn.addEventListener("click", () => {
    currentReview--;
    if (currentReview < 0) currentReview = reviews.length - 1;
    showReview();
});


// INICIALIZA AO CARREGAR
document.addEventListener("DOMContentLoaded", showReview);
