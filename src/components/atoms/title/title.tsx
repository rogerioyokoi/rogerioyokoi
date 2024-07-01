import { FC } from 'react';

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className="uppercase text-bold">
      <div className="flex gap-2">
        <div className="relative w-6" aria-hidden="true">
          <div className="absolute left-0 top-[44%] h-[4px] w-6 bg-amber-500 rounded-[10px]" />
        </div>
        <div>
          <h1 data-testid="title-heading" className="text-amber-500 text-3xl lg:text-4xl">
            {title}
          </h1>
        </div>
      </div>
      {subTitle && (
        <div className="flex text-lg lg:text-2xl ml-8" data-testid="title-subheading">
          {subTitle}
        </div>
      )}
    </div>
  );
};

export default Title;
