import {
  StyledCard,
  CardPhoto,
  TitleContainer,
  CardTitle,
  CardDescription,
} from './styled';
import { TitleSize } from '../title/title';
import SocialButton from '../social-button/social-button';
import LinkedinIco from '../../../assets/linkedin.svg?react';

interface IPersonCard {
  person: {
    name: string;
    image: string;
    text: string;
    linkedin: string;
  };
}

const PersonCard: React.FC<IPersonCard> = ({ person }) => {
  return (
    <StyledCard>
      <CardPhoto src={person.image} alt={person.name} />
      <TitleContainer>
        <SocialButton link={person.linkedin} target={'_blank'}>
          <LinkedinIco />
        </SocialButton>
        <CardTitle size={TitleSize.EXTRA_SMALL} as={'h3'} $isDark={true}>
          {person.name}
        </CardTitle>
      </TitleContainer>
      <CardDescription>{person.text}</CardDescription>
    </StyledCard>
  );
};

export default PersonCard;
