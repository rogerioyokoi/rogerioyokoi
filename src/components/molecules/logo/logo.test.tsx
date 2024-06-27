import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Logo from './logo';

describe('Components > Molecules > Logo', () => {
  it('Should render without accessibility violations', async () => {
    const { container } = render(<Logo />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('Should render with correct texts', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('Rogério Yokoi')).toBeInTheDocument();
    expect(getByText('Engenheiro de Software Front-End')).toBeInTheDocument();
  });

  it('Should render logoIcon component', () => {
    const { container } = render(<Logo />);

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders with correct text', () => {
    const { getByText } = render(<Logo />);
    expect(getByText('Rogério Yokoi')).toBeInTheDocument();
    expect(getByText('Engenheiro de Software Front-End')).toBeInTheDocument();
  });
});
