import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import SectionTitle from './sectionTitle';

describe('Components > SectionTitle', () => {
  const mockSectionTitleText = 'Mock Section Title Text';
  const mockSectionTitleHighlight = 'Mock Section Title Highlight';

  describe('Snapshot', () => {
    it('Should match snapshot without Highlight', () => {
      const { container } = render(<SectionTitle text={mockSectionTitleText} />);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with Highlight', () => {
      const { container } = render(<SectionTitle text={mockSectionTitleText} highlight={mockSectionTitleHighlight} />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations without Highlight', async () => {
      const { container } = render(<SectionTitle text={mockSectionTitleText} />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with Highlight', async () => {
      const { container } = render(<SectionTitle text={mockSectionTitleText} highlight={mockSectionTitleHighlight} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render text correctly', () => {
      const { getByText } = render(<SectionTitle text={mockSectionTitleText} />);

      const textContent = getByText(mockSectionTitleText);

      expect(textContent).toBeInTheDocument();
    });

    it('Should not render highlight whithout prop', () => {
      const { queryByTestId } = render(<SectionTitle text={mockSectionTitleText} />);

      const textContent = queryByTestId('section-title-highlight');

      expect(textContent).toBeNull();
    });

    it('Should render text whith highlight correctly', () => {
      const { getByText, getByTestId } = render(
        <SectionTitle text={mockSectionTitleText} highlight={mockSectionTitleHighlight} />
      );

      const textContent = getByText(mockSectionTitleText);
      const iElmHighlight = getByTestId('section-title-highlight');

      expect(textContent).toBeInTheDocument();
      expect(iElmHighlight).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    it('Should apply correct classes to highlight', () => {
      const { getByTestId } = render(
        <SectionTitle text={mockSectionTitleText} highlight={mockSectionTitleHighlight} />
      );
      const iElmHighlight = getByTestId('section-title-highlight');

      expect(iElmHighlight).toHaveClass('ml-2 text-amber-500');
    });
  });
});
