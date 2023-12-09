import {
  StyledServices,
  ServicesTitle,
  StyledSubtitle,
  ServicesList,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import ServiceCard from '../../ui/service-card/service-card';
import Round from '../../../elements/round/round';
import { useTranslation } from 'react-i18next';

interface IServicesCards {
  title: string;
  text: string;
}

interface IServices {
  id?: string;
}

const Services: React.FC<IServices> = ({ id }) => {
  const { t } = useTranslation();

  const servicesCards: IServicesCards[] = [
    {
      title: t('main.services.items.0.title'),
      text: t('main.services.items.0.text'),
    },
    {
      title: t('main.services.items.1.title'),
      text: t('main.services.items.1.text'),
    },
    {
      title: t('main.services.items.2.title'),
      text: t('main.services.items.2.text'),
    },
    {
      title: t('main.services.items.3.title'),
      text: t('main.services.items.3.text'),
    },
  ];
  return (
    <StyledServices id={id}>
      <Wrapper>
        <ServicesTitle size={TitleSize.MEDIUM} as={'h2'}>
          {t('main.services.title')}
        </ServicesTitle>
        <StyledSubtitle>{t('main.services.subtitle')}</StyledSubtitle>
        <ServicesList>
          {servicesCards &&
            servicesCards.length &&
            servicesCards.map((item, index) => {
              return <ServiceCard content={item} key={index} />;
            })}
        </ServicesList>
      </Wrapper>
      <Round $isBottom={true} />
    </StyledServices>
  );
};

export default Services;
