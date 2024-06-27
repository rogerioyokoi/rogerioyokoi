// themeManager.ts

interface ThemePaths {
  favicon: string;
  appleTouchIcon: string;
  favicon32: string;
  favicon16: string;
  safariPinnedTab: string;
  themeColor: string;
}

export type ThemeMode = 'light' | 'dark';

const getThemeMode = (): ThemeMode => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkMode ? 'dark' : 'light';
};

export const getThemePaths = (): ThemePaths => {
  const themeMode = getThemeMode();

  const paths: ThemePaths = {
    favicon: `/favicons/${themeMode}/favicon.ico`,
    appleTouchIcon: `/favicons/${themeMode}/apple-touch-icon.png`,
    favicon32: `/favicons/${themeMode}/favicon-32x32.png`,
    favicon16: `/favicons/${themeMode}/favicon-16x16.png`,
    safariPinnedTab: `/favicons/${themeMode}/safari-pinned-tab.svg`,
    themeColor: themeMode === 'dark' ? '#1e1e1e' : '#ffffff',
  };

  return paths;
};

export const setThemePaths = () => {
  const { favicon, appleTouchIcon, favicon32, favicon16, safariPinnedTab, themeColor } = getThemePaths();

  // Atualiza os links dos ícones no DOM
  const faviconElement = document.getElementById('favicon') as HTMLLinkElement | null;
  if (faviconElement) {
    faviconElement.href = favicon;
  }

  const appleTouchIconElement = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement | null;
  if (appleTouchIconElement) {
    appleTouchIconElement.href = appleTouchIcon;
  }

  const favicon32Element = document.querySelector('link[rel="icon"][sizes="32x32"]') as HTMLLinkElement | null;
  if (favicon32Element) {
    favicon32Element.href = favicon32;
  }

  const favicon16Element = document.querySelector('link[rel="icon"][sizes="16x16"]') as HTMLLinkElement | null;
  if (favicon16Element) {
    favicon16Element.href = favicon16;
  }

  const safariPinnedTabElement = document.querySelector('link[rel="mask-icon"]') as HTMLLinkElement | null;
  if (safariPinnedTabElement) {
    safariPinnedTabElement.href = safariPinnedTab;
  }

  const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
  if (themeColorMetaTag) {
    themeColorMetaTag.setAttribute('content', themeColor);
  }
};

// Atualiza os links dos ícones no DOM
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  setThemePaths();
});

window.addEventListener('DOMContentLoaded', () => {
  setThemePaths();
});
