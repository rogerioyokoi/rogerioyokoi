import { FC, useMemo } from 'react';
import { baseDescription } from '../../../assets/data/meta.const';
import Avatar from '../../atoms/avatar/avatar';
import Title from '../../atoms/title/title';

import PersonalInfoLInks from '@/components/organisms/personalInfoLinks/personalInfoLinks';
import { useMediaQuery } from '@react-hook/media-query';
import Photo from '../../../assets/pessoal.jpg';

const Home: FC = () => {
  const smallSizePhoto = useMediaQuery('(max-width: 1279px)');

  const getAvatarSize = useMemo((): number => {
    if (smallSizePhoto) {
      return 350;
    }
    return 450;
  }, [smallSizePhoto]);

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-12 w-100 items-center">
      <div className="w-100 xl:w-2/4 flex justify-center">
        <Avatar src={Photo} alt="Foto de rosto do proprietário do website: Rogério Yokoi" size={getAvatarSize} />
      </div>
      <div className="w-100 xl:w-2/4 flex flex-col gap-12">
        <Title title="Olá, eu sou Rogério Yokoi" subTitle="Engenheiro de software Front-End" />

        <p data-testid="home-description">{baseDescription}</p>

        <PersonalInfoLInks />
      </div>
    </div>
  );
};

export default Home;
