// Shared header, footer, contact buttons and WhatsApp links for every page.
(function () {
  'use strict';

  var shop = window.SHOP;

  // Config text goes through escapeHtml() before it reaches the page.
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function whatsappUrl(message) {
    return 'https://wa.me/' + shop.whatsapp + '?text=' + encodeURIComponent(message);
  }

  var NAV = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'products.html', label: 'Products', page: 'products' },
    { href: 'contact.html', label: 'Contact', page: 'contact' },
  ];

  // Simple line icons, shown until a product photo is added to a card (see README).
  var ICONS = {
    roller: '<rect x="8" y="10" width="40" height="14" rx="4"/><path d="M48 17h6v14H30v8"/><rect x="26" y="39" width="8" height="16" rx="2"/>',
    brush: '<path d="M22 6h20v14H22z"/><path d="M20 20h24l-2 18H22z"/><path d="M26 38v18h12V38"/>',
    paper: '<rect x="14" y="14" width="30" height="42" rx="3"/><path d="M20 8h30v40"/><path d="M22 28h14M22 36h14M22 44h8"/>',
    can: '<rect x="20" y="22" width="24" height="34" rx="4"/><path d="M26 22v-8h12v8M30 14V8h6"/><path d="M26 34h12"/>',
    towel: '<path d="M10 18h44v28H10z"/><path d="M10 26h44M10 34h44M10 42h44" stroke-dasharray="2 4"/>',
  };

  function icon(name) {
    var body = ICONS[name] || ICONS.roller;
    return '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }

  function renderHeader(current) {
    var links = NAV.map(function (item) {
      var active = item.page === current ? ' aria-current="page"' : '';
      return '<a href="' + item.href + '"' + active + '>' + item.label + '</a>';
    });
    return '<header class="site-header"><div class="wrap head-row">' +
      '<a class="brand" href="index.html"><span class="brand-main">GUJARAT</span>' +
      '<span class="brand-sub">SALES</span></a>' +
      '<nav class="site-nav">' + links.join('') + '</nav>' +
      '<a class="btn btn-call head-call" href="tel:' + escapeHtml(shop.phone) + '">Call now</a>' +
      '</div><nav class="tabbar">' + links.join('') + '</nav></header>';
  }

  function renderFooter() {
    return '<footer class="site-footer"><div class="wrap">' +
      '<p><strong>' + escapeHtml(shop.name) + '</strong><br>' + escapeHtml(shop.address) + '</p>' +
      '<p>' + escapeHtml(shop.hours) + '</p>' +
      '<p>Call <a href="tel:' + escapeHtml(shop.phone) + '">' + escapeHtml(shop.phoneDisplay) + '</a>' +
      ' &middot; <a href="mailto:' + escapeHtml(shop.email) + '">' + escapeHtml(shop.email) + '</a></p>' +
      '</div></footer>';
  }

  // Call first, then WhatsApp and email (owner's order, D-014).
  function contactButtons(size) {
    var big = size === 'big' ? ' btn-big' : '';
    return '<a class="btn btn-call' + big + '" href="tel:' + escapeHtml(shop.phone) + '">Call ' + escapeHtml(shop.phoneDisplay) + '</a>' +
      '<a class="btn btn-wa" href="' + whatsappUrl('Hi Gujarat Sales, I want to ask about your products.') + '">WhatsApp</a>' +
      '<a class="btn btn-mail" href="mailto:' + escapeHtml(shop.email) + '">Email</a>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || '';

    var header = document.getElementById('site-header');
    if (header) header.outerHTML = renderHeader(page);

    var footer = document.getElementById('site-footer');
    if (footer) footer.outerHTML = renderFooter();

    document.querySelectorAll('[data-contact]').forEach(function (el) {
      el.innerHTML = contactButtons(el.getAttribute('data-contact'));
    });

    document.querySelectorAll('[data-ask]').forEach(function (el) {
      var item = el.getAttribute('data-ask');
      el.setAttribute('href', whatsappUrl('Hi Gujarat Sales, I want to ask about: ' + item));
    });

    document.querySelectorAll('[data-icon]').forEach(function (el) {
      el.innerHTML = icon(el.getAttribute('data-icon'));
    });

    document.querySelectorAll('[data-field]').forEach(function (el) {
      var key = el.getAttribute('data-field');
      if (key === 'map') {
        el.setAttribute('href', shop.mapUrl);
      } else if (shop[key] !== undefined) {
        el.textContent = shop[key];
      }
    });

    document.body.insertAdjacentHTML('beforeend',
      '<a class="float-wa" href="' + whatsappUrl('Hi Gujarat Sales, I want to ask about your products.') +
      '" aria-label="Chat on WhatsApp">WhatsApp</a>');
  });
})();
