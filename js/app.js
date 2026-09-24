/**
 * BRASFOND - SISTEMA INTERATIVO DE CARDS DE FDS
 * Controla a renderização de cards com imagens, links do Google Drive, filtragem e visualizador completo das 16 seções.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado da Aplicação
  const state = {
    selectedCategory: 'all',
    searchQuery: '',
    currentProduct: null
  };

  // Elementos do DOM
  const cardsGrid = document.getElementById('cardsGrid');
  const searchInput = document.getElementById('chemicalSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryFilterContainer = document.getElementById('categoryFilterContainer');
  const visibleCountEl = document.getElementById('visibleProductsCount');

  // Modais
  const fdsModalOverlay = document.getElementById('fdsModalOverlay');
  const btnCloseFdsModal = document.getElementById('btnCloseFdsModal');
  const btnPrintFds = document.getElementById('btnPrintFds');
  const btnModalDriveLink = document.getElementById('btnModalDriveLink');

  const sosModalOverlay = document.getElementById('sosModalOverlay');
  const btnCloseSosModal = document.getElementById('btnCloseSosModal');

  // Inicialização
  updateCategoryCounts();
  renderCards();
  attachEvents();

  /**
   * Atualiza as contagens nas pílulas de filtro
   */
  function updateCategoryCounts() {
    const counts = {
      all: PRODUCTS_DATA.length,
      oleos: 0,
      graxas: 0,
      fluidos: 0
    };

    PRODUCTS_DATA.forEach(prod => {
      if (counts[prod.categoria] !== undefined) {
        counts[prod.categoria]++;
      }
    });

    for (const key in counts) {
      const badge = document.getElementById(`count-${key}`);
      if (badge) badge.textContent = counts[key];
    }
  }

  /**
   * Filtra e renderiza os cartões dos produtos
   */
  function renderCards() {
    const query = state.searchQuery.toLowerCase().trim();
    
    const filtered = PRODUCTS_DATA.filter(prod => {
      // Filtro de categoria
      const matchesCategory = state.selectedCategory === 'all' || prod.categoria === state.selectedCategory;
      
      // Filtro de busca textual
      const matchesSearch = !query || 
        prod.nome.toLowerCase().includes(query) ||
        prod.nomeComercial.toLowerCase().includes(query) ||
        prod.descricao.toLowerCase().includes(query) ||
        prod.formula.toLowerCase().includes(query) ||
        (prod.fabricante && prod.fabricante.toLowerCase().includes(query)) ||
        prod.cas.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    visibleCountEl.textContent = filtered.length;

    // Se não houver produtos correspondentes
    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
        <div class="no-results">
          <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <h3>Nenhum produto químico encontrado</h3>
          <p>Não encontramos produtos com o termo "${escapeHtml(state.searchQuery)}". Tente outro nome ou selecione outra categoria.</p>
          <button class="btn-reset-filters" id="btnResetFilters">Limpar busca e filtros</button>
        </div>
      `;

      document.getElementById('btnResetFilters')?.addEventListener('click', () => {
        state.searchQuery = '';
        state.selectedCategory = 'all';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.category === 'all');
        });

        renderCards();
      });

      return;
    }

    // Renderiza cada card de produto
    cardsGrid.innerHTML = filtered.map(prod => {
      // Gera os diamantes GHS
      const ghsHtml = prod.pictogramas.map(picKey => {
        const item = GHS_PICTOGRAMS[picKey];
        if (!item) return '';
        return `<div title="${escapeHtml(item.label)}">${item.icon}</div>`;
      }).join('');

      // Gera os chips de EPI
      const episHtml = prod.episRecomendados.map(epi => {
        return `<span class="epi-chip">${escapeHtml(epi)}</span>`;
      }).join('');

      return `
        <article class="product-card risk-${prod.corRisco}" data-id="${prod.id}">
          <div>
            <!-- Imagem Oficial do Produto -->
            <div class="card-image-wrapper">
              <img src="${prod.imagem}" alt="${escapeHtml(prod.nomeComercial)}" class="card-product-img" loading="lazy">
              ${prod.fabricante ? `<span class="card-maker-badge">${escapeHtml(prod.fabricante)}</span>` : ''}
            </div>

            <div class="card-header">
              <span class="card-category-tag">${escapeHtml(prod.categoriaLabel)}</span>
              <span class="card-risk-badge ${prod.corRisco}">
                ${prod.corRisco === 'danger' ? '⚠️' : '🛡️'} ${escapeHtml(prod.riscoGeral)}
              </span>
            </div>

            <div class="card-body">
              <h3 class="card-trade-name">${escapeHtml(prod.nomeComercial)}</h3>
              <div class="card-chem-name">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"/>
                </svg>
                ${escapeHtml(prod.nome)}
              </div>

              <div class="card-meta-row">
                <div class="card-meta-item">CAS: <strong>${escapeHtml(prod.cas)}</strong></div>
                <div class="card-meta-item">Status: <strong>Ativo em Obra</strong></div>
              </div>

              <p class="card-desc">${escapeHtml(prod.descricao)}</p>

              <!-- Faixa com Pictogramas GHS -->
              <div class="ghs-strip">
                <span class="ghs-strip-title">GHS:</span>
                ${ghsHtml}
              </div>

              <!-- EPIs Obrigatórios -->
              <div class="epis-wrapper">
                <div class="epis-title">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  EPIs Recomendados:
                </div>
                <div class="epis-chips-list">
                  ${episHtml}
                </div>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <!-- Botão Principal de FDS Interativa -->
            <button class="btn-open-fds" data-action="open-fds" data-id="${prod.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Ver FDS Completa (16 Seções)
            </button>

            <!-- Ações Secundárias: Drive Oficial + Emergência -->
            <div class="secondary-actions-row">
              <a href="${prod.driveUrl}" target="_blank" rel="noopener noreferrer" class="btn-drive-link" title="Abrir arquivo PDF oficial no Google Drive" onclick="event.stopPropagation()">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                PDF Original (Drive)
              </a>

              <button class="btn-quick-sos" data-action="quick-sos" data-id="${prod.id}" title="Procedimentos rápidos de primeiros socorros">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Emergência
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /**
   * Abre o Modal de FDS Completa
   */
  function openFdsModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    state.currentProduct = product;

    // Cabeçalho
    document.getElementById('modalProductCategory').textContent = `${product.categoriaLabel} • ${product.fabricante || 'Brasfond'}`;
    document.getElementById('modalProductName').textContent = `${product.nomeComercial} - ${product.nome}`;

    // Atualiza link do Google Drive no modal
    if (btnModalDriveLink && product.driveUrl) {
      btnModalDriveLink.href = product.driveUrl;
    }

    // Banner de perigo
    const banner = document.getElementById('modalHazardBanner');
    banner.className = `fds-hazard-banner ${product.corRisco}`;

    const wordBadge = document.getElementById('modalHazardWord');
    wordBadge.className = `hazard-word-badge ${product.palavraAdvertencia}`;
    wordBadge.textContent = product.palavraAdvertencia;

    const phrasesEl = document.getElementById('modalHazardPhrases');
    phrasesEl.innerHTML = `<ul>${product.frasesPerigo.map(fp => `<li>${escapeHtml(fp)}</li>`).join('')}</ul>`;

    const diamondsEl = document.getElementById('modalHazardDiamonds');
    diamondsEl.innerHTML = product.pictogramas.map(picKey => {
      const p = GHS_PICTOGRAMS[picKey];
      return p ? `<div title="${escapeHtml(p.label)}">${p.icon}</div>` : '';
    }).join('');

    // Preenchimento das 16 Seções
    const sectionsContainer = document.getElementById('modalSectionsList');
    let sectionsHtml = '';

    for (let i = 1; i <= 16; i++) {
      const secaoKey = `secao${i}`;
      const secData = product.fdsCompleta[secaoKey];
      if (secData) {
        sectionsHtml += `
          <div class="fds-section-card">
            <h4 class="fds-section-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              ${escapeHtml(secData.titulo)}
            </h4>
            <div class="fds-section-content">
              ${secData.conteudo}
            </div>
          </div>
        `;
      }
    }

    sectionsContainer.innerHTML = sectionsHtml;

    // Abre o modal
    fdsModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Abre o Modal Rápido de Emergência / Primeiros Socorros
   */
  function openSosModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('sosProductName').textContent = `${product.nomeComercial} (${product.nome})`;

    const grid = document.getElementById('sosEmergencyGrid');
    const em = product.emergenciaResumo;

    grid.innerHTML = `
      <div class="emergency-item">
        <div class="emergency-item-title">
          👁️ Contato com os Olhos
        </div>
        <div class="emergency-item-text">${escapeHtml(em.olhos)}</div>
      </div>

      <div class="emergency-item">
        <div class="emergency-item-title">
          ✋ Contato com a Pele
        </div>
        <div class="emergency-item-text">${escapeHtml(em.pele)}</div>
      </div>

      <div class="emergency-item">
        <div class="emergency-item-title">
          🫁 Inalação
        </div>
        <div class="emergency-item-text">${escapeHtml(em.inalacao)}</div>
      </div>

      <div class="emergency-item danger-border">
        <div class="emergency-item-title" style="color: #fca5a5;">
          🚫 Ingestão Acidental
        </div>
        <div class="emergency-item-text">${escapeHtml(em.ingestao)}</div>
      </div>

      <div class="emergency-item">
        <div class="emergency-item-title">
          🔥 Combate a Fogo / Incêndio
        </div>
        <div class="emergency-item-text">${escapeHtml(em.incendio)}</div>
      </div>

      <div class="emergency-item">
        <div class="emergency-item-title">
          ⚠️ Vazamento / Derramamento
        </div>
        <div class="emergency-item-text">${escapeHtml(em.vazamento)}</div>
      </div>
    `;

    sosModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModals() {
    fdsModalOverlay.classList.remove('active');
    sosModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Vincula ouvintes de eventos
   */
  function attachEvents() {
    // Busca em tempo real
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderCards();
    });

    // Limpar busca
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      renderCards();
    });

    // Filtros por Categoria
    categoryFilterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      state.selectedCategory = btn.dataset.category;
      renderCards();
    });

    // Cliques nos Cards (delegação de evento)
    cardsGrid.addEventListener('click', (e) => {
      const fdsBtn = e.target.closest('[data-action="open-fds"]');
      if (fdsBtn) {
        openFdsModal(fdsBtn.dataset.id);
        return;
      }

      const sosBtn = e.target.closest('[data-action="quick-sos"]');
      if (sosBtn) {
        openSosModal(sosBtn.dataset.id);
        return;
      }

      // Se clicar no próprio card (exceto botões ou links), abre a FDS
      const card = e.target.closest('.product-card');
      if (card && !e.target.closest('button') && !e.target.closest('a')) {
        openFdsModal(card.dataset.id);
      }
    });

    // Fechar modais
    btnCloseFdsModal.addEventListener('click', closeModals);
    btnCloseSosModal.addEventListener('click', closeModals);

    // Fechar ao clicar no fundo escuro
    fdsModalOverlay.addEventListener('click', (e) => {
      if (e.target === fdsModalOverlay) closeModals();
    });

    sosModalOverlay.addEventListener('click', (e) => {
      if (e.target === sosModalOverlay) closeModals();
    });

    // Tecla Escape fecha modais
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModals();
    });

    // Botão de impressão da FDS
    btnPrintFds.addEventListener('click', () => {
      window.print();
    });
  }

  // Utilitário de escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
