import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import FullPageLayout from './fullPageLayout';

describe('FullPageLayout Component', () => {
  it('renders children correctly', () => {
    render(
      <FullPageLayout>
        <div>Test Content</div>
      </FullPageLayout>
    );
    const testContentElement = screen.getByText('Test Content');
    expect(testContentElement).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FullPageLayout>
        <div>Test Content</div>
      </FullPageLayout>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
