import { FC } from 'react';

interface SectionTitleProps {
  text: string;
  highlight?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ text, highlight }) => {
  return (
    <>
      {text}
      {highlight && (
        <span data-testid="section-title-highlight" className="ml-2 text-amber-500">
          {highlight}
        </span>
      )}
    </>
  );
};

export default SectionTitle;
