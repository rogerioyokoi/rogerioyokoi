import { FC, PropsWithChildren } from 'react';

export interface IconButtonProps extends PropsWithChildren {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ children, onClick, label, disabled = false }) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`dark:text-gray-50 text-gray-900 w-12 h-12 p-2 rounded-full transition-all ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-slate-800 hover:bg-opacity-20 dark:hover:bg-slate-50 dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-400'
      }`}
    >
      {children}
    </button>
  );
};

export default IconButton;
