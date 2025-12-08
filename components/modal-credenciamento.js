class ModalCredenciamento extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="modalCredenciamentoMenu" style="display: none">
        <div id="modal_wrapper_shadow-lote" class="modal_wrapper_shadow"></div>
        <div
          class="modal modal-custom fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          style="
            width: 100%;
            max-width: 714px;
            box-shadow: unset;
            border: none;
            transform: unset;
            margin: -250px 0 0 -357px;
          "
        >
          <div id="modal_premium_content" class="modal_mobile d_display-flex d_gap-10 d_padding-20">
            <div
              id="modal_premium_image"
              class="d_border_radius-10"
              style="background-color: #ffbebe"
            >
              <img src="../../assets/images/selo-pro.gif" alt="" style="max-height: 370px" />
            </div>
            <div
              id="modal_premium_text"
              class="d_border_radius-10 d_display-flex d_flex-column d_align-none"
              style="background-color: #f6f6f6; padding: 20px 25px"
            >
              <p
                class="d_text-dark d_font_size-20 d_font_weight-700 d_margin_bottom-05"
              >
                Este é um recurso premium
              </p>
              <br />
              <p class="d_text-dark d_font_size-12 d_font_weight-400">
                Faça o upgrade para o <b>Credenciamento profissional</b> e
                adquira facilidades na hora de credenciar os
                participantes.
              </p>
              <div
                id="modal_premium_list"
                style="margin: 51.5px 0"
                class="d_display-flex d_flex-column d_align-none d_gap-05"
              >
                <span class="d_display-flex d_gap-10">
                  <img
                    src="../../assets/images/selo-pro.svg"
                    style="width: 13px; height: 13px"
                  />
                  <p class="d_text-dark d_font_size-10">
                    Credenciamento direto
                  </p>
                </span>
                <span class="d_display-flex d_gap-10">
                  <img
                    src="../../assets/images/selo-pro.svg"
                    style="width: 13px; height: 13px"
                  />
                  <p class="d_text-dark d_font_size-10">
                    Credenciamento por ID
                  </p>
                </span>
                <span class="d_display-flex d_gap-10">
                  <img
                    src="../../assets/images/selo-pro.svg"
                    style="width: 13px; height: 13px"
                  />
                  <p class="d_text-dark d_font_size-10">
                    Credenciar todos os participantes de uma vez
                  </p>
                </span>
                <span class="d_display-flex d_gap-10">
                  <img
                    src="../../assets/images/selo-pro.svg"
                    style="width: 13px; height: 13px"
                  />
                  <p class="d_text-dark d_font_size-10">
                    Gerar etiquetas
                  </p>
                </span>
                <span class="d_display-flex d_gap-10">
                  <img
                    src="../../assets/images/selo-pro.svg"
                    style="width: 13px; height: 13px"
                  />
                  <p class="d_text-dark d_font_size-10">
                    Gerenciar entrada e saída dos participantes
                  </p>
                </span>
              </div>
              <a
                class="btn_solicitar_orcamento d_button"
                style="width: 100% !important"
                href="https://doity.com.br/admin/eventos/painel/279481#open-modal-modulos"
              >
                Faça um upgrade
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Registra a tag <modal-credenciamento> no navegador
customElements.define("modal-credenciamento", ModalCredenciamento);
