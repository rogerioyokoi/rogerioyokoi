import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Title from './title';

describe('Components > Atoms > Title', () => {
  const mockTitleProp = 'Test Title Prop';
  const mockSubTitleProp = 'Test Subtitle Prop';
  const iElmTitleTestId = 'title-heading';
  const iElmSubtitleTestId = 'title-subheading';

  describe('Snapshot', () => {
    it('Should component matches snapshot without Subtitle', () => {
      const { container } = render(<Title title={mockTitleProp} />);

      expect(container).toMatchSnapshot();
    });

    it('Should component matches snapshot with all props', () => {
      const { container } = render(<Title title={mockTitleProp} subTitle={mockSubTitleProp} />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations with only title', async () => {
      const { container } = render(<Title title={mockTitleProp} />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with all props', async () => {
      const { container } = render(<Title title={mockTitleProp} subTitle={mockSubTitleProp} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render title correctly', () => {
      const { getByTestId } = render(<Title title={mockTitleProp} />);

      const iElmHeading = getByTestId(iElmTitleTestId);

      expect(iElmHeading).toBeInTheDocument();
      expect(iElmHeading.textContent).toBe(mockTitleProp);
    });

    it('Should not render subtitle element when is not receive prop', () => {
      const { queryByTestId } = render(<Title title={mockTitleProp} />);

      const iElmSubHeading = queryByTestId(iElmSubtitleTestId);

      expect(iElmSubHeading).not.toBeInTheDocument();
    });

    it('Should render subtitle when receive prop', () => {
      const { getByTestId } = render(<Title title={mockTitleProp} subTitle={mockSubTitleProp} />);

      const iElmSubHeading = getByTestId(iElmSubtitleTestId);

      expect(iElmSubHeading).toBeInTheDocument();
      expect(iElmSubHeading.textContent).toBe(mockSubTitleProp);
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct classes to title', () => {
      const { getByTestId } = render(<Title title={mockTitleProp} />);
      const headingElement = getByTestId('title-heading');

      expect(headingElement).toHaveClass('text-amber-500 text-3xl lg:text-4xl');
    });

    it('should apply correct classes to subtitle', () => {
      const { getByTestId } = render(<Title title={mockTitleProp} subTitle={mockSubTitleProp} />);

      const iElmSubHeading = getByTestId(iElmSubtitleTestId);

      expect(iElmSubHeading).toHaveClass('flex text-lg lg:text-2xl ml-8');
    });
  });
});
