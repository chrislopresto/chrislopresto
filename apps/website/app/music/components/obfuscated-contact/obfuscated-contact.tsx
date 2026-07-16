import { useSyncExternalStore, type ReactElement } from 'react';
import { css } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';
import { VisuallyHidden } from '../../../components/visually-hidden/visually-hidden';
import type { ContactParts } from '../../content';

export type ObfuscatedContactProps = {
  contact: ContactParts;
  emailLabel?: string;
  phoneLabel?: string;
  css?: SystemStyleObject;
};

const cardCss: SystemStyleObject = {
  border: '2px solid var(--music-ink)',
  background: 'var(--music-paper-lift)',
  boxShadow: '5px 5px 0 var(--music-paper-deep)',
  padding: '1.4rem 1.5rem',
  maxWidth: '26rem',
};

const labelCss = css({
  display: 'block',
  fontSize: '.66rem',
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--music-red)',
});

const valueCss = css({
  display: 'block',
  fontWeight: 700,
  fontSize: 'clamp(.95rem, 2.6vw, 1.12rem)',
  margin: '.15rem 0 1rem',
  textDecoration: 'none',
  wordBreak: 'break-all',
  color: 'inherit',
  '&:last-child': {
    marginBottom: 0,
  },
  '&:hover': {
    color: 'var(--music-red)',
  },
});

const emptySubscribe = () => () => {};

/** False during SSR and hydration, true once the page is interactive. */
function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * Inert pre-hydration stand-in: a redacted liner-note field. The real value
 * never exists in the SSR HTML, so scrapers only ever see this.
 */
function RedactedValue() {
  return (
    <span className={valueCss}>
      <span aria-hidden="true">············</span>
      <VisuallyHidden>Contact details load with the page to deter scrapers.</VisuallyHidden>
    </span>
  );
}

/**
 * Spam-resistant contact card. Email and phone arrive as parts and are only
 * joined at render time in the browser (after the `mounted` effect flips), so
 * the assembled strings never appear in source, the bundle, or SSR HTML.
 */
export function ObfuscatedContact({
  contact,
  emailLabel = 'Mail',
  phoneLabel = 'Telephone',
  css: cssProp = {},
}: ObfuscatedContactProps): ReactElement {
  const mounted = useHydrated();

  const { email, phone } = contact;
  // Assembled at render time from parts — never a module-scope constant.
  const emailAddress = mounted ? email.user + '@' + email.domain + '.' + email.tld : null;
  const phoneDisplay = mounted ? `(${phone.area}) ${phone.prefix}-${phone.line}` : null;
  const phoneHref = mounted ? 'tel:+' + phone.country + phone.area + phone.prefix + phone.line : null;

  return (
    <div className={css(cardCss, cssProp)}>
      <span className={labelCss}>{emailLabel}</span>
      {emailAddress ? (
        <a className={valueCss} href={'mailto:' + emailAddress}>
          {emailAddress}
        </a>
      ) : (
        <RedactedValue />
      )}
      <span className={labelCss}>{phoneLabel}</span>
      {phoneDisplay && phoneHref ? (
        <a className={valueCss} href={phoneHref}>
          {phoneDisplay}
        </a>
      ) : (
        <RedactedValue />
      )}
    </div>
  );
}
