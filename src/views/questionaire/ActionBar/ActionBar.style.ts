import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 0 31px 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionsCompleted = styled(Typography.Body)`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  div {
    font-size: 16px;
    line-height: 19px;
    padding-top: 5px;
  }
`;

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = styled.div<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colours.lightGrey};
  width: 100%;
  margin-bottom: 16px;
  div {
    height: 5px;
    background: linear-gradient(
        to right,
        rgba(29, 222, 187, 1) 0%,
        rgba(152, 255, 251, 1) 100%
      )
      fixed;
    width: ${({ progress }) => progress}%;
  }
`;

type StarButtonProps = {
  active: boolean;
};

export const StarButton = styled.img.attrs((props: StarButtonProps) => ({
  src: props.active ? '/images/star-active.png' : '/images/star-inactive.png'
}))<StarButtonProps>`
  cursor: pointer;
  height: 28px;
  width: 28px;
`;

export const FlagButton = styled.img.attrs({
  src: '/images/flag.png'
})`
  cursor: pointer;
  height: 23px;
  margin-left: 23px;
  width: 19px;
`;
