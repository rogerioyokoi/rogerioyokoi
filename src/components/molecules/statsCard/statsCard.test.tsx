import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import StatsCard from './statsCard';

describe('Components > Molecules > StatsCard', () => {
  const dataTestIdHeader = 'stats-card-header';
  const dataTestIdDecoration = 'stats-card-decoration';
  const dataTestIdChildren = 'stats-card-children';
  const mockStatsCardReference = 'Mock Stats Card Reference';
  const mockStatsCardChildren = 'Mock Stats Card Children';

  const renderComponent = () => {
    return render(<StatsCard reference={mockStatsCardReference}>{mockStatsCardChildren}</StatsCard>);
  };

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations', async () => {
      const { container } = renderComponent();

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render reference correctly', () => {
      const { getByTestId } = renderComponent();

      const iElmHeader = getByTestId(dataTestIdHeader);

      expect(iElmHeader).toBeInTheDocument();
      expect(iElmHeader.textContent).toBe(mockStatsCardReference);
    });

    it('Should render children correctly', () => {
      const { getByTestId } = renderComponent();

      const iElmChildren = getByTestId(dataTestIdChildren);

      expect(iElmChildren).toBeInTheDocument();
      expect(iElmChildren.textContent).toBe(mockStatsCardChildren);
    });

    it('Should render decoration correctly', () => {
      const { getByTestId } = renderComponent();

      const iElmDecoration = getByTestId(dataTestIdDecoration);

      expect(iElmDecoration).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    it('Should apply correct classes to reference', () => {
      const { getByTestId } = renderComponent();

      const iElmHeader = getByTestId(dataTestIdHeader);

      expect(iElmHeader).toHaveClass('relative text-5xl mb-2 text-amber-500 font-bold');
    });

    it('Should apply correct classes to children container', () => {
      const { getByTestId } = renderComponent();

      const iElmChildren = getByTestId(dataTestIdChildren);

      expect(iElmChildren).toHaveClass('m-0 ml-8 relative tracking-wide text-sm');
    });

    it('Should apply correct classes to decoration element', () => {
      const { getByTestId } = renderComponent();

      const iElmDecoration = getByTestId(dataTestIdDecoration);

      expect(iElmDecoration).toHaveClass(
        'absolute left-0 top-[44%] h-[4px] w-6 bg-gray-300 dark:bg-gray-700 rounded-[10px]'
      );
    });
  });
});
