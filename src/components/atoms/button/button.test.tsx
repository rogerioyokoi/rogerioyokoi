import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Button, { ButtonProps } from './button';

describe('Components > Atoms > Button', () => {
  const renderButton = (props: ButtonProps) => {
    return render(<Button {...props}>My Button Test</Button>);
  };

  describe('Snapshot', () => {
    it('Should match snapshot basic button', () => {
      const { container } = renderButton({});

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot basic anchor', () => {
      const { container } = renderButton({ href: 'https://example.com' });

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations on basic button', async () => {
      const { container } = renderButton({});

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic anchor', async () => {
      const { container } = renderButton({ href: 'https://example.com' });

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render anchor correctly', () => {
      const { getByTestId, queryByTestId } = renderButton({ href: 'https://example.com' });

      const iElmAnchor = getByTestId('button-anchor');
      const iElmButton = queryByTestId('button-type');

      expect(iElmAnchor).toBeInTheDocument();
      expect(iElmButton).toBeNull();
    });

    it('Should render button correctly', () => {
      const { getByTestId, queryByTestId } = renderButton({});

      const iElmAnchor = queryByTestId('button-anchor');
      const iElmButton = getByTestId('button-type');

      expect(iElmAnchor).toBeNull();
      expect(iElmButton).toBeInTheDocument();
    });
  });

  // describe('CSS Classes', () => {
  //   it('Should apply correct classes to title', () => {
  //     const { getByTestId } = render(<ComponentName title={mockTitleProp} />);
  //     const headingElement = getByTestId(iElmTitleTestId);

  //     expect(headingElement).toHaveClass('text-amber-500 text-3xl lg:text-4xl');
  //   });
  // });
});
