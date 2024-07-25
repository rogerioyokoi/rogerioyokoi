import Button, { ButtonProps } from '@/components/atoms/button';
import Icon from '@/components/atoms/icon/icon';
import LinkedINIcon from '@assets/svg/linkedIn.svg?react';
import { FC } from 'react';

const LinkedInButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      href="https://www.linkedin.com/in/rogerioyokoi/"
      target="new"
      color="secondary"
      endIcon={<Icon style={{ backgroundColor: '#0077b5', color: '#fff' }} Component={<LinkedINIcon />} />}
      {...props}
    >
      LinkedIn
    </Button>
  );
};

export default LinkedInButton;
