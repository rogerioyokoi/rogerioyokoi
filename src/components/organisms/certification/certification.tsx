import StatsCard from '@/components/molecules/statsCard/statsCard';
import { FC } from 'react';

const Certification: FC = () => {
  return (
    <StatsCard reference="2">
      certificações <span className="block font-bold">Clique aqui para conferir</span>
    </StatsCard>
  );
};

export default Certification;
