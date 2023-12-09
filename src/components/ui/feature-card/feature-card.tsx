import { StyledCard, CardTitle, CardSubtitle } from './styled';

interface IFeatureCard {
  $isDark?: boolean;
  content: {
    title: string;
    text: string;
  };
}

const FeatureCard: React.FC<IFeatureCard> = ({ $isDark, content }) => {
  return (
    <StyledCard $isDark={$isDark}>
      <CardTitle $isDark={$isDark}>{content.title}</CardTitle>
      <CardSubtitle $isDark={$isDark}>{content.text}</CardSubtitle>
    </StyledCard>
  );
};

export default FeatureCard;
