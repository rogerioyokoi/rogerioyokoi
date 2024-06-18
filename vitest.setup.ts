import '@testing-library/jest-dom';
import * as TestingLibraryMatchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import 'vitest-axe/extend-expect';
import * as AxeMatchers from 'vitest-axe/matchers';

expect.extend(AxeMatchers);
expect.extend(TestingLibraryMatchers);

afterEach(() => {
  cleanup();
});
