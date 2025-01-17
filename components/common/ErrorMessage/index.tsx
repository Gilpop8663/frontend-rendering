import LogoButton from '../LogoButton';
import SquareButton from '../SquareButton';

import * as S from './style';

export default function ErrorMessage() {
  return (
    <>
      <S.Wrapper>
        <S.Title>요청하신 데이터를 불러오는데 실패했습니다.</S.Title>
        <LogoButton
          content="icon"
          style={{ width: '100px', height: '100px' }}
        />
        <S.Description>
          오류가 지속되는 경우 votogether2023@gmail.com 로 문의해주세요.
        </S.Description>
        <S.ButtonContainer>
          <S.ButtonWrapper>
            <SquareButton theme="fill">홈으로 가기</SquareButton>
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <SquareButton aria-label="다시 시도" theme="blank">
              <span>다시 시도</span>
            </SquareButton>
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </S.Wrapper>
    </>
  );
}
