import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router';
import { css } from '../../../styled-system/css';
import {
  RiHomeLine,
  RiChat1Line,
  RiPresentationLine,
  RiFileTextLine,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from '@remixicon/react';

const ICON_SIZE = 16;

const pages = [
  { label: 'Home', path: '/', icon: RiHomeLine },
  { label: 'Thoughts', path: '/thoughts', icon: RiChat1Line },
  {
    label: 'Hot Swapping Our Rails Front End in Secret',
    path: '/thoughts/hot-swapping-our-rails-front-end-in-secret',
    icon: RiPresentationLine,
    keywords: ['railsconf', 'betterment'],
  },
  {
    label: 'Hot Swapping Our Rails Front End in Secret — Transcript',
    path: '/thoughts/hot-swapping-our-rails-front-end-in-secret/transcript',
    icon: RiFileTextLine,
  },
  {
    label: 'Living Style Guide Driven Development',
    path: '/thoughts/living-style-guide-driven-development',
    icon: RiPresentationLine,
    keywords: ['emberconf', 'ember'],
  },
  {
    label: 'Living Style Guide Driven Development — Transcript',
    path: '/thoughts/living-style-guide-driven-development/transcript',
    icon: RiFileTextLine,
  },
] as const;

const socials = [
  { label: 'Twitter / X', url: 'https://twitter.com/chrislopresto', icon: RiTwitterXFill },
  { label: 'GitHub', url: 'https://github.com/chrislopresto', icon: RiGithubFill },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chrislopresto', icon: RiLinkedinBoxFill },
] as const;

const overlayStyle = css({
  position: 'fixed',
  inset: 0,
  bg: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
});

const contentStyle = css({
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90vw',
  maxWidth: '480px',
  bg: 'background',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'lg',
  overflow: 'hidden',
  zIndex: 101,
});

const inputStyle = css({
  width: '100%',
  p: '3',
  bg: 'transparent',
  border: 'none',
  borderBottom: '1px solid',
  borderColor: 'border',
  color: 'default',
  textStyle: 'body',
  outline: 'none',
});

const listStyle = css({
  maxHeight: '300px',
  overflow: 'auto',
  p: '2',
  '& [cmdk-group-heading]': {
    textStyle: 'subheading',
    color: 'default',
    opacity: 0.6,
    px: '2',
    py: '1',
    textTransform: 'uppercase',
  },
});

const itemStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  px: '2',
  py: '2',
  borderRadius: 'md',
  cursor: 'pointer',
  textStyle: 'body',
  color: 'default',
  '&[data-selected=true]': {
    bg: 'backgroundSecondary',
  },
});

type CommandPaletteProps = {
  defaultOpen?: boolean;
};

export function CommandPalette({ defaultOpen = false }: CommandPaletteProps) {
  const [open, setOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Command palette">
      <div className={overlayStyle} cmdk-overlay="" onClick={() => setOpen(false)} />
      <div className={contentStyle}>
        <Command.Input className={inputStyle} placeholder="Type a command or search..." />
        <Command.List className={listStyle}>
          <Command.Empty className={css({ p: '3', textStyle: 'body', color: 'default', opacity: 0.6 })}>
            No results found.
          </Command.Empty>
          <Command.Group heading="Pages">
            {pages.map((page) => (
              <Command.Item
                key={page.path}
                className={itemStyle}
                keywords={'keywords' in page ? [...page.keywords] : undefined}
                onSelect={() => {
                  navigate(page.path);
                  setOpen(false);
                }}
              >
                <page.icon size={ICON_SIZE} />
                {page.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Social">
            {socials.map((social) => (
              <Command.Item
                key={social.url}
                className={itemStyle}
                onSelect={() => {
                  window.open(social.url, '_blank');
                  setOpen(false);
                }}
              >
                <social.icon size={ICON_SIZE} />
                {social.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
