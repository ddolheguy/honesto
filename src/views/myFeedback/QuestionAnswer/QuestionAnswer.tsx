import React, { memo } from 'react';
import { withTheme } from 'styled-components';
import { Answer, Question } from '../../../../types/question';
import { ThemeProps } from '../../../theme/theme';
import * as S from './QuestionAnswer.style';

const QuestionAnswer: React.FC<Props> = ({ answer, question, theme }) => {
  const isSkipped = answer !== undefined && answer.skipped;

  const getColour = (index: number) => {
    if (!answer || !answer.answer || answer.skipped) {
      return theme.colours.lightGrey;
    }
    const answerValue = parseInt(answer.answer, 10);
    if (answerValue <= index) {
      return theme.colours.lightGrey;
    }

    if (question.type === 'multipleChoice') {
      if (answerValue === 1) {
        return theme.colours.red;
      } else if (answerValue === 2) {
        return theme.colours.yellow;
      }
      return theme.colours.green;
    }

    if (answerValue < 4) {
      return theme.colours.red;
    } else if (answerValue < 7) {
      return theme.colours.yellow;
    }

    return theme.colours.green;
  };

  return (
    <S.Container isVertical={question.type === 'text'}>
      <S.QuestionText isSkipped={isSkipped}>
        {question.title}
        {isSkipped ? <S.SkippedPanel>SKIPPED</S.SkippedPanel> : null}
      </S.QuestionText>
      {question.type === 'multipleChoice' ? (
        <S.AnswerContainer>
          {new Array(3).fill({}).map((_, index) => (
            <S.LargeTile color={getColour(index)} key={index} />
          ))}
        </S.AnswerContainer>
      ) : null}
      {question.type === 'rating' ? (
        <S.AnswerContainer>
          {new Array(10).fill({}).map((_, index) => (
            <S.SmallTile color={getColour(index)} key={index} />
          ))}
        </S.AnswerContainer>
      ) : null}
      {answer !== undefined && question.type === 'text' ? (
        <S.Text>{answer.answer}</S.Text>
      ) : null}
    </S.Container>
  );
};

type Props = ThemeProps & {
  question: Question;
  answer?: Answer;
};

export default memo(withTheme(QuestionAnswer));
