import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Card from './card';

describe('Components > Atoms > Card', () => {
  const renderComponent = (type: 'withoutHeader' | 'withoutFooter' | 'onlyContent' | 'full') => {
    const mockHeaderCard = '<div>Mock Header Card</div>';
    const mockFooterCard = '<div>Mock Footer Card</div>';
    const mockChildrenCard = 'Card Childreen Mock';

    if (type === 'onlyContent') {
      return render(<Card>{mockChildrenCard}</Card>);
    }
    if (type === 'withoutFooter') {
      return render(<Card header={mockHeaderCard}>{mockChildrenCard}</Card>);
    }
    if (type === 'withoutHeader') {
      return render(<Card footer={mockFooterCard}>{mockChildrenCard}</Card>);
    }
    return render(
      <Card footer={mockFooterCard} header={mockHeaderCard}>
        {mockChildrenCard}
      </Card>
    );
  };

  describe('Snapshot', () => {
    it('Should match snapshot without Header and Footer', () => {
      const { container } = renderComponent('onlyContent');

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with Header and without Footer', () => {
      const { container } = renderComponent('withoutFooter');

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with Footer and without Header', () => {
      const { container } = renderComponent('withoutHeader');

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with Header and Footer', () => {
      const { container } = renderComponent('full');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations without Header and Footer', async () => {
      const { container } = renderComponent('onlyContent');

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with Header and without Footer', async () => {
      const { container } = renderComponent('withoutFooter');

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with Footer and without Header', async () => {
      const { container } = renderComponent('withoutHeader');

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations with Header and Footer', async () => {
      const { container } = renderComponent('full');

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render card correctly without Header and Footer', () => {
      const { getByTestId, queryByTestId } = renderComponent('onlyContent');

      const iElmContainer = getByTestId('card-container');
      const iElmHeader = queryByTestId('card-header');
      const iElmContent = getByTestId('card-content');
      const iElmFooter = queryByTestId('card-footer');

      expect(iElmContainer).toBeInTheDocument();
      expect(iElmContent).toBeInTheDocument();
      expect(iElmHeader).toBeNull();
      expect(iElmFooter).toBeNull();
    });

    it('Should render card correctly with Header without Footer', () => {
      const { getByTestId, queryByTestId } = renderComponent('withoutFooter');

      const iElmContainer = getByTestId('card-container');
      const iElmHeader = getByTestId('card-header');
      const iElmContent = getByTestId('card-content');
      const iElmFooter = queryByTestId('card-footer');

      expect(iElmContainer).toBeInTheDocument();
      expect(iElmContent).toBeInTheDocument();
      expect(iElmHeader).toBeInTheDocument();
      expect(iElmFooter).toBeNull();
    });

    it('Should render card correctly with Footer without Header', () => {
      const { getByTestId, queryByTestId } = renderComponent('withoutHeader');

      const iElmContainer = getByTestId('card-container');
      const iElmHeader = queryByTestId('card-header');
      const iElmContent = getByTestId('card-content');
      const iElmFooter = getByTestId('card-footer');

      expect(iElmContainer).toBeInTheDocument();
      expect(iElmContent).toBeInTheDocument();
      expect(iElmHeader).toBeNull();
      expect(iElmFooter).toBeInTheDocument();
    });

    it('Should render card correctly with header and Footer', () => {
      const { getByTestId } = renderComponent('full');

      const iElmContainer = getByTestId('card-container');
      const iElmHeader = getByTestId('card-header');
      const iElmContent = getByTestId('card-content');
      const iElmFooter = getByTestId('card-footer');

      expect(iElmContainer).toBeInTheDocument();
      expect(iElmContent).toBeInTheDocument();
      expect(iElmHeader).toBeInTheDocument();
      expect(iElmFooter).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    it('Should apply correct classes to card container with default props', () => {
      const { getByTestId } = renderComponent('onlyContent');

      const iElmContainer = getByTestId('card-container');

      expect(iElmContainer).toHaveClass('border border-gray-300 dark:border-gray-700 rounded-lg shadow-md');
    });

    it('Should apply correct classes to card content with default props', () => {
      const { getByTestId } = renderComponent('onlyContent');

      const iElmContent = getByTestId('card-content');

      expect(iElmContent).toHaveClass('py-6 px-10');
    });

    it('Should apply correct classes to card content with Header without Footer on default props', () => {
      const { getByTestId } = renderComponent('withoutFooter');

      const iElmContent = getByTestId('card-content');
      const iElmHeader = getByTestId('card-header');

      expect(iElmContent).toHaveClass('px-10 pt-2 pb-6');
      expect(iElmHeader).toHaveClass('px-10 pt-6 pb-1');
    });

    it('Should apply correct classes to card content with Header and Footer on default props', () => {
      const { getByTestId } = renderComponent('full');

      const iElmContent = getByTestId('card-content');
      const iElmHeader = getByTestId('card-header');
      const iElmFooter = getByTestId('card-footer');

      expect(iElmContent).toHaveClass('px-10 py-2');
      expect(iElmHeader).toHaveClass('px-10 pt-6 pb-1');
      expect(iElmFooter).toHaveClass('px-10 pb-6 pt-1');
    });
  });
});
