import { StyledFeatures, StyledFeaturesList } from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import FeatureCard from '../../ui/feature-card/feature-card';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      $isDark: true,
      content: {
        title: '70+',
        text: t('main.features.items.0.text'),
      },
    },
    {
      $isDark: false,
      content: {
        title: '8',
        text: t('main.features.items.1.text'),
      },
    },
    {
      $isDark: true,
      content: {
        title: '100+',
        text: t('main.features.items.2.text'),
      },
    },
  ];

  return (
    <StyledFeatures>
      <Wrapper>
        <StyledFeaturesList>
          {features &&
            features.length &&
            features.map((item, index) => {
              return (
                <FeatureCard
                  $isDark={item.$isDark}
                  content={item.content}
                  key={index}
                ></FeatureCard>
              );
            })}
        </StyledFeaturesList>
      </Wrapper>
    </StyledFeatures>
  );
};

export default Features;
