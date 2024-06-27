import { render } from '@testing-library/react';
import { describe, it } from 'node:test';
import { expect } from 'vitest';
import { axe } from 'vitest-axe';
import HeaderApplication from './headerApplication';

describe('Components > Organisms > HeaderApplication', () => {
  it('Should render without accessibility violations', async () => {
    const { container } = render(<HeaderApplication />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
