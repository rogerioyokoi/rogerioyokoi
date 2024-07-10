import Section from '@/components/molecules/section/section';
import SectionTitle from '@/components/molecules/sectionTitle/sectionTitle';
import { FC } from 'react';

import { careerExperience } from '@/assets/data/meta.const';
import CareerCard from '@/components/molecules/careerCard/careerCard';

const Experience: FC = () => {
  const renderExperience = () => {
    return careerExperience.map((props, index) => <CareerCard {...props} key={index} />);
  };

  return (
    <Section title={<SectionTitle text="Experiências" highlight="profissionais" />}>
      <ul className="list-none grid grid-cols-1 gap-4">{renderExperience()}</ul>
    </Section>
  );
};

export default Experience;
