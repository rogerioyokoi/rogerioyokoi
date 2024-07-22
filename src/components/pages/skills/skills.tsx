import Title from '@/components/molecules/title/title';
import { FC, useMemo } from 'react';

import PersonalInfoStats from '@/components/organisms/personalInfoStats/personalInfoStats';

import { skillsCollection } from '@/assets/data/skills.const';
import SectionSkill from '@/components/molecules/sectionSkill/sectionSkill';

import { PersonalSkillIcon } from '@assets/data/icons';

const Skills: FC = () => {
  const renderSkills = useMemo(() => {
    return skillsCollection.map(({ title, Icon, data, key }, index) => {
      const isOdd = index % 2 === 0;
      return (
        <div key={key}>
          <SectionSkill Icon={Icon} title={title} items={data} reverse={isOdd} />
        </div>
      );
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-12 justify-center">
      <Title
        icon={<PersonalSkillIcon className="text-amber-500" />}
        headline="Habilidades e"
        highlightColor="amber-500"
        highlightText="Competências"
      />

      <div className="flex flex-col xl:flex-row gap-12 items-center">
        <PersonalInfoStats />
      </div>

      {renderSkills}
    </div>
  );
};

export default Skills;
