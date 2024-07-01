import { useMediaQuery } from '@react-hook/media-query';
import { render, screen } from '@testing-library/react';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { baseDescription } from '../../../assets/data/meta.const';
import Home from './home';

// Mock para o hook useMediaQuery
vi.mock('@react-hook/media-query', () => ({
  useMediaQuery: vi.fn(),
}));

describe('Components > Pages > Home', () => {
  beforeEach(() => {
    // Define o comportamento padrão do hook useMediaQuery
    (useMediaQuery as Mock).mockReturnValue(false);
  });

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations', async () => {
      const { container } = render(<Home />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render Avatar component correctly', () => {
      render(<Home />);
      const avatar = screen.getByAltText('Foto de rosto do proprietário do website: Rogério Yokoi');
      expect(avatar).toBeInTheDocument();
    });

    it('Should render Title component with correct text', () => {
      render(<Home />);
      const title = screen.getByText('Olá, eu sou Rogério Yokoi');
      const subTitle = screen.getByText('Engenheiro de software Front-End');
      expect(title).toBeInTheDocument();
      expect(subTitle).toBeInTheDocument();
    });

    it('Should render the description correctly', () => {
      render(<Home />);
      const description = screen.getByText(baseDescription);
      expect(description).toBeInTheDocument();
    });
  });

  describe('Responsiveness', () => {
    it('Should render avatar with correct size for small screens', () => {
      (useMediaQuery as Mock).mockReturnValue(true);
      render(<Home />);
      const avatar = screen.getByAltText('Foto de rosto do proprietário do website: Rogério Yokoi');
      expect(avatar).toHaveAttribute('width', '350');
      expect(avatar).toHaveAttribute('height', '350');
    });

    it('Should render avatar with correct size for large screens', () => {
      (useMediaQuery as Mock).mockReturnValue(false);
      render(<Home />);
      const avatar = screen.getByAltText('Foto de rosto do proprietário do website: Rogério Yokoi');
      expect(avatar).toHaveAttribute('width', '450');
      expect(avatar).toHaveAttribute('height', '450');
    });
  });
});
