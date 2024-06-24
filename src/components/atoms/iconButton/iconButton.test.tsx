import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import IconButton from './iconButton';

describe('Components > Atoms > IconButton', () => {
  it('Should render button with label', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toBeInTheDocument();
  });

  it('Should render button without accessibility violations', async () => {
    const { container } = render(<IconButton label="icon button">Icon</IconButton>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Should render children correctly', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toHaveTextContent('Icon');
  });

  it('Should handle click events', () => {
    const handleClick = vi.fn();
    render(
      <IconButton label="icon button" onClick={handleClick}>
        Icon
      </IconButton>
    );
    const button = screen.getByRole('button', { name: /icon button/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when the disabled prop is true', () => {
    render(
      <IconButton label="icon button" disabled>
        Icon
      </IconButton>
    );
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toBeDisabled();
  });

  it('Should not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(
      <IconButton label="icon button" onClick={handleClick} disabled>
        Icon
      </IconButton>
    );
    const button = screen.getByRole('button', { name: /icon button/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('Should apply correct classes when disabled', () => {
    render(
      <IconButton label="icon button" disabled>
        Icon
      </IconButton>
    );
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });

  it('Should apply correct hover and focus classes when not disabled', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toHaveClass(
      'hover:bg-slate-800',
      'hover:bg-opacity-20',
      'dark:hover:bg-slate-50',
      'dark:hover:bg-opacity-10',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500',
      'dark:focus:ring-gray-400'
    );
  });

  it('Should have correct aria-label for accessibility', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toHaveAttribute('aria-label', 'icon button');
  });

  it('Should render without children', () => {
    render(<IconButton label="icon button" />);
    const button = screen.getByRole('button', { name: /icon button/i });
    expect(button).toBeInTheDocument();
  });

  it('Should handle click events when onClick is not provided', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    fireEvent.click(button);
    expect(button).toBeInTheDocument(); // Just ensuring it does not throw
  });

  // Additional edge cases
  it('Should not crash when label is empty', () => {
    render(<IconButton label="">Icon</IconButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Should focus correctly when tabbed', () => {
    render(<IconButton label="icon button">Icon</IconButton>);
    const button = screen.getByRole('button', { name: /icon button/i });
    button.focus();
    expect(button).toHaveFocus();
  });
});
