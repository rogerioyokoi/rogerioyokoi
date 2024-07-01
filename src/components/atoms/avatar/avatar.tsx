import { FC, useState } from 'react';
import { AVATAR_TESTID, AvatarProps } from './avatar.types';

const Avatar: FC<AvatarProps> = ({ src, alt, size = 100, sources = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div
      data-testid={AVATAR_TESTID.CONTAINER}
      className={`relative overflow-hidden rounded-full border-amber-500 border-4 ${isLoading ? 'bg-gray-200' : ''}`}
      style={{ width: size, height: size }}
    >
      <picture data-testid={AVATAR_TESTID.PICTURE}>
        {sources.map((source) => (
          <source data-testid={AVATAR_TESTID.SOURCE} key={source.srcSet} srcSet={source.srcSet} media={source.media} />
        ))}
        <img
          data-testid={AVATAR_TESTID.IMAGE}
          src={src}
          alt={alt}
          className={`object-cover w-full h-full ${isLoading || isError ? 'opacity-0' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          width={size}
          height={size}
        />
      </picture>
      {isLoading && <div data-testid={AVATAR_TESTID.LOADING} className="absolute inset-0 bg-gray-300 animate-pulse" />}
      {isError && !isLoading && (
        <div
          data-testid={AVATAR_TESTID.ERROR}
          className="absolute inset-0 flex items-center justify-center bg-red-200 text-red-700"
        >
          Erro
        </div>
      )}
    </div>
  );
};

export default Avatar;
