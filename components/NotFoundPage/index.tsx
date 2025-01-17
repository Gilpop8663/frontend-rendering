'use client';

import Layout from '@components/common/Layout';
import LogoButton from '@components/common/LogoButton';
import SquareButton from '@components/common/SquareButton';

import * as S from './style';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <Layout isSidebarVisible={false}>
      <S.Wrapper>
        <S.Title>404</S.Title>
        <LogoButton
          content="icon"
          style={{ width: '150px', height: '150px' }}
        />
        <S.Description>요청하신 페이지를 찾을 수 없어요.</S.Description>
        <S.ButtonWrapper>
          <SquareButton
            theme="fill"
            onClick={() => {
              router.push('/');
            }}>
            홈으로 가기
          </SquareButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Layout>
  );
}
