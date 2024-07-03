import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Icon from './icon';

import LinkedINIcon from '@assets/svg/linkedIn.svg?react';

describe('Components > Atoms > Icon', () => {
  const MockIconComponent = LinkedINIcon;

  describe('Snapshot', () => {
    it('Should match snapshot without Subtitle', () => {
      const { container } = render(<Icon Component={<MockIconComponent />} />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations with only title', async () => {
      const { container } = render(<Icon Component={<MockIconComponent />} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render component with SVG Icon', () => {
      const { getByTestId } = render(<Icon Component={<MockIconComponent />} />);

      const iElmContainer = getByTestId('icon-container');
      const iElmSvgElementIcon = iElmContainer.querySelector('svg');

      expect(iElmSvgElementIcon).toBeInTheDocument();
    });
  });

  describe('CSS Classes and Style', () => {
    it('Should apply correct classes to icon container', () => {
      const { getByTestId } = render(<Icon Component={<MockIconComponent />} />);
      const iElmContainer = getByTestId('icon-container');

      expect(iElmContainer).toHaveClass('flex justify-center items-center h-12 w-12 p-3 rounded-full shadow-left');
    });

    it('Should apply correct custom classes to icon container', () => {
      const { getByTestId } = render(<Icon Component={<MockIconComponent />} className="custom-class" />);
      const iElmContainer = getByTestId('icon-container');

      expect(iElmContainer).toHaveClass(
        'flex justify-center items-center h-12 w-12 p-3 rounded-full shadow-left custom-class'
      );
    });

    it('Should apply correct style to icon container', () => {
      const { getByTestId } = render(<Icon Component={<MockIconComponent />} style={{ backgroundColor: '#000000' }} />);
      const iElmContainer = getByTestId('icon-container');

      expect(iElmContainer).toHaveStyle({ backgroundColor: '#000000' });
    });
  });
});
