import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Header from './header';

describe('Components > Atoms > Header', () => {
  it('Should render with default classes', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass('w-full flex justify-between');
    expect(headerElement).not.toHaveClass('shadow-md');
    expect(headerElement).toHaveClass('relative');
  });

  it('Should apply shadow class when useShadow is true', () => {
    render(<Header useShadow />);
    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass('shadow-md');
  });

  it('Should apply fixed class when fixed is true', () => {
    render(<Header fixed />);
    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass('fixed top-0 left-0');
    expect(headerElement).not.toHaveClass('relative');
  });

  it('Should apply the justifyContent class', () => {
    render(<Header justifyContent="justify-around" />);
    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass('justify-around');
  });

  it('Should apply multiple classes correctly', () => {
    render(<Header useShadow fixed justifyContent="justify-end" />);
    const headerElement = screen.getByRole('banner');

    expect(headerElement).toHaveClass('w-full flex shadow-md fixed top-0 left-0 justify-end');
  });

  it('Should render children correctly', () => {
    render(
      <Header>
        <div>Child Element</div>
      </Header>
    );
    const childElement = screen.getByText('Child Element');

    expect(childElement).toBeInTheDocument();
  });

  it('Should not have accessibility violations', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
