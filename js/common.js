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

  function renderHeader(current) {
    var links = NAV.map(function (item) {
      var active = item.page === current ? ' aria-current="page"' : '';
      return '<a href="' + item.href + '"' + active + '>' + item.label + '</a>';
    }).join('');
    return '<header class="site-header"><div class="wrap head-row">' +
      '<a class="brand" href="index.html"><span class="brand-main">GUJARAT</span> ' +
      '<span class="brand-sub">SALES</span></a>' +
      '<nav class="site-nav">' + links + '</nav></div></header>';
  }

  function renderFooter() {
    return '<footer class="site-footer"><div class="wrap">' +
      '<p><strong>' + escapeHtml(shop.name) + '</strong><br>' + escapeHtml(shop.address) + '</p>' +
      '<p>' + escapeHtml(shop.hours) + '</p>' +
      '<p><a href="contact.html">Contact us</a></p>' +
      '</div></footer>';
  }

  // Call first, then WhatsApp and email (owner's order).
  function contactButtons() {
    return '<a class="btn btn-call" href="tel:' + escapeHtml(shop.phone) + '">Call</a>' +
      '<a class="btn btn-wa" href="' + whatsappUrl('Hi Gujarat Sales, I want to ask about your products.') + '">WhatsApp</a>' +
      '<a class="btn btn-mail" href="mailto:' + escapeHtml(shop.email) + '">Email</a>';
  }

  function renderFloatingWhatsapp() {
    return '<a class="float-wa" href="' + whatsappUrl('Hi Gujarat Sales, I want to ask about your products.') + '" aria-label="Chat on WhatsApp">WhatsApp</a>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || '';

    var header = document.getElementById('site-header');
    if (header) header.outerHTML = renderHeader(page);

    var footer = document.getElementById('site-footer');
    if (footer) footer.outerHTML = renderFooter();

    document.querySelectorAll('[data-contact]').forEach(function (el) {
      el.innerHTML = contactButtons();
    });

    document.querySelectorAll('[data-ask]').forEach(function (el) {
      var item = el.getAttribute('data-ask');
      el.setAttribute('href', whatsappUrl('Hi Gujarat Sales, I want to ask about: ' + item));
    });

    document.querySelectorAll('[data-field]').forEach(function (el) {
      var key = el.getAttribute('data-field');
      if (key === 'map') {
        el.setAttribute('href', shop.mapUrl);
      } else if (shop[key] !== undefined) {
        el.textContent = shop[key];
      }
    });

    document.body.insertAdjacentHTML('beforeend', renderFloatingWhatsapp());
  });
})();
