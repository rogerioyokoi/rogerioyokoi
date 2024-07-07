import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import PersonalInfoStats from './personalInfoStats';

describe('Components > Organisms PersonalInfoStats', () => {
  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const { container } = render(<PersonalInfoStats />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations with only title', async () => {
      const { container } = render(<PersonalInfoStats />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render all stats correctly', () => {
      const { queryAllByTestId } = render(<PersonalInfoStats />);

      const iElmStatsCard = queryAllByTestId('card-container');

      expect(iElmStatsCard.length).toBe(4);
    });
  });

  describe('CSS Classes', () => {
    it('Should apply correct classes to container', () => {
      const { getByTestId } = render(<PersonalInfoStats />);

      const iElmContainer = getByTestId('personal-info-container');

      expect(iElmContainer).toHaveClass('w-full grid grid-cols-2 gap-6');
    });
  });
});
