import { personalInfoData } from '@/assets/data/meta.const';
import { FC } from 'react';

const PersonalInfoList: FC = () => {
  const renderListItems = () => {
    return personalInfoData.map(({ key, value }) => (
      <li data-testid="personal-info-list-item" key={`${key.toLowerCase()}-${value.toLowerCase().replace(' ', '-')}`}>
        <span data-testid="personal-info-list-item-key" className="font-bold">
          {key}:
        </span>
        <span data-testid="personal-info-list-item-value" className="ml-2 font-light">
          {value}
        </span>
      </li>
    ));
  };

  return (
    <ul data-testid="personal-info-list" className="list-none grid grid-cols-2 gap-4">
      {renderListItems()}
    </ul>
  );
};

export default PersonalInfoList;
