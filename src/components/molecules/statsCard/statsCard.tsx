import { FC, PropsWithChildren } from 'react';
import Card from '../../atoms/card/card';

interface StatsCardProps extends PropsWithChildren {
  reference: string;
}

const StatsCard: FC<StatsCardProps> = ({ reference, children }) => {
  return (
    <Card
      header={
        <h3 data-testid="stats-card-header" className="relative text-5xl mb-2 text-amber-500 font-bold">
          {reference}
        </h3>
      }
    >
      <div className="relative">
        <div
          data-testid="stats-card-decoration"
          className="absolute left-0 top-[44%] h-[4px] w-6 bg-gray-300 dark:bg-gray-700 rounded-[10px]"
        />
        <p data-testid="stats-card-children" className="m-0 ml-8 relative tracking-wide text-sm">
          {children}
        </p>
      </div>
    </Card>
  );
};

export default StatsCard;
