import { StyledSocialButton, StyledSocialBg } from './styled';

interface ISocialButton {
  children?: React.ReactNode;
  link: string;
  target: string;
  $beforeContent?: string;
  className?: string;
}

const SocialButton: React.FC<ISocialButton> = ({
  children,
  link,
  target,
  $beforeContent,
  className,
}) => {
  return (
    <StyledSocialButton
      className={className}
      link={link}
      target={target}
      $beforeContent={$beforeContent}
    >
      <StyledSocialBg>{children}</StyledSocialBg>
    </StyledSocialButton>
  );
};

export default SocialButton;
