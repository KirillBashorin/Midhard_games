import { useState, useEffect, useRef } from 'react';
import {
  StyledCard,
  Icon,
  CardTitle,
  CardTextWrapper,
  CardText,
  MoreButton,
  StyledPlusIco,
} from './styled';
import EnergyIco from '../../../assets/energy.svg?react';
import { TitleSize } from '../../ui/title/title';

interface IServicesCard {
  content: {
    title: string;
    text: string;
  };
}

const ServiceCard: React.FC<IServicesCard> = ({ content }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const openContent = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (openContent.current) {
      setHeight(openContent.current.offsetHeight);
    }
  }, [height, content]);

  return (
    <StyledCard>
      <Icon>
        <EnergyIco />
      </Icon>
      <CardTitle size={TitleSize.SMALL} as={'h3'}>{content.title}</CardTitle>
      <CardTextWrapper $openedHeight={height} $isCardOpened={isCardOpened}>
        <CardText ref={openContent}>{content.text}</CardText>
      </CardTextWrapper>
      <MoreButton
        isCardOpened={isCardOpened}
        onClick={() => setIsCardOpened(!isCardOpened)}
      >
        <StyledPlusIco />
      </MoreButton>
    </StyledCard>
  );
};

export default ServiceCard;
