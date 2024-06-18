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
        reporter: ['clover', 'cobertura', 'html', 'json', 'lcov', 'teamcity', 'text-lcov'],
        provider: 'istanbul',
        exclude: [...defaultCoverageExclude, '*.config.ts'],
        thresholds: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
          perFile: true,
        },
      },
    },
  })
);
