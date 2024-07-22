import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Avatar from './avatar';
import { AVATAR_TESTID } from './avatar.types';

describe('Components > Atoms > Avatar', () => {
  const mockSrc = 'https://via.placeholder.com/150';
  const mockAlt = 'Avatar de exemplo';
  const mockSize = 150;
  const mockSources = [
    { srcSet: 'https://via.placeholder.com/600x400', media: '(min-width: 600px)' },
    { srcSet: 'https://via.placeholder.com/300x200', media: '(min-width: 300px)' },
  ];
  const mockBrokenSrc = 'https://example.com/broken-image';

  describe('Snapshot', () => {
    it('Should match snapshot without sources in loading state ', () => {
      const { container } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot in loading state with sources', () => {
      const { container } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} sources={mockSources} />);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot without sources after loading state', async () => {
      const { container, getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(container).toMatchSnapshot();
      });
    });

    it('Should match snapshot with sources after loading state', async () => {
      const { container, getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(container).toMatchSnapshot();
      });
    });

    it('Should match snapshot without sources on error state', async () => {
      const { container, getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(container).toMatchSnapshot();
      });
    });

    it('Should match snapshot with sources on error state', async () => {
      const { container, getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations', async () => {
      const { container } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with sources', async () => {
      const { container } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} sources={mockSources} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render image correctly', () => {
      const { getByAltText } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      expect(getByAltText(mockAlt)).toBeInTheDocument();
    });

    it('Should render sources correctly', () => {
      const { queryAllByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} sources={mockSources} />);

      const iElmSources = queryAllByTestId(AVATAR_TESTID.SOURCE);
      expect(iElmSources.length).toBe(mockSources.length);
    });
  });

  describe('Loading State', () => {
    it('Should show loading state initially', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      expect(getByTestId(AVATAR_TESTID.LOADING)).toBeInTheDocument();
    });

    it('Should hide loading state after image load', async () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmLoading = getByTestId(AVATAR_TESTID.LOADING);
      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      expect(iElmLoading).toBeInTheDocument();

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(iElmLoading).not.toBeVisible();
      });

      expect(iElmImage).toBeVisible();
    });
  });

  describe('Error State', () => {
    it('Should show error state when image fails to load', async () => {
      const { getByTestId } = render(<Avatar src={mockBrokenSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        const errorElement = getByTestId(AVATAR_TESTID.ERROR);
        expect(errorElement).toBeInTheDocument();
      });
    });

    it('Should show error message when image fails to load', async () => {
      const { getByTestId } = render(<Avatar src={mockBrokenSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        const errorElement = getByTestId(AVATAR_TESTID.ERROR);
        expect(errorElement.textContent).toBe('Erro');
      });
    });
  });

  describe('CSS Classes and Styles', () => {
    it('Should container have correct classes on loading image', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmContainer = getByTestId(AVATAR_TESTID.CONTAINER);

      expect(iElmContainer).toHaveClass('relative overflow-hidden rounded-full border-amber-500 border-4 bg-gray-200');
    });

    it('Should container have correct classes after loading image', async () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmContainer = getByTestId(AVATAR_TESTID.CONTAINER);
      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(iElmContainer).toHaveClass('relative overflow-hidden rounded-full border-amber-500 border-4');
      });
    });

    it('Should container have default style with size prop when not received', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} />);

      const iElmContainer = getByTestId(AVATAR_TESTID.CONTAINER);

      expect(iElmContainer).toHaveStyle({ width: '100px', height: '100px' });
    });

    it('Should container have correct style with size prop', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmContainer = getByTestId(AVATAR_TESTID.CONTAINER);

      expect(iElmContainer).toHaveStyle({ width: `${mockSize}px`, height: `${mockSize}px` });
    });

    it('Should image have correct value on attr width and height', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      expect(iElmImage).toHaveAttribute('width', `${mockSize}`);
      expect(iElmImage).toHaveAttribute('height', `${mockSize}`);
    });

    it('Should image have correct classes on loading', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      expect(iElmImage).toHaveClass('object-cover w-full h-full opacity-0');
    });

    it('Should image have correct classes after loading', async () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(iElmImage).toHaveClass('object-cover w-full h-full');
      });
    });

    it('Should image have correct classes after loading with error', async () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        expect(iElmImage).toHaveClass('object-cover w-full h-full opacity-0');
      });
    });

    it('Should loading have correct classes', () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmLoading = getByTestId(AVATAR_TESTID.LOADING);

      expect(iElmLoading).toHaveClass('absolute inset-0 bg-gray-300 animate-pulse');
    });

    it('Should error have correct classes', async () => {
      const { getByTestId } = render(<Avatar src={mockSrc} alt={mockAlt} size={mockSize} />);

      const iElmImage = getByTestId(AVATAR_TESTID.IMAGE);

      fireEvent.load(iElmImage);

      setTimeout(() => {
        fireEvent.load(iElmImage);
      }, 100);

      fireEvent.error(iElmImage);

      setTimeout(() => {
        fireEvent.error(iElmImage);
      }, 100);

      await waitFor(() => {
        const iElmError = getByTestId(AVATAR_TESTID.ERROR);
        expect(iElmError).toHaveClass('absolute inset-0 flex items-center justify-center bg-red-200 text-red-700');
      });
    });
  });
});
