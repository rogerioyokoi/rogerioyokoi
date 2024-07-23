import { IconProp, Skill } from '@/assets/data/meta.const';
import clsx from 'clsx';
import { FC, useMemo } from 'react';
import Section from '../section/section';
import SectionTitle from '../sectionTitle/sectionTitle';
import SkillCard from '../skillCard/skillCard';

interface SectionSkillProps {
  Icon: IconProp;
  title: string;
  items: Skill[];
  reverse?: boolean;
}

const SectionSkill: FC<SectionSkillProps> = ({ Icon, title, items, reverse = false }) => {
  const classes = clsx('flex flex-col gap-6 items-center', {
    'lg:flex-row-reverse': reverse,
    'lg:flex-row': !reverse,
  });

  const separateTitle = useMemo(() => {
    const words = title.split(' ');
    const end = words.pop();
    const start = words.join(' ');
    return { start, end };
  }, [title]);

  const renderItems = items.map(({ name, color, Icon }, index) => {
    return <SkillCard key={index} Logo={Icon} title={name} color={color} />;
  });

  return (
    <Section title={<SectionTitle text={separateTitle.start} highlight={separateTitle.end} />}>
      <div className={classes}>
        <div className="w-1/2 lg:w-2/6 xl:w-1/6">
          <Icon className="text-gray-300 dark:text-gray-700" aria-hidden="true" />
        </div>
        <div className="w-full lg:w-4/6 xl:w-5/6 flex justify-center items-center">
          <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-6">{renderItems}</div>
        </div>
      </div>
    </Section>
  );
};

export default SectionSkill;
