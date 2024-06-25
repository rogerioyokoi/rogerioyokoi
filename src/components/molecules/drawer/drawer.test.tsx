import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import { Mock, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import Drawer from './drawer';

describe('Components > Molecules > Drawer', () => {
  let handleClose: Mock;

  beforeEach(() => {
    handleClose = vi.fn();
  });

  it('Should render drawer when isOpen is true', () => {
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });

  it('Should render drawer without accessibility violations', async () => {
    const { container } = render(
      <Drawer isOpen={true} onClose={handleClose} ariaLabel="Test Drawer">
        Drawer Content
      </Drawer>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Should not render drawer when isOpen is false', () => {
    render(
      <Drawer isOpen={false} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const drawer = screen.queryByRole('dialog');
    expect(drawer).toBeNull();
  });

  it('Should render children correctly', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()}>
        Drawer Content
      </Drawer>
    );
    const content = screen.getByText('Drawer Content');
    expect(content).toBeInTheDocument();
  });

  it('Should call onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const closeButton = screen.getByRole('button', { name: 'Fechar a Gaveta' });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onClose when backdrop is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const backdrop = screen.getByRole('button', { name: /Cancelar e Fechar a gaveta/i });
    fireEvent.click(backdrop);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onClose when ESC key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onClose when Enter key is pressed on backdrop', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const backdrop = screen.getByRole('button', { name: /Cancelar e Fechar a gaveta/i });
    fireEvent.keyDown(backdrop, { key: 'Enter' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onClose when Space key is pressed on backdrop', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    const backdrop = screen.getByRole('button', { name: /Cancelar e Fechar a gaveta/i });
    fireEvent.keyDown(backdrop, { key: ' ' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should apply correct classes for direction "left"', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} direction="left">
        Drawer Content
      </Drawer>
    );
    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveClass('top-0 left-0 h-full w-64 translate-x-0');
  });

  it('Should apply correct classes for direction "right"', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} direction="right">
        Drawer Content
      </Drawer>
    );
    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveClass('top-0 right-0 h-full w-64 translate-x-0');
  });

  it('Should apply correct classes for direction "top"', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} direction="top">
        Drawer Content
      </Drawer>
    );
    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveClass('top-0 left-0 w-full h-64 translate-y-0');
  });

  it('Should apply correct classes for direction "bottom"', () => {
    render(
      <Drawer isOpen={true} onClose={vi.fn()} direction="bottom">
        Drawer Content
      </Drawer>
    );
    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveClass('bottom-0 left-0 w-full h-64 translate-y-0');
  });

  it('Should not call onClose when a non-Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Drawer isOpen={true} onClose={handleClose}>
        Drawer Content
      </Drawer>
    );
    fireEvent.keyDown(document, { key: 'A' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('Should not render backdrop when isOpen is false', () => {
    render(
      <Drawer isOpen={false} onClose={vi.fn()}>
        Drawer Content
      </Drawer>
    );
    const backdrop = screen.queryByRole('button', { name: /close drawer/i });
    expect(backdrop).not.toBeInTheDocument();
  });

  it('Should render correctly with no children', () => {
    render(<Drawer isOpen={true} onClose={vi.fn()} />);
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
});
