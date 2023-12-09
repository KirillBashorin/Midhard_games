import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import Ul from '../../../elements/ul';

const StyledServices = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 35px 0 77px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 45px 0 72px;
    margin-bottom: 103px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 71px 0 0;
    margin-bottom: 170px;
  }
`;

const ServicesTitle = styled(Title)`
  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 25px;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 25px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 18px;
    max-width: 525px;
    margin: 0 auto;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 45px;
  }
`;

const ServicesList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    gap: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { StyledServices, ServicesTitle, StyledSubtitle, ServicesList };
