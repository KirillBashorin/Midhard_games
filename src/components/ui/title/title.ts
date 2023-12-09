import styled, { css } from 'styled-components';

const enum TitleSize {
  BIG = 'big',
  MEDIUM = 'medium',
  SMALL = 'small',
  EXTRA_SMALL = 'extra_small',
}

interface ITitleSizeValue {
  [TitleSize.BIG]: {
    fontSizeDesktop: string;
    fontSizeTablet: string;
    fontSizeMobile: string;
    lineHeight: string;
    letterSpacingMobile: string;
    letterSpacingTablet: string;
    letterSpacingDesktop: string;
  };
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: string;
    fontSizeTablet: string;
    fontSizeMobile: string;
    lineHeight: string;
    letterSpacingMobile: string;
    letterSpacingTablet: string;
    letterSpacingDesktop: string;
  };
  [TitleSize.SMALL]: {
    fontSizeDesktop: string;
    fontSizeTablet: string;
    fontSizeMobile: string;
    lineHeight: string;
    letterSpacingMobile: string;
    letterSpacingTablet: string;
    letterSpacingDesktop: string;
  };
  [TitleSize.EXTRA_SMALL]: {
    fontSizeDesktop: string;
    fontSizeTablet: string;
    fontSizeMobile: string;
    lineHeight: string;
    letterSpacingMobile: string;
    letterSpacingTablet: string;
    letterSpacingDesktop: string;
  };
}

const TitleSizeValue: ITitleSizeValue = {
  [TitleSize.BIG]: {
    fontSizeDesktop: '120px',
    fontSizeTablet: '90px',
    fontSizeMobile: '44px',
    lineHeight: '90%',
    letterSpacingMobile: '-1.32px',
    letterSpacingTablet: '-2.7px',
    letterSpacingDesktop: '-3.6px',
  },
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: '76px',
    fontSizeTablet: '76px',
    fontSizeMobile: '34px',
    lineHeight: '100%',
    letterSpacingMobile: '-0.38px',
    letterSpacingTablet: '-0.76px',
    letterSpacingDesktop: '-0.76px',
  },
  [TitleSize.SMALL]: {
    fontSizeDesktop: '34px',
    fontSizeTablet: '34px',
    fontSizeMobile: '24px',
    lineHeight: '90%',
    letterSpacingMobile: '0',
    letterSpacingTablet: '0',
    letterSpacingDesktop: '0',
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSizeDesktop: '24px',
    fontSizeTablet: '24px',
    fontSizeMobile: '20px',
    lineHeight: '100%',
    letterSpacingMobile: '0',
    letterSpacingTablet: '0',
    letterSpacingDesktop: '0',
  },
};

interface ITitle {
  size: TitleSize;
  $isDark?: boolean;
}

const Title = styled.h1<ITitle>`
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1.32px;
  text-align: center;
  color: ${(props) =>
    props.$isDark ? props.theme.primary : props.theme.basicWhite};

  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSizeMobile};
      line-height: ${values.lineHeight};
      letter-spacing: ${values.letterSpacingMobile};
    `;
  }};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    ${(props) => {
      const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
      return css`
        font-size: ${values.fontSizeTablet};
        letter-spacing: ${values.letterSpacingTablet};
      `;
    }};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    ${(props) => {
      const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
      return css`
        font-size: ${values.fontSizeDesktop};
        letter-spacing: ${values.letterSpacingDesktop};
      `;
    }};
  }
`;

export { Title, TitleSize };
