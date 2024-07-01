import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import MainContainer from './mainContainer';

describe('Components > Layout > MainContainer', () => {
  const mockHeader = <div data-testid="main-container-header">Header Content</div>;
  const mockChildren = <div data-testid="main-container-children">Children Content</div>;

  describe('Snapshot', () => {
    it('Should match snapshot with header and children', () => {
      const { container } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations', async () => {
      const { container } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render header correctly', () => {
      const { getByTestId } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      expect(getByTestId('main-container-header')).toBeInTheDocument();
    });

    it('Should render children correctly', () => {
      const { getByTestId } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      expect(getByTestId('main-container-children')).toBeInTheDocument();
    });

    it('Should apply correct classes to header', () => {
      const { getByTestId } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      const iElmHeader = getByTestId('main-container-header').parentElement;

      expect(iElmHeader).toHaveClass('w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-center shadow-md');
    });

    it('Should apply correct classes to main', () => {
      const { getByTestId } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      const iElmMain = getByTestId('main-container-children').parentElement;

      expect(iElmMain).toHaveClass('w-full min-h-fit max-w-[1536px] mt-16 p-6 xl:p-12 flex-1 flex items-center');
    });

    it('Should apply correct classes to container', () => {
      const { container } = render(<MainContainer header={mockHeader}>{mockChildren}</MainContainer>);

      expect(container.firstChild).toHaveClass('w-full min-h-screen flex flex-col items-center');
    });
  });
});
