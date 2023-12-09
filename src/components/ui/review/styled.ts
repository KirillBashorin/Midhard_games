import styled from 'styled-components';
import StarIco from '../../../assets/star.svg?react';
import P from '../../../elements/p';
import Image from '../../../elements/image';
import Button from '../../ui/button/button';

const StyledReview = styled.div`
  border-radius: 40px;
  background-color: ${(props) => props.theme.primaryDark};
  padding: 30px 20px 20px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 30px;
  }
`;

const Rating = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 20px;
  }
`;

const Star = styled(StarIco)`
  width: 33px;
  height: 33px;
`;

interface IReviewText {
  $isCardOpened?: boolean;
}

const ReviewText = styled(P)<IReviewText>`
  color: ${(props) => props.theme.textLight};
  font-size: 18px;
  line-height: 130%;
  margin-bottom: ${(props) => (props.$isCardOpened ? '42px' : null)};

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
  }
`;

const MoreButton = styled(Button)`
  padding: 0;
  border: 0;
  color: ${(props) => props.theme.textPrimary};
  font-size: 18px;
  line-height: 150%;
  background-color: transparent;
  margin-bottom: 15px;

  &:hover {
    color: ${(props) => props.theme.green};
    background-color: transparent;
  }
`;

const ReviewPerson = styled.div`
  display: flex;
  gap: 20px;
`;

const ReviewPhoto = styled(Image)`
  width: 69px;
  height: 69px;
  border-radius: 50%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    width: 85px;
    height: 85px;
  }
`;

const ReviewPersonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
`;

const ReviewName = styled.h3`
  color: ${(props) => props.theme.basicWhite};
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 24px;
  }
`;

const ReviewNameDescription = styled(P)`
  color: ${(props) => props.theme.basicWhite};
  font-size: 18px;
  line-height: 130%;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    font-size: 20px;
  }
`;

export {
  StyledReview,
  Rating,
  Star,
  ReviewText,
  MoreButton,
  ReviewPerson,
  ReviewPhoto,
  ReviewPersonText,
  ReviewName,
  ReviewNameDescription,
};
