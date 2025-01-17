import StyledComponentsRegistry from 'lib/registry';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>보투게더 - VoTogether</title>
        <meta
          name="description"
          content='"VoTogether(보투게더)"는 투표를 통해 고민을 해결하고 재미를 찾는 투표 SNS 서비스입니다. 고민이 있으신가요? 글을 써보세요! 익명으로 글을 작성하며 나를 드러내지 않아도 쉽게 고민을 나눌 수 있습니다. 보투게더는 사람들의 다양한 주제로 질문하고 답변하면서, 사람들의 반응을 확인할 수 있다는 점에서 특별합니다. 나의 이야기가 우리의 이야기가 되는 공간, 보투게더에서 우리 함께해요!✌🏻.'
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
