import { XMarkIcon } from '@heroicons/react/16/solid';
import { FC, PropsWithChildren } from 'react';
import IconButton from '../../atoms/iconButton/iconButton';

export interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  ariaLabel?: string;
  ariaLabelClose?: string;
  ariaLabelCloseBackdrop?: string;
}

const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  direction = 'right',
  ariaLabel,
  ariaLabelClose = 'Fechar a Gaveta',
  ariaLabelCloseBackdrop = 'Cancelar e Fechar a gaveta',
}) => {
  const getDrawerClasses = () => {
    const baseClasses = 'fixed bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 z-50';

    switch (direction) {
      case 'left':
        return `${baseClasses} top-0 left-0 h-full w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;
      case 'right':
        return `${baseClasses} top-0 right-0 h-full w-64 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`;
      case 'top':
        return `${baseClasses} top-0 left-0 w-full h-64 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`;
      case 'bottom':
        return `${baseClasses} bottom-0 left-0 w-full h-64 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`;
      default:
        return '';
    }
  };

  return (
    isOpen && (
      <>
        <div
          role="button"
          tabIndex={0}
          aria-label={ariaLabelCloseBackdrop}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
          onTouchEnd={onClose}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              onClose();
            }
          }}
        ></div>
        <div className={getDrawerClasses()} role="dialog" aria-modal="true" aria-label={ariaLabel}>
          <IconButton onClick={onClose} label={ariaLabelClose}>
            <XMarkIcon />
          </IconButton>
          <div className="p-4">{children}</div>
        </div>
      </>
    )
  );
};

export default Drawer;
