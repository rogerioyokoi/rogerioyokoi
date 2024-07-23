import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import Button, { BUTTON_TESTID, ButtonProps } from './';
import { buttonClasses } from './buttonClasses';

describe('Components > Atoms > Button', () => {
  const mockHref = 'https://example.com';
  const mockStartIconText = 'SI';
  const mockStartIcon = <div>{mockStartIconText}</div>;
  const mockEndIconText = 'EI';
  const mockEndIcon = <div>{mockEndIconText}</div>;
  const mockTextContent = 'My Button Test';

  const renderComponent = (props: ButtonProps, isAnchor: boolean = false) => {
    if (isAnchor) {
      return render(
        <Button href={mockHref} {...props}>
          {mockTextContent}
        </Button>
      );
    }
    return render(<Button {...props}>{mockTextContent}</Button>);
  };

  describe('Snapshot', () => {
    it('Should match snapshot basic button', () => {
      const { container } = renderComponent({});

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with start icon on button', () => {
      const { container } = renderComponent({ startIcon: mockStartIcon });

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with end icon on button', () => {
      const { container } = renderComponent({ endIcon: mockEndIcon });

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with start and end icon on button', () => {
      const { container } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon });

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot basic anchor', () => {
      const { container } = renderComponent({}, true);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with start icon on anchor', () => {
      const { container } = renderComponent({ startIcon: mockStartIcon }, true);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with end icon on anchor', () => {
      const { container } = renderComponent({ endIcon: mockEndIcon }, true);

      expect(container).toMatchSnapshot();
    });

    it('Should match snapshot with start and end icon on anchor', () => {
      const { container } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon }, true);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Accessibility Tests (A11y)', () => {
    it('Should not have accessibility violations on basic button', async () => {
      const { container } = renderComponent({});

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic button with start icon', async () => {
      const { container } = renderComponent({ startIcon: mockStartIcon });

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic button with end icon', async () => {
      const { container } = renderComponent({ endIcon: mockEndIcon });

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic button with start and end icon', async () => {
      const { container } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon });

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic anchor', async () => {
      const { container } = renderComponent({}, true);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic anchor with start icon', async () => {
      const { container } = renderComponent({ startIcon: mockStartIcon }, true);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic anchor with end icon', async () => {
      const { container } = renderComponent({ endIcon: mockEndIcon }, true);

      expect(await axe(container)).toHaveNoViolations();
    });

    it('Should not have accessibility violations on basic anchor with start and end icon', async () => {
      const { container } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon }, true);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe('Rendering', () => {
    it('Should render button correctly without start and end icon', () => {
      const { getByTestId, queryByTestId } = renderComponent({});

      const iElmButton = getByTestId(BUTTON_TESTID.BUTTON);
      const iElmAnchor = queryByTestId(BUTTON_TESTID.ANCHOR);
      const iElmStartIcon = queryByTestId(BUTTON_TESTID.START);
      const iElmEndIcon = queryByTestId(BUTTON_TESTID.END);
      const iElmContent = getByTestId(BUTTON_TESTID.CONTENT);

      expect(iElmButton).toBeInTheDocument();
      expect(iElmAnchor).toBeNull();
      expect(iElmStartIcon).toBeNull();
      expect(iElmEndIcon).toBeNull();
      expect(iElmContent.textContent).toBe(mockTextContent);
    });

    it('Should render button correctly with start icon without end icon', () => {
      const { getByTestId } = renderComponent({ startIcon: mockStartIcon });

      const iElmStartIcon = getByTestId(BUTTON_TESTID.START);

      expect(iElmStartIcon).toBeInTheDocument();
      expect(iElmStartIcon.textContent).toBe(mockStartIconText);
    });

    it('Should render button correctly with end icon without start icon', () => {
      const { getByTestId } = renderComponent({ endIcon: mockEndIcon });

      const iElmEndIcon = getByTestId(BUTTON_TESTID.END);

      expect(iElmEndIcon).toBeInTheDocument();
      expect(iElmEndIcon.textContent).toBe(mockEndIconText);
    });

    it('Should render button correctly with start and end icon', () => {
      const { getByTestId } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon });

      const iElmStartIcon = getByTestId(BUTTON_TESTID.START);
      const iElmEndIcon = getByTestId(BUTTON_TESTID.END);

      expect(iElmStartIcon).toBeInTheDocument();
      expect(iElmStartIcon.textContent).toBe(mockStartIconText);
      expect(iElmEndIcon).toBeInTheDocument();
      expect(iElmEndIcon.textContent).toBe(mockEndIconText);
    });

    it('Should render anchor correctly without start and end icon', () => {
      const { getByTestId, queryByTestId } = renderComponent({}, true);

      const iElmButton = queryByTestId(BUTTON_TESTID.BUTTON);
      const iElmAnchor = getByTestId(BUTTON_TESTID.ANCHOR);
      const iElmStartIcon = queryByTestId(BUTTON_TESTID.START);
      const iElmEndIcon = queryByTestId(BUTTON_TESTID.END);
      const iElmContent = getByTestId(BUTTON_TESTID.CONTENT);

      expect(iElmButton).toBeNull();
      expect(iElmAnchor).toBeInTheDocument();
      expect(iElmStartIcon).toBeNull();
      expect(iElmEndIcon).toBeNull();
      expect(iElmContent.textContent).toBe(mockTextContent);
    });

    it('Should render button correctly with start icon without end icon', () => {
      const { getByTestId } = renderComponent({ startIcon: mockStartIcon }, true);

      const iElmStartIcon = getByTestId(BUTTON_TESTID.START);

      expect(iElmStartIcon).toBeInTheDocument();
      expect(iElmStartIcon.textContent).toBe(mockStartIconText);
    });

    it('Should render button correctly with end icon without start icon', () => {
      const { getByTestId } = renderComponent({ endIcon: mockEndIcon }, true);

      const iElmEndIcon = getByTestId(BUTTON_TESTID.END);

      expect(iElmEndIcon).toBeInTheDocument();
      expect(iElmEndIcon.textContent).toBe(mockEndIconText);
    });

    it('Should render button correctly with start and end icon', () => {
      const { getByTestId } = renderComponent({ startIcon: mockStartIcon, endIcon: mockEndIcon }, true);

      const iElmStartIcon = getByTestId(BUTTON_TESTID.START);
      const iElmEndIcon = getByTestId(BUTTON_TESTID.END);

      expect(iElmStartIcon).toBeInTheDocument();
      expect(iElmStartIcon.textContent).toBe(mockStartIconText);
      expect(iElmEndIcon).toBeInTheDocument();
      expect(iElmEndIcon.textContent).toBe(mockEndIconText);
    });
  });

  describe('CSS Classes and Styles', () => {
    it('Should apply correct classes basic button with default props', () => {
      const props: ButtonProps = {
        size: 'large',
        color: 'primary',
        variant: 'content',
        rounded: 'full',
      };
      const { getByTestId } = renderComponent({});

      const iElmButton = getByTestId(BUTTON_TESTID.BUTTON);

      expect(iElmButton).toHaveClass(buttonClasses(props));
    });
  });
});
