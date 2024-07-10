import Headline from '@/components/atoms/headline/headline';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface SectionProps extends PropsWithChildren {
  title?: ReactNode;
  footer?: ReactNode;
}

const Section: FC<SectionProps> = ({ title, footer, children }) => {
  return (
    <section data-testid="section-container" className="flex w-full flex-col gap-4">
      {title && (
        <header data-testid="section-header">
          <Headline as="h2" level="headline" size="large">
            {title}
          </Headline>
        </header>
      )}
      <div data-testid="section-content" className="mt-4">
        {children}
      </div>
      {footer && (
        <footer data-testid="section-footer" className="flex w-full flex-col gap-4 mt-4">
          {footer}
        </footer>
      )}
    </section>
  );
};

export default Section;
