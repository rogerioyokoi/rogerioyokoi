import Button from '@/components/atoms/button/button';
import Headline from '@/components/atoms/headline/headline';
import Icon from '@/components/atoms/icon/icon';
import LinkedInButton from '@/components/molecules/linkedInButton/linkedInButton';
import GithubIcon from '@assets/svg/github.svg?react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { FC } from 'react';

import { Variant } from '@/types';
import Curriculo from '@assets/curriculo-rogerio-yokoi.pdf';

interface PersonalInfoLInksProps {
  showTitle?: boolean;
  variant?: Variant;
}

const PersonalInfoLInks: FC<PersonalInfoLInksProps> = ({ showTitle = false, variant = 'contained' }) => {
  return (
    <>
      {showTitle && (
        <Headline as="h3" level="headline" size="small">
          Links <span className="text-amber-500">úteis</span>
        </Headline>
      )}

      <div className="flex flex-col sm:flex-row w-full justify-between flex-wrap gap-6">
        <Button
          href={Curriculo}
          download
          target="new"
          color="primary"
          variant={variant}
          endIcon={<Icon className="bg-amber-500 text-white" Component={<ArrowDownTrayIcon />} />}
        >
          Baixar Currículo
        </Button>
        <LinkedInButton variant={variant} />
        <Button
          href="https://github.com/rogerioyokoi"
          target="new"
          color="neutral"
          variant={variant}
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
