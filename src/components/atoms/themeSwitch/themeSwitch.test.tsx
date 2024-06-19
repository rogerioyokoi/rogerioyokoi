import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';

import ThemeSwitch from './themeSwitch';

const mockMatchMedia = (mediaQuery: string) => {
  return {
    matches: mediaQuery === '(prefers-color-scheme: dark)',
    media: '',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
};

const mockDefinePropertyMatchMedia = (value: 'light' | 'dark') => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      matches: '(prefers-color-scheme: dark)' === `(prefers-color-scheme: ${value})`,
    })),
  });
};

describe('Components > Atoms > ThemeSwitch', () => {
  beforeEach(() => {
    localStorage.clear();

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });
  });

  it('Should not have accessibility violations', async () => {
    const { container } = render(<ThemeSwitch />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('Should render the ThemeSwitch component', () => {
    render(<ThemeSwitch />);

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });

  describe('Should use system mode preference if stored theme is not set', () => {
    it('Light System mode preference', () => {
      mockDefinePropertyMatchMedia('light');

      render(<ThemeSwitch />);

      const switchElement = screen.getByRole('checkbox');
      expect(switchElement).not.toBeChecked();
      expect(document.documentElement.hasAttribute('data-mode')).toBe(false);
    });

    it('Dark System mode preference', () => {
      mockDefinePropertyMatchMedia('dark');

      render(<ThemeSwitch />);

      const switchElement = screen.getByRole('checkbox');
      expect(switchElement).toBeChecked();
      expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
    });
  });

  describe('Should use localStorage value over the system prefers when is setted before', () => {
    it('LocalStorage with dark value and system prefers light', () => {
      localStorage.setItem('theme', 'dark');
      mockDefinePropertyMatchMedia('light');

      render(<ThemeSwitch />);

      const switchElement = screen.getByRole('checkbox');
      expect(switchElement).toBeChecked();
      expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
    });

    it('LocalStorage with light value and system prefers dark', () => {
      localStorage.setItem('theme', 'light');
      mockDefinePropertyMatchMedia('dark');

      render(<ThemeSwitch />);

      const switchElement = screen.getByRole('checkbox');
      expect(switchElement).not.toBeChecked();
      expect(document.documentElement.hasAttribute('data-mode')).toBe(false);
    });

    it('LocalStorage with theme diff of (dark or light), uses a system prefers', () => {
      localStorage.setItem('theme', 'red');
      mockDefinePropertyMatchMedia('dark');

      render(<ThemeSwitch />);

      const switchElement = screen.getByRole('checkbox');
      expect(switchElement).toBeChecked();
      expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
    });
  });

  it('should toggle dark mode when clicked', () => {
    // Arrange
    render(<ThemeSwitch />);
    const switchElement = screen.getByRole('checkbox') as HTMLFormElement;

    expect(switchElement.checked).toBe(true);

    // Act
    fireEvent.click(switchElement);

    // Assert
    expect(switchElement).not.toBeChecked();
    expect(document.documentElement.hasAttribute('data-mode')).toBe(false);

    // Act
    fireEvent.click(switchElement);

    // Assert
    expect(switchElement).toBeChecked();
    expect(document.documentElement.getAttribute('data-mode')).toBe('dark');
  });
});
