import { RenderResult, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import MainContainer from './mainContainer';

describe('Components > Layouts > MainContainer', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <MainContainer header={<div>Header Content</div>}>
        <div>Main Content</div>
      </MainContainer>
    );
  });

  it('Should render the header content', () => {
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('Should render the main content', async () => {
    expect(await screen.findByText('Main Content')).toBeInTheDocument();
  });

  it('Should not have accessibility violations', async () => {
    const { container } = component;

    expect(await axe(container)).toHaveNoViolations();
  });
});
