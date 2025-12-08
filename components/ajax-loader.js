class AjaxLoader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */`
      <div id="ajax-loader" style="display: none">
        <div>
          <img src="../../assets/images/ajax-loader-center.gif" id="img-ajax-load-center" alt="" />
          <span class="ajax-loader-message"></span>
        </div>
      </div>
    `;
  }
}

// Registra a tag <ajax-loader> no navegador
customElements.define("ajax-loader", AjaxLoader);
