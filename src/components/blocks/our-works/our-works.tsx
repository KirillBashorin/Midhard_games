import { StyledOurWorks, OurWorksTitle } from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Tabs from '../../ui/tabs/tabs';
import React from 'react';
import Round from '../../../elements/round/round';
import BigForgeGameImg from '../../../assets/big forge game.png';
import AdrenalineRampageImg from '../../../assets/adrenaline rampage.png';
import FatalzoneImg from '../../../assets/fatalzone.png';
import BomberWorldImg from '../../../assets/bomber world.png';
import WarqubeImg from '../../../assets/warqube.png';
import QasaqForceImg from '../../../assets/qsar force.png';
import Project14Img from '../../../assets/project14.png';
import TripeaksImg from '../../../assets/tripeaks.png';
import { useTranslation } from 'react-i18next';

interface IContent {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

interface ITabs {
  id: number;
  title: string;
  content: IContent[];
}

interface IOurWorks {
  id?: string;
}

const OurWorks: React.FC<IOurWorks> = ({ id }) => {
  const { t } = useTranslation();

  const tabs: ITabs[] = [
    {
      id: 0,
      title: t('main.our_works.tabs.0.title'),
      content: [
        {
          id: 0,
          title: t('main.our_works.tabs.0.content.0.title'),
          description: t('main.our_works.tabs.0.content.0.description'),
          link: 'https://store.steampowered.com/app/2419720/Adrenaline_Rampage/ ',
          image: AdrenalineRampageImg,
        },
        {
          id: 1,
          title: t('main.our_works.tabs.0.content.1.title'),
          description: t('main.our_works.tabs.0.content.1.description'),
          link: 'https://store.steampowered.com/app/2488510/FatalZone/',
          image: FatalzoneImg,
        },
        {
          id: 2,
          title: t('main.our_works.tabs.0.content.2.title'),
          description: t('main.our_works.tabs.0.content.3.description'),
          link: 'https://youtu.be/s9u0cR2Ttbs',
          image: BomberWorldImg,
        },
        {
          id: 3,
          title: t('main.our_works.tabs.0.content.3.title'),
          description: t('main.our_works.tabs.0.content.3.description'),
          link: 'https://youtu.be/se9owvFFoGI',
          image: QasaqForceImg,
        },
        {
          id: 4,
          title: t('main.our_works.tabs.0.content.4.title'),
          description: t('main.our_works.tabs.0.content.4.description'),
          link: 'https://youtu.be/VwJ9ltNAWIU',
          image: Project14Img,
        },
      ],
    },
    {
      id: 1,
      title: t('main.our_works.tabs.1.title'),
      content: [
        {
          id: 1,
          title: t('main.our_works.tabs.1.content.0.title'),
          description: t('main.our_works.tabs.1.content.0.description'),
          link: 'https://play.google.com/store/apps/details?id=tripeaks.card.games ',
          image: TripeaksImg,
        },
      ],
    },
    {
      id: 2,
      title: t('main.our_works.tabs.2.title'),
      content: [
        {
          id: 0,
          title: t('main.our_works.tabs.2.content.0.title'),
          description: t('main.our_works.tabs.2.content.0.description'),
          link: 'https://warqube.com/ ',
          image: WarqubeImg,
        },
        {
          id: 1,
          title: t('main.our_works.tabs.2.content.1.title'),
          description: t('main.our_works.tabs.2.content.1.description'),
          link: 'https://bigforgegames.com/',
          image: BigForgeGameImg,
        },
      ],
    },
    {
      id: 3,
      title: t('main.our_works.tabs.3.title'),
      content: [],
    },
  ];

  return (
    <StyledOurWorks id={id}>
      <Round $isBottom={false} />
      <Wrapper>
        <OurWorksTitle size={TitleSize.MEDIUM} as={'h2'}>
          {t('main.our_works.title')}
        </OurWorksTitle>
        <Tabs tabs={tabs} />
      </Wrapper>
    </StyledOurWorks>
  );
};

export default OurWorks;
