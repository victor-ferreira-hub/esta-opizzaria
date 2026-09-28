'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
const privacy = document.querySelector('#privacy-dialog');
const privacyTrigger = document.querySelector('[data-open-privacy]');
privacyTrigger.addEventListener('click', () => privacy.showModal());
document.querySelector('[data-close-privacy]').addEventListener('click', () => privacy.close());
privacy.addEventListener('click', event => {
  const rect = privacy.getBoundingClientRect();
  if (event.target === privacy && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) privacy.close();
});
// Abre a categoria escolhida sem sair da página.
function revealMenuCategory() {
  const id = window.location.hash.slice(1);
  const group = document.getElementById(id);
  if (group && group.matches('.menu-group')) {
    group.open = true;
    requestAnimationFrame(() => group.scrollIntoView({block:'start'}));
  }
}
window.addEventListener('hashchange', revealMenuCategory);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#menu-"]');
  if (!link) return;
  const group = document.getElementById(link.getAttribute('href').slice(1));
  if (group) group.open = true;
});
revealMenuCategory();
// Busca local: não envia consultas para serviços externos.
const searchInput = document.getElementById('menu-search');
const clearSearch = document.getElementById('clear-search');
const searchStatus = document.getElementById('search-status');
const menuGroups = [...document.querySelectorAll('.menu-group')];
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function filterMenu() {
  const query = normalize(searchInput.value.trim());
  let count = 0;
  for (const group of menuGroups) {
    let matches = 0;
    for (const item of group.querySelectorAll('.menu-item')) {
      const searchable = item.querySelector('h4').textContent + ' ' + (item.querySelector('p')?.textContent || '');
      const visible = !query || normalize(searchable).includes(query);
      item.hidden = !visible;
      if (visible) { matches++; count++; }
    }
    group.hidden = matches === 0;
    group.open = Boolean(query && matches);
  }
  clearSearch.hidden = !query;
  document.getElementById('menu-empty').hidden = count !== 0;
  searchStatus.textContent = query ? `${count} ${count === 1 ? 'opção encontrada' : 'opções encontradas'}.` : '';
}
searchInput.addEventListener('input', filterMenu);
clearSearch.addEventListener('click', () => { searchInput.value = ''; filterMenu(); searchInput.focus(); });
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#menu-"]');
  if (!link) return;
  if (searchInput.value) { searchInput.value = ''; filterMenu(); }
  const group = document.getElementById(link.getAttribute('href').slice(1));
  if (group) { group.open = true; requestAnimationFrame(() => group.scrollIntoView({block:'start'})); }
});
