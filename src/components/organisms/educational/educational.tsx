import Section from '@/components/molecules/section/section';
import SectionTitle from '@/components/molecules/sectionTitle/sectionTitle';
import { FC } from 'react';

import { careerEducational } from '@/assets/data/meta.const';
import CareerCard from '@/components/molecules/careerCard/careerCard';

const Educational: FC = () => {
  const renderEducational = () => {
    return careerEducational.map((props, index) => <CareerCard {...props} key={index} />);
  };

  return <Section title={<SectionTitle text="Formação" highlight="acadêmica" />}>{renderEducational()}</Section>;
};

export default Educational;
