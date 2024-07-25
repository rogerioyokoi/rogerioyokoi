import Headline from '@/components/atoms/headline/headline';
import { FC } from 'react';

interface TitleProps {
  icon: React.ReactNode;
  headline: string;
  highlightColor?: string;
  highlightText?: string;
}

const Title: FC<TitleProps> = ({ icon, headline, highlightColor = 'amber-500', highlightText }) => {
  return (
    <div className="flex w-auto m-auto gap-6 items-center">
      <div className={`h-14 m-w-14 w-14 text-${highlightColor}`}>{icon}</div>
      <Headline level="display" className="uppercase">
        {headline} {highlightText && <span className={`text-${highlightColor}`}>{highlightText}</span>}
      </Headline>
    </div>
  );
};

export default Title;
