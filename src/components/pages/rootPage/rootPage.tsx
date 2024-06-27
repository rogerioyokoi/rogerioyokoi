import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from '../../layouts/mainContainer/mainContainer';
import HeaderApplication from '../../organisms/headerApplication/headerApplication';

const RootPage: FC = () => {
  return (
    <MainContainer header={<HeaderApplication />}>
      <Outlet />
    </MainContainer>
  );
};

export default RootPage;
