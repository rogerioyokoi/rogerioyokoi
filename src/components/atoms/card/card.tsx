import { FC } from 'react';

import { CARD_TESTID, CardProps } from './card.types';
import { cardContainerClasses, cardContentClasses, cardFooterClasses, cardHeaderClasses } from './cardClasses';

const Card: FC<CardProps> = ({
  children,
  variant = 'outlined',
  size = 'large',
  rounded = 'lg',
  shadow = 'md',
  header,
  footer,
}) => {
  return (
    <div data-testid={CARD_TESTID.CONTAINER} className={cardContainerClasses({ variant, rounded, shadow })}>
      {header && (
        <header data-testid={CARD_TESTID.HEADER} className={cardHeaderClasses(size)}>
          {header}
        </header>
      )}
      <div data-testid={CARD_TESTID.CONTENT} className={cardContentClasses(size, header, footer)}>
        {children}
      </div>
      {footer && (
        <footer data-testid={CARD_TESTID.FOOTER} className={cardFooterClasses(size)}>
          {footer}
        </footer>
      )}
    </div>
  );
};

export default Card;
