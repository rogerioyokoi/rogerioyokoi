import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { IconButtonProps } from '../../atoms/iconButton/iconButton';
import { DrawerProps } from '../../molecules/drawer/drawer';
import { NavMenuProps } from '../../molecules/navMenu/navMenu';
import NavApplication from './navApplication';

import * as mediaQueryHook from '@react-hook/media-query';

// Mock the components used within NavApplication to simplify testing
vi.mock('@react-hook/media-query', () => ({
  useMediaQuery: vi.fn(),
}));

vi.mock('../../atoms/iconButton/iconButton', () => ({
  __esModule: true,
  default: ({ children, onClick, label }: IconButtonProps) => (
    <button onClick={onClick} aria-label={label}>
      {children}
    </button>
  ),
}));

vi.mock('../../molecules/drawer/drawer', () => ({
  __esModule: true,
  default: ({ isOpen, onClose, children }: DrawerProps) => (
    <div>
      {isOpen && (
        <div role="dialog">
          <button onClick={onClose}>Close Drawer</button>
          {children}
        </div>
      )}
    </div>
  ),
}));

vi.mock('../../molecules/navMenu/navMenu', () => ({
  __esModule: true,
  default: ({ isVertical }: NavMenuProps) => (
    <div data-testid="nav-menu" className={isVertical ? 'vertical' : 'horizontal'}>
      NavMenu
    </div>
  ),
}));

describe('Components > Organisms > NavApplication', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let useMediaQueryMock: { (query: string): boolean; mockReturnValue?: any };

  beforeEach(() => {
    useMediaQueryMock = mediaQueryHook.useMediaQuery;
  });

  it('Should render IconButton and Drawer on mobile or tablet', () => {
    useMediaQueryMock.mockReturnValue(true);

    render(<NavApplication />);

    expect(screen.getByLabelText(/acessar menu/i)).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Should toggle Drawer when IconButton is clicked on mobile or tablet', () => {
    useMediaQueryMock.mockReturnValue(true);

    render(<NavApplication />);

    const menuButton = screen.getByLabelText(/acessar menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/close drawer/i));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Should render NavMenu in vertical mode inside Drawer on mobile or tablet', () => {
    useMediaQueryMock.mockReturnValue(true);

    render(<NavApplication />);

    const menuButton = screen.getByLabelText(/acessar menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByTestId('nav-menu')).toHaveClass('vertical');
  });

  it('Should render NavMenu directly on desktop', () => {
    useMediaQueryMock.mockReturnValue(false);

    render(<NavApplication />);

    expect(screen.getByTestId('nav-menu')).toHaveClass('horizontal');
    expect(screen.queryByLabelText(/acessar menu/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // Edge cases
  it('Should not break when Drawer is closed without being opened', () => {
    useMediaQueryMock.mockReturnValue(true);

    render(<NavApplication />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    const menuButton = screen.getByLabelText(/acessar menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/close drawer/i));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Should render correctly when useMediaQuery returns undefined', () => {
    useMediaQueryMock.mockReturnValue(undefined);

    render(<NavApplication />);

    expect(screen.queryByTestId('nav-menu')).toBeInTheDocument();
    expect(screen.queryByLabelText(/acessar menu/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Should not render Drawer or IconButton when useMediaQuery returns null', () => {
    useMediaQueryMock.mockReturnValue(null);

    render(<NavApplication />);

    expect(screen.queryByTestId('nav-menu')).toBeInTheDocument();
    expect(screen.queryByLabelText(/acessar menu/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
