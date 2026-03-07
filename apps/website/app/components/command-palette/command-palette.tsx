import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router';
import { css } from '../../../styled-system/css';
import { pages, socials } from './command-palette-items';

const ICON_SIZE = 16;

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
                keywords={page.keywords}
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
