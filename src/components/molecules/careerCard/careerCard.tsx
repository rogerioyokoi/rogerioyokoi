import Card from '@/components/atoms/card/card';
import Icon from '@/components/atoms/icon/icon';
import { FC, PropsWithChildren } from 'react';

import { Career } from '@/assets/data/meta.const';
import Chip from '@/components/atoms/chip/chip';

interface CareerCardProps extends PropsWithChildren, Career {}

const CareerCard: FC<CareerCardProps> = ({
  Logo,
  startDate,
  endDate,
  institution,
  title,
  description,
  technologies,
}) => {
  const renderDescription = () => {
    if (!description) {
      return;
    }
    if (Array.isArray(description)) {
      return (
        <ul className="list-disc ml-6 font-light mt-2">
          {description.map((value, index) => (
            <li className="px-4 py-1" key={index}>
              {value}
            </li>
          ))}
        </ul>
      );
    }
    return <p>{description}</p>;
  };

  return (
    <Card>
      <div className="flex items-start gap-4">
        {Logo && <Icon className="w-16 h-16" Component={<Logo />} />}
        <div className="flex flex-col">
          <Chip>
            {startDate} {endDate && `- ${endDate}`}
          </Chip>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="text-neutral-400">{institution}</p>
          {renderDescription()}
          {technologies && <p>{technologies}</p>}
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
