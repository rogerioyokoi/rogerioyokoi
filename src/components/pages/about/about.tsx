import Title from '@/components/molecules/title/title';
import { UserIcon } from '@heroicons/react/16/solid';
import { FC } from 'react';

import Certification from '@/components/organisms/certification/certification';
import Educational from '@/components/organisms/educational/educational';
import Experience from '@/components/organisms/experience/experience';
import PersonalInfo from '@/components/organisms/personalInfo/personalInfo';
import PersonalInfoStats from '@/components/organisms/personalInfoStats/personalInfoStats';

const About: FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 justify-center">
      <Title
        icon={<UserIcon aria-hidden="true" />}
        headline="Mais sobre"
        highlightColor="amber-500"
        highlightText="mim"
      />

      <div className="flex flex-col xl:flex-row gap-12 items-center">
        <div className="w-full xl:w-2/4">
          <PersonalInfo />
        </div>

        <div className="w-full xl:w-2/4">
          <PersonalInfoStats />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 items-end">
        <div className="w-full xl:w-3/4">
          <Educational />
        </div>

        <div className="w-full xl:w-1/4">
          <Certification />
        </div>
      </div>

      <div>
        <Experience />
      </div>
    </div>
  );
};

export default About;
