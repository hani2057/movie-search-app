import { FlexDiv } from "components/common";

export const NotFoundPage = () => {
  return (
    <FlexDiv
      direction="column"
      justify="center"
      align="center"
      height="calc(100vh - 4rem)"
      gap="1rem"
    >
      <p>페이지를 찾을 수 없어요</p>
      <p>아래 탭을 눌러 이동하세요</p>
    </FlexDiv>
  );
};
