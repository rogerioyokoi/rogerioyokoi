import { personalInfoStats } from '@/assets/data/meta.const';
import StatsCard from '@/components/molecules/statsCard/statsCard';
import { FC } from 'react';

const PersonalInfoStats: FC = () => {
  const renderStatsCard = () => {
    return personalInfoStats.map(({ reference, text, highlight }, index) => (
      <StatsCard reference={reference} key={index}>
        {text} <span className="block font-bold">{highlight}</span>
      </StatsCard>
    ));
  };

  return (
    <section data-testid="personal-info-container" className="w-full grid grid-cols-2 gap-6">
      {renderStatsCard()}
    </section>
  );
};

export default PersonalInfoStats;
