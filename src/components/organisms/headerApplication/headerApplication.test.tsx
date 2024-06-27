import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import HeaderApplication from './headerApplication';

describe('Components > Organisms > HeaderApplication', () => {
  it('Should render without accessibility violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderApplication />
      </MemoryRouter>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
