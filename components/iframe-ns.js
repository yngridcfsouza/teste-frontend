class IframeNs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M7T5VV6"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>
      </noscript>
    `;
  }
}

// Registra a tag <iframe-ns> no navegador
customElements.define("iframe-ns", IframeNs);
