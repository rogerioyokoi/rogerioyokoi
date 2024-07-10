import Section from '@/components/molecules/section/section';
import SectionTitle from '@/components/molecules/sectionTitle/sectionTitle';
import { FC } from 'react';
import PersonalInfoLInks from '../personalInfoLinks/personalInfoLinks';
import PersonalInfoList from '../personalInfoList/personalInfoList';

const PersonalInfo: FC = () => {
  return (
    <Section title={<SectionTitle text="Informações" highlight="pessoais" />} footer={<PersonalInfoLInks />}>
      <PersonalInfoList />
    </Section>
  );
};

export default PersonalInfo;
