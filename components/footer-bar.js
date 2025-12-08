class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
        <div id="footer">
          <p></p>
          <p>
            Desenvolvido por
            <a href="http://doity.com.br/" target="_blank">Doity Plataforma de Eventos</a>
          </p>
          <p>- 2025 - Todos os direitos reservados</p>
          <p>
            <a href="https://ajuda.doity.com.br/" target="_blank">Central de Ajuda</a>
            - <a href="#">Entre em Contato</a>
          </p>
          <p></p>
        </div>
      </div>
    `;
  }
}

// Registra a tag <footer-bar> no navegador
customElements.define("footer-bar", FooterBar);
