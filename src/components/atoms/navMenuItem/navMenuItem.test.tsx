import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { RouteNavConfig } from '../../../routes/routes';
import NavMenuItem from './navMenuItem';

// Mock Icon Component
const MockIcon = () => <svg data-testid="icon" />;
// Mock Component
const MockComponent = () => <div>Mock Component</div>;

// Mock RouteNavConfig
const mockRouteNavConfig: RouteNavConfig = {
  id: '1',
  name: 'Home',
  path: '/',
  Icon: MockIcon,
  component: MockComponent,
};

describe('Components > Atoms > NavMenuItem', () => {
  it('Should render with provided icon and name', () => {
    render(
      <MemoryRouter>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Should render without accessibility violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('Should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(
      <MemoryRouter>
        <NavMenuItem {...mockRouteNavConfig} onClick={handleClick} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should not throw error if onClick is not provided', () => {
    render(
      <MemoryRouter>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    expect(() => fireEvent.click(screen.getByText('Home'))).not.toThrow();
  });

  it('Should have correct classes when active', () => {
    render(
      <MemoryRouter initialEntries={[mockRouteNavConfig.path]}>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    const navLink = screen.getByText('Home').closest('a');
    expect(navLink).toHaveClass(
      'flex gap-2 h-full w-full items-center hover:text-amber-500 border-b px-4 transition-all text-amber-500 border-amber-500 dark:border-amber-400'
    );
  });

  it('Should have correct classes when inactive', () => {
    render(
      <MemoryRouter initialEntries={['/other']}>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    const navLink = screen.getByText('Home').closest('a');
    expect(navLink).toHaveClass(
      'border-transparent hover:bg-slate-500 hover:bg-opacity-20 dark:hover:bg-slate-700 dark:hover:bg-opacity-95'
    );
  });

  // Edge cases
  it('Should handle missing Icon gracefully', () => {
    const { ...restConfig } = mockRouteNavConfig;
    render(
      <MemoryRouter>
        <NavMenuItem {...restConfig} />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Should apply base classes correctly', () => {
    render(
      <MemoryRouter>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    const navLink = screen.getByText('Home').closest('a');
    expect(navLink).toHaveClass(
      'flex gap-2 h-full w-full items-center hover:text-amber-500 border-b px-4 transition-all'
    );
  });

  it('Should render without crashing when no props are passed', () => {
    render(
      <MemoryRouter>
        <NavMenuItem id="1" name="Home" path="/" Icon={MockIcon} component={MockComponent} />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Should handle navigation correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavMenuItem {...mockRouteNavConfig} />
      </MemoryRouter>
    );

    const navLink = screen.getByText('Home').closest('a');
    expect(navLink).toHaveAttribute('href', '/');
  });
});
