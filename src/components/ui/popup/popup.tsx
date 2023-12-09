import { useEffect } from 'react';
import { StyledPopup, CloseButton, StyledCloseIco } from './styled';

interface IPopup {
  children: React.ReactNode;
  $isPopupOpened: boolean;
  handlePopupToggle: () => void;
  className?: string;
}

const Popup: React.FC<IPopup> = ({
  children,
  $isPopupOpened,
  handlePopupToggle,
  className,
}) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if ($isPopupOpened) {
      body ? (body.style.overflow = 'hidden') : null;
    } else {
      body ? (body.style.overflow = 'visible') : null;
    }

    return () => {
      body ? (body.style.overflow = 'visible') : null;
    };
  }, [$isPopupOpened]);

  return (
    <StyledPopup className={className} $isPopupOpened={$isPopupOpened}>
      <CloseButton onClick={handlePopupToggle}>
        <StyledCloseIco />
      </CloseButton>
      {children}
    </StyledPopup>
  );
};

export default Popup;
