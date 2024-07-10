import Button from '@/components/atoms/button/button';
import Headline from '@/components/atoms/headline/headline';
import Icon from '@/components/atoms/icon/icon';
import LinkedInButton from '@/components/molecules/linkedInButton/linkedInButton';
import GithubIcon from '@assets/svg/github.svg?react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { FC } from 'react';

import Curriculo from '@assets/curriculo-rogerio-yokoi.pdf';

const PersonalInfoLInks: FC = () => {
  return (
    <>
      <Headline as="h3" level="headline" size="small">
        Links <span className="text-amber-500">úteis</span>
      </Headline>

      <div className="flex w-full justify-between flex-wrap">
        <Button
          href={Curriculo}
          download
          target="new"
          color="primary"
          variant="outlined"
          endIcon={<Icon className="bg-amber-500 text-white" Component={<ArrowDownTrayIcon />} />}
        >
          Baixar Curriculo
        </Button>
        <LinkedInButton variant="outlined" />
        <Button
          href="https://github.com/rogerioyokoi"
          target="new"
          color="neutral"
          variant="outlined"
          endIcon={
            <Icon
              className="bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 text-neutral-200"
              Component={<GithubIcon />}
            />
          }
        >
          Github
        </Button>
      </div>
    </>
  );
};

export default PersonalInfoLInks;
