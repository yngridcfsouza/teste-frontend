class HeadbarDoity extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div style=" padding: 0; margin: 0">
      <div class="__headbar doity" style="width: screenWidthpx
            margin-bottom: 10px;">
        <div
          class="__centered"
          style="
            display: flex;
            align-items: center !important;
            justify-content: space-between;
            max-width: 1366px;
            position: relative;
            height: 40px;
          "
        >
        <div>
            <a
              class="nome_evento d_margin_bottom-10"
              target="_blank"
              href="https://doity.com.br/evento-teste-frontend"
            >
              Evento Teste Frontend
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                style="min-width: 8px; min-height: 8px"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.97931 1.44385H3.99726C4.18158 1.44385 4.331 1.59327 4.331 1.7776C4.331 1.96192 4.18158 2.11134 3.99726 2.11134H3.00373C2.36498 2.11134 1.91948 2.11205 1.58335 2.15724C1.25683 2.20115 1.08391 2.28144 0.960752 2.4046C0.837597 2.52776 0.757299 2.70067 0.713397 3.0272C0.668206 3.36333 0.667495 3.80882 0.667495 4.44759V4.99612C0.667495 5.63487 0.668206 6.08034 0.713397 6.41647C0.757299 6.743 0.837597 6.91594 0.960752 7.03909C1.08391 7.16225 1.25683 7.24256 1.58335 7.28647C1.91948 7.33162 2.36497 7.33233 3.00373 7.33233H3.55226C4.19101 7.33233 4.63651 7.33162 4.97265 7.28647C5.29918 7.24256 5.47207 7.16225 5.59522 7.03909C5.71838 6.91594 5.79869 6.743 5.8426 6.41647C5.8878 6.08034 5.88851 5.63487 5.88851 4.99612V4.00257C5.88851 3.81826 6.03793 3.66883 6.22224 3.66883C6.40655 3.66883 6.55597 3.81826 6.55597 4.00257V5.02052C6.55602 5.6291 6.55602 6.11963 6.50415 6.50545C6.45028 6.90598 6.33509 7.24322 6.06722 7.51109C5.79935 7.77891 5.46211 7.89415 5.06158 7.94798C4.67576 7.99984 4.18523 7.99984 3.57667 7.99984H2.97931C2.37074 7.99984 1.88021 7.99984 1.49441 7.94798C1.09387 7.89415 0.756615 7.77891 0.488763 7.51109C0.22091 7.24322 0.105706 6.90598 0.0518534 6.50545C-1.62058e-05 6.11963 -8.65683e-06 5.6291 2.32023e-07 5.02052V4.42315C-8.65683e-06 3.81458 -1.62058e-05 3.32406 0.0518534 2.93826C0.105706 2.53771 0.22091 2.20046 0.488763 1.93261C0.756615 1.66476 1.09387 1.54955 1.49441 1.4957C1.88021 1.44383 2.37074 1.44384 2.97931 1.44385Z"
                  fill="#FF2B34"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.66465 0.667495C5.48034 0.667495 5.33092 0.518073 5.33092 0.33375C5.33092 0.149426 5.48034 0 5.66465 0H7.66718C7.85149 0 8.00091 0.149426 8.00091 0.33375V2.33624C8.00091 2.52056 7.85149 2.66998 7.66718 2.66998C7.48282 2.66998 7.3334 2.52056 7.3334 2.33624V1.13949L4.34319 4.12972C4.21284 4.26007 4.00151 4.26007 3.87119 4.12972C3.74085 3.99939 3.74085 3.78807 3.87119 3.65773L6.8614 0.667495H5.66465Z"
                  fill="#FF2B34"
                ></path>
              </svg>
            </a>
          </div>

          <div>
            <div id="modal-help" class="contrato modal modal-large">
              <div class="modal-header" style="padding: 14px 15px">
                <button
                  class="close fechar"
                  aria-hidden="true"
                  id="ln_fechar_help"
                  data-dismiss="modal"
                  type="button"
                >
                  ×
                </button>
                <span
                  ><a href="" target="_blank" id="bt-abrir-na-central"
                    >Abrir em outra aba <i class="fa fa-external-link"></i></a
                ></span>
              </div>

              <div class="modal-body">
                <iframe
                  frameborder="0"
                  height="465px"
                  width="470px"
                  scrolling="yes"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>

          <div class="__left __top_menu-mobile" style="position: absolute; left: 0; display: flex; align-items: center; gap: 12px;">
            <a id="resp-menu" href="#admin-nav">
              <i class="fa fa-bars"></i>
            </a>
            <a
              class="__mobile-criar_novo"
              style="
                display: none;
                width: 28px;
                height: 28px;
                border-radius: 100px;
                background-color: #c2141c;
                filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
                align-items: center;
                justify-content: center;
              "
              href="https://doity.com.br/admin/eventos/add"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 4.3125V13.6875"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.6875 9H4.3125"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <a href="https://doity.com.br/admin" style="position: absolute; left: 50%; transform: translateX(-95%); display: flex; align-items: center;">
            <img
              src="../../assets/images/logo-doity-black.png"
              style="width: 90px"
              class="doity-logo"
              alt=""
            />
          </a>
          <div class="__right __items-row" style="position: absolute; right: 0; display: flex; align-items: center; gap: 12px;">
            <div class="__notificacoes">
              <a href="#" id="top-menu-help" class="open-help-admin">
                Ajuda
                <i
                  class="fa fa-question-circle-o"
                  style="font-size: 18px; vertical-align: middle; margin-right: 5px"
                ></i>
              </a>
            </div>

            <div class="__bell-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.25 12V10C17.25 7.1005 14.8995 4.75 12 4.75C9.10051 4.75 6.75 7.10051 6.75 10V12L4.75 16.25H19.25L17.25 12Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                style="position: absolute; top: 0; right: 0"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="#FF2B34"></circle>
              </svg>
            </div>

            <div class="__perfil __showAndHide" data-toggle="nav.__menu" id="perfil">
              <div class="__avatar">
                <img src="../../assets/images/1-avatar.png" alt="" />
              </div>
              <div class="__info">
                <h3>Administrator</h3>
                <i class="fa fa-chevron-down" style="color: #ff2b34"></i>
              </div>
              <nav class="__menu" id="menu">
                <ul class="__menu-root">
                  <li>
                    <a href="https://ajuda.doity.com.br/" target="_blank"> Ajuda! </a>
                  </li>
                  <li>
                    <a href="https://doity.com.br/admin/users/edit2">Minha Conta</a>
                  </li>
                  <li>
                    <a href="https://doity.com.br/admin/eventos">Meus Eventos</a>
                  </li>
                  <li>
                    <a href="https://api.doity.com.br/public/integracoes"
                      >Integrações</a
                    >
                  </li>

                  <li>
                    <a href="https://doity.com.br/area-do-participante/painel"
                      >Área do Participante</a
                    >
                  </li>
                  <li>
                    <a href="https://doity.com.br/admin/instituicoes">Instituições</a>
                  </li>

                  <li>
                    <a href="https://doity.com.br/admin/settings/news"
                      >Atualizações</a
                    >
                  </li>

                  <li>
                    <a href="https://doity.com.br/admin/users/logout">Sair</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- .perfil -->
          </div>
          <!-- .right.items-row -->
        </div>
        <!-- .centered -->
      </div>
      </div>
    `;
  }
}

// Registra a tag <headbar-doity> no navegador
customElements.define("headbar-doity", HeadbarDoity);
