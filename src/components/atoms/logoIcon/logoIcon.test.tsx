import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import LogoIcon from './logoIcon';

describe('Components > Atom > LogoIcon', () => {
  it('should renders with correct', () => {
    const { container } = render(
      <div style={{ width: '100px', height: '100px' }}>
        <LogoIcon />
      </div>
    );
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('Should not have accessibility violations', async () => {
    const { container } = render(
      <div style={{ width: '100px', height: '100px' }}>
        <LogoIcon />
      </div>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders with correct colors', () => {
    const { container } = render(<LogoIcon />);
    const rectElement = container.querySelector('rect');
    const pathElement = container.querySelector('path');
    const lineElement = container.querySelector('line');
    expect(rectElement).toHaveAttribute('stroke', 'currentColor');
    expect(pathElement).toHaveAttribute('fill', 'currentColor');
    expect(lineElement).toHaveAttribute('stroke', 'currentColor');
  });
});
