// footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footerContent = `
<footer>
  <div class="row pt-3 border-top">
    <div class="col-12 col-md-6 mb-3">
      <h5>República Pasárgada</h5>
      <p>Desde 1982 formando grandes profissionais e cidadãos.</p>
    </div>

    <div class="col-12 col-md-4 mb-3">
      <h5>Contato</h5>
      <ul class="list-unstyled">
        <li>
          <a
            href="https://maps.app.goo.gl/qnPVkZgsbEhuqLFQ7"
            target="_blank"
            class="text-decoration-none text-dark"
          >
            <i class="bi bi-geo-alt"></i> Rua Treze, Ala 2 Casa D - Morro do
            Cruzeiro
          </a>
        </li>
        <li>
          <a
            href="mailto:republicapasargada@gmail.com"
            class="text-decoration-none text-dark"
          >
            <i class="bi bi-envelope"></i> republicapasargada@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+553135515193" class="text-decoration-none text-dark">
            <i class="bi bi-phone"></i> (31) 3551-5193
          </a>
        </li>
        <li>
          <a href="tel:+5531994150194" class="text-decoration-none text-dark">
            <i class="bi bi-phone"></i> (31) 99415-0194
          </a>
        </li>
      </ul>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Mapa do Site</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a href="/index.html" class="nav-link p-0 text-body-secondary"
            >Home</a
          >
        </li>
        <li class="nav-item mb-2">
          <a
            href="/pasargada/estrutura/estrutura.html"
            class="nav-link p-0 text-body-secondary"
            >Estrutura</a
          >
        </li>
        <li class="nav-item mb-2">
          <a
            href="/pasargada/sobre-nos/sobre-nos.html"
            class="nav-link p-0 text-body-secondary"
            >Sobre Nós</a
          >
        </li>
        <li class="nav-item">
          <a href="/vagas/vagas.html" class="nav-link p-0 text-body-secondary"
            >VAGAS</a
          >
        </li>
      </ul>
    </div>
  </div>

  <!-- Linha ajustada para alinhamento vertical -->
  <div
    class="row flex-nowrap justify-content-between align-items-center py-3 pb-2 border-top"
  >
    <div class="col-auto d-flex align-items-center">
      <a href="/" class="me-2 text-body-secondary text-decoration-none">
        <img src="/imagens/livroCinza.png" width="30" height="24" alt="Logo" />
      </a>
      <span class="text-body-secondary">© 2025 República Pasárgada</span>
    </div>

    <ul class="col-auto list-unstyled d-flex align-items-center mb-0">
      <li class="ms-2">
        <a class="text-body-secondary" href="tel:+553135515193" target="_blank">
          <i class="bi bi-telephone-fill fs-5"></i>
        </a>
      </li>
      <li class="ms-2">
        <a
          class="text-body-secondary"
          href="https://wa.me/5531994150194"
          target="_blank"
        >
          <i class="bi bi-whatsapp fs-5"></i>
        </a>
      </li>
      <li class="ms-2">
        <a
          class="text-body-secondary"
          href="https://www.instagram.com/reppasargada/"
          target="_blank"
        >
          <i class="bi bi-instagram fs-5"></i>
        </a>
      </li>
    </ul>
  </div>
</footer>
      `;

  // Insere o footer em todos os elementos com a classe "footer-container"
  const footerContainers = document.querySelectorAll(".footer-container");
  footerContainers.forEach((container) => {
    container.innerHTML = footerContent;
  });
});
