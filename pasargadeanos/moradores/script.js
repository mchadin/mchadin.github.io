function criarCards() {
  const container = document.getElementById("cards-container");

  moradores.forEach((aluno) => {
    const cardHTML = `
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 my-3">
    <div class="card">
        <img src="fotos/${aluno.codigo.padStart(3, "0")}.png" 
             class="card-img-top h-md-525 h-sm-200"
             alt="${aluno.apelido}">
        <div class="card-body">
            <h5 class="card-title text-success text-center fw-bold">${
              aluno.apelido
            }</h5>
            <p class="card-text text-center">${aluno.nome}</p>
            <p class="card-text text-center">${aluno.curso} – ${
      aluno.periodo
    }</p>
            ${
              aluno.cidade
                ? `<p class="card-text text-center text-muted small">${aluno.cidade} - ${aluno.estado}</p>`
                : ""
            }
        </div>
        <!-- Ícones com espaçamento horizontal -->
        <ul class="list-unstyled d-flex justify-content-center mb-3">
            <li class="mx-2">
                <a href="mailto:${
                  aluno.email
                }" class="text-decoration-none text-dark">
                    <i class="bi bi-envelope"></i>
                </a>
            </li>
            <li class="mx-2">
                <a href="${
                  aluno.linkedin
                }" target="_blank" class="text-decoration-none text-dark">
                    <i class="bi bi-linkedin"></i>
                </a>
            </li>
            <li class="mx-2">
                <a href="https://instagram.com/${
                  aluno.instagram
                }" target="_blank" class="text-decoration-none text-dark">
                    <i class="bi bi-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
      `;
    container.innerHTML += cardHTML;
  });
}

window.onload = criarCards;
