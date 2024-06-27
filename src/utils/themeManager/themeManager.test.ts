import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { getThemePaths, setThemePaths } from './themeManager';

// Mocks to simulate the browser environment
const mockMatchMedia = (matches: boolean) => ({
  matches,
  addEventListener: vi.fn(),
});

describe('Utils > ThemeManager', () => {
  // Tests for getThemePaths
  describe('Function getThemePaths', () => {
    it('Should return correct paths for light mode', () => {
      // Simulate matchMedia for light mode
      (window.matchMedia as Mock).mockReturnValue(mockMatchMedia(false));

      const paths = getThemePaths();
      expect(paths.favicon).toBe('/favicons/light/favicon.ico');
      expect(paths.appleTouchIcon).toBe('/favicons/light/apple-touch-icon.png');
      expect(paths.favicon32).toBe('/favicons/light/favicon-32x32.png');
      expect(paths.favicon16).toBe('/favicons/light/favicon-16x16.png');
      expect(paths.safariPinnedTab).toBe('/favicons/light/safari-pinned-tab.svg');
      expect(paths.themeColor).toBe('#ffffff');
    });

    it('Should return correct paths for dark mode', () => {
      // Simulate matchMedia for dark mode
      (window.matchMedia as Mock).mockReturnValue(mockMatchMedia(true));

      const paths = getThemePaths();
      expect(paths.favicon).toBe('/favicons/dark/favicon.ico');
      expect(paths.appleTouchIcon).toBe('/favicons/dark/apple-touch-icon.png');
      expect(paths.favicon32).toBe('/favicons/dark/favicon-32x32.png');
      expect(paths.favicon16).toBe('/favicons/dark/favicon-16x16.png');
      expect(paths.safariPinnedTab).toBe('/favicons/dark/safari-pinned-tab.svg');
      expect(paths.themeColor).toBe('#1e1e1e');
    });
  });

  // Tests for setThemePaths
  describe('Function setThemePaths', () => {
    beforeEach(() => {
      document.head.innerHTML = `
      <link id="favicon" rel="icon" href="/favicons/light/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicons/light/apple-touch-icon.png" />
      <link rel="icon" sizes="32x32" href="/favicons/light/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/favicons/light/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicons/light/safari-pinned-tab.svg" color="#1e1e1e" />
      <meta name="theme-color" content="#ffffff" />
    `;
    });

    it('Should update icon links for dark mode', () => {
      // Simulate matchMedia for dark mode
      (window.matchMedia as Mock).mockReturnValue(mockMatchMedia(true));

      setThemePaths();

      // Check if the links were updated correctly
      expect(document.getElementById('favicon')?.getAttribute('href')).toBe('/favicons/dark/favicon.ico');
      expect(document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href')).toBe(
        '/favicons/dark/apple-touch-icon.png'
      );
      expect(document.querySelector('link[rel="icon"][sizes="32x32"]')?.getAttribute('href')).toBe(
        '/favicons/dark/favicon-32x32.png'
      );
      expect(document.querySelector('link[rel="icon"][sizes="16x16"]')?.getAttribute('href')).toBe(
        '/favicons/dark/favicon-16x16.png'
      );
      expect(document.querySelector('link[rel="mask-icon"]')?.getAttribute('href')).toBe(
        '/favicons/dark/safari-pinned-tab.svg'
      );
      expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#1e1e1e');
    });

    it('Should update icon links for light mode', () => {
      // Simulate matchMedia for light mode
      (window.matchMedia as Mock).mockReturnValue(mockMatchMedia(false));

      setThemePaths();

      // Check if the links were updated correctly
      expect(document.getElementById('favicon')?.getAttribute('href')).toBe('/favicons/light/favicon.ico');
      expect(document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href')).toBe(
        '/favicons/light/apple-touch-icon.png'
      );
      expect(document.querySelector('link[rel="icon"][sizes="32x32"]')?.getAttribute('href')).toBe(
        '/favicons/light/favicon-32x32.png'
      );
      expect(document.querySelector('link[rel="icon"][sizes="16x16"]')?.getAttribute('href')).toBe(
        '/favicons/light/favicon-16x16.png'
      );
      expect(document.querySelector('link[rel="mask-icon"]')?.getAttribute('href')).toBe(
        '/favicons/light/safari-pinned-tab.svg'
      );
      expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#ffffff');
    });
  });
});
