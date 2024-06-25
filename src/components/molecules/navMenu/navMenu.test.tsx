import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { navRoutes } from '../../../routes/routes';
import NavMenu from './navMenu';

// Mock NavMenuItem to simplify tests
vi.mock('../../atoms/navMenuItem/navMenuItem', () => ({
  __esModule: true,
  default: ({ name, onClick }: { name: string; onClick: () => void }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div data-testid="nav-menu-item" onClick={onClick}>
      {name}
    </div>
  ),
}));

describe('Components > Molecules > NavMenu', () => {
  it('Should render menu items based on navRoutes', () => {
    render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );

    navRoutes.forEach((route) => {
      expect(screen.getByText(route.name)).toBeInTheDocument();
    });
  });

  it('Should call callback when an item is clicked', () => {
    const handleClick = vi.fn();
    render(
      <MemoryRouter>
        <NavMenu callback={handleClick} />
      </MemoryRouter>
    );

    const menuItem = screen.getAllByTestId('nav-menu-item')[0];
    fireEvent.click(menuItem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should apply vertical classes when isVertical is true', () => {
    render(
      <MemoryRouter>
        <NavMenu isVertical />
      </MemoryRouter>
    );

    const ulElement = screen.getByRole('list');
    expect(ulElement).toHaveClass('flex flex-col w-full');

    const liElements = screen.getAllByRole('listitem');
    liElements.forEach((li) => {
      expect(li).toHaveClass('h-12 items-center');
    });
  });

  it('Should apply horizontal classes when isVertical is false', () => {
    render(
      <MemoryRouter>
        <NavMenu isVertical={false} />
      </MemoryRouter>
    );

    const ulElement = screen.getByRole('list');
    expect(ulElement).toHaveClass('flex g-3 h-full');

    const liElements = screen.getAllByRole('listitem');
    liElements.forEach((li) => {
      expect(li).toHaveClass('h-full');
    });
  });

  // Edge cases
  it('Should render without crashing when navRoutes is empty', () => {
    const originalNavRoutes = [...navRoutes];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navRoutes as any).length = 0; // Temporarily clear navRoutes

    render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );

    expect(screen.queryAllByTestId('nav-menu-item').length).toBe(0);

    // Restore original navRoutes
    Object.assign(navRoutes, originalNavRoutes);
  });

  it('Should render correctly when callback is not provided', () => {
    render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );

    const menuItem = screen.getAllByTestId('nav-menu-item')[0];
    expect(() => fireEvent.click(menuItem)).not.toThrow();
  });
});
