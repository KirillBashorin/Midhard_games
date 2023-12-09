import { useState, useEffect, useRef } from 'react';
import { StyledBurgerButton } from './styled';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import BurgerData from './burger.json';
import { useTranslation } from 'react-i18next';

const BurgerButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState<number>(1);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { t } = useTranslation();

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
    setDirection(direction * -1);
    if (lottieRef.current) {
      if (direction > 0) {
        lottieRef.current.setDirection(1);
      } else {
        lottieRef.current.setDirection(-1);
      }
      lottieRef.current.play();
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (evt: MediaQueryListEvent) => {
      setIsMobile(evt.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <StyledBurgerButton
      onClick={() => {
        setIsChecked(!isChecked);
        setDirection(direction * -1);
        toggleAnimation();
        onClick();
      }}
      isChecked={isChecked}
    >
      {isMobile ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={BurgerData}
          loop={false}
          autoplay={false}
          style={{ height: 32, width: 32 }}
        />
      ) : (
        t('header.button')
      )}
    </StyledBurgerButton>
  );
};

export default BurgerButton;
