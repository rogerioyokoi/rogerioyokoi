export enum AVATAR_TESTID {
  CONTAINER = 'avatar-container',
  PICTURE = 'avatar-picture',
  SOURCE = 'avatar-source',
  IMAGE = 'avatar-image',
  LOADING = 'avatar-loading',
  ERROR = 'avatar-error',
}

export interface AvatarSource {
  srcSet: string;
  media?: string;
}

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  sources?: AvatarSource[];
}
