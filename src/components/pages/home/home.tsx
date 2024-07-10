import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { FC, useMemo } from 'react';
import { baseDescription } from '../../../assets/data/meta.const';
import Avatar from '../../atoms/avatar/avatar';
import Title from '../../atoms/title/title';

import { useMediaQuery } from '@react-hook/media-query';
import Photo from '../../../assets/pessoal.jpg';

import Button from '../../atoms/button/button';
import Icon from '../../atoms/icon/icon';

import LinkedInButton from '@/components/molecules/linkedInButton/linkedInButton';
import { ROUTES_NAV_IDS } from '@/routes/routes';

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

        <div className="flex w-full justify-center gap-12">
          <LinkedInButton />

          <Button
            href={ROUTES_NAV_IDS.ABOUT}
            color="primary"
            endIcon={<Icon className="bg-amber-500" Component={<PaperAirplaneIcon />} />}
          >
            Mais sobre mim
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
