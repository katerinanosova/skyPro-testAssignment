import { Link } from 'react-router-dom';
import * as S from './NotFound.styled';

export const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <S.NotFoundContainer>
        <S.NotFoundBox>
          <S.NotFoundTitle>
            <S.NotFoundLogoIcon src='/img/logo.png' />
            Ууупс, такой страницы не существует
          </S.NotFoundTitle>
          <S.NotFoundDescription>
            Ссылка, по&nbsp;которой вы&nbsp;перешли, никуда не&nbsp;ведет.
            Возможно, в&nbsp;ней&nbsp;была опечатка, или&nbsp;эта&nbsp;страница
            была удалена.
          </S.NotFoundDescription>
          <Link to='/'>
            <S.NotFoundReturnButton>
              Перейти на&nbsp;главную
            </S.NotFoundReturnButton>
          </Link>
        </S.NotFoundBox>
      </S.NotFoundContainer>
    </S.NotFoundWrapper>
  );
};
