import Icon from '@/components/atoms/icon/icon';
import { FC, FunctionComponent, SVGProps } from 'react';
import Card from '../../atoms/card/card';

interface SkillCardProps {
  Logo?: FunctionComponent<SVGProps<SVGSVGElement>>;
  color?: string;
  title?: string;
}

const SkillCard: FC<SkillCardProps> = ({ Logo, color, title }) => {
  const firstLetter = title?.charAt(0);

  return (
    <Card variant="contained">
      <div className="relative">
        <div className="flex mb-4 items-center w-full gap-8 justify-between">
          <div className={`w-16 h-16 ${!Logo ? 'p-1' : ''}`} aria-hidden="true">
            {Logo ? (
              <Icon shadow={false} className={`w-16 h-16`} style={{ color }} Component={<Logo />} />
            ) : (
              <div
                className="h-full flex items-center justify-center text-xl rounded-lg border font-bold"
                style={{ color, borderColor: color }}
              >
                {firstLetter}
              </div>
            )}
          </div>
          <p data-testid="stats-card-children" className="m-0 relative tracking-wide">
            {title}
          </p>
        </div>
        <div className={`h-1 rounded-full w-full`} style={{ backgroundColor: color }}></div>
      </div>
    </Card>
  );
};

export default SkillCard;
