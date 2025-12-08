class MainMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="menu">
        <ul class="sf-js-enabled">
          <li>
            <a href="https://doity.com.br/admin">Painel</a>
          </li>

          <li class="break"></li>

          <li>
            <a href="https://doity.com.br/admin/eventos">Eventos</a>
          </li>

          <li class="break"></li>

          <li>
            <a href="https://doity.com.br/admin/users">Usuários</a>
            <ul class="sf-js-enabled">
              <li><a href="https://doity.com.br/admin/users">Usuários</a></li>
              <li><a href="https://doity.com.br/admin/roles">Perfis</a></li>
              <li>
                <a href="https://doity.com.br/admin/acl/acl_permissions">Permissões</a>
              </li>
            </ul>
          </li>

          <!--<li class="break"></li>

          <li>
            <a href="/admin/settings/prefix/Site">Configurações</a>
            <ul class="sf-js-enabled">
              <li><a href="/admin/settings/prefix/Site">Site</a></li>
              <li><a href="/admin/settings/prefix/Meta">Meta</a></li>
              <li><a href="/admin/settings/prefix/Whitelabel">Whitelabel</a></li>
            </ul>
          </li>
          -->

          <li class="break"></li>

          <li>
            <a href="https://doity.com.br/admin/compras">Transações</a>
          </li>
          <li class="break"></li>

          <li>
            <a href="https://doity.com.br/admin/painel">Dashboard</a>
          </li>
          <li class="break"></li>
        </ul>
      </div>
    `;
  }
}

// Registra a tag <main-menu> no navegador
customElements.define("main-menu", MainMenu);
