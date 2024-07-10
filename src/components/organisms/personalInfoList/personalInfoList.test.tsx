import { personalInfoData } from '@/assets/data/meta.const';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import PersoanlInfoList from './personalInfoList';

describe('Components > Organisms > PersoanlInfoList', () => {
  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const { container } = render(<PersoanlInfoList />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations', async () => {
      const { container } = render(<PersoanlInfoList />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render list correctly', () => {
      const { getByTestId } = render(<PersoanlInfoList />);

      const iElmList = getByTestId('personal-info-list');

      expect(iElmList).toBeInTheDocument();
    });

    it('Should render list items correctly', () => {
      const { queryAllByTestId } = render(<PersoanlInfoList />);

      const iElmListItem = queryAllByTestId('personal-info-list-item');

      expect(iElmListItem.length).toBe(personalInfoData.length);
    });
  });

  describe('CSS Classes', () => {
    it('Should apply correct classes to list', () => {
      const { getByTestId } = render(<PersoanlInfoList />);
      const headingElement = getByTestId('personal-info-list');

      expect(headingElement).toHaveClass('list-none grid grid-cols-2 gap-4');
    });

    it('Should apply correct classes to key on list item', () => {
      const { queryAllByTestId } = render(<PersoanlInfoList />);

      const iElmListItemKey = queryAllByTestId('personal-info-list-item-key')[0];

      expect(iElmListItemKey).toHaveClass('font-bold');
    });

    it('Should apply correct classes to value on list item', () => {
      const { queryAllByTestId } = render(<PersoanlInfoList />);

      const iElmListItemValue = queryAllByTestId('personal-info-list-item-value')[0];

      expect(iElmListItemValue).toHaveClass('ml-2 font-light');
    });
  });
});
