// Conversion events for Google Tag Manager. Each call pushes `{ event, ...params }` to the dataLayer;
// GTM turns them into GA4 events (and ad conversions) without touching this code.

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as DataLayerWindow;
  (w.dataLayer ||= []).push({ event, ...params });
}

// Where on the page a link lives, from the nearest section id (e.g. "inicio", "motores", "sucursales").
const locationOf = (el: Element) => el.closest('[id]')?.id ?? 'page';

/** One listener for every WhatsApp and phone link on the page, including ones rendered later. */
export function trackContactLinks() {
  document.addEventListener(
    'click',
    (e) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        track('whatsapp_click', { link_location: locationOf(link), link_text: link.textContent?.trim() });
      } else if (href.startsWith('tel:')) {
        track('phone_click', { link_location: locationOf(link), phone_number: href.slice(4) });
      }
    },
    { capture: true }
  );
}
