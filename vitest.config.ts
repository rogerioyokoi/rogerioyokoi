import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const defaultCoverageExclude = configDefaults.coverage?.exclude ?? [];

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      reporters: process.env.GITHUB_ACTIONS
        ? ['github-actions', ['junit', { suiteName: 'Rogério Yokoi - Portfolio - Tests' }], 'json', 'verbose']
        : [['junit', { suiteName: 'Rogério Yokoi - Portfolio - Tests' }], 'json', 'verbose'],
      outputFile: {
        junit: './coverage/junit-report.xml',
        json: './coverage/json-report.json',
      },
      coverage: {
        reporter: ['clover', 'cobertura', 'html', 'json', 'lcov', ['text', { maxCols: 200 }]],
        provider: 'istanbul',
        exclude: [...defaultCoverageExclude, '*.config.{ts,js}'],
        enabled: true,
        thresholds: {
          branches: 0,
          functions: 0,
          lines: 0,
          statements: 0,
        },
      },
    },
  })
);
