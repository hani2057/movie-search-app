import { FunctionComponent, Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

import { FlexDiv } from "../flex-div";
import {
  Backdrop,
  ModalWrapper,
  StyledModal,
  CloseButton,
  ModalText,
  ModalBtn,
} from "./style";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  type: "add" | "remove";
  title: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  setIsOpen,
  type,
  title,
}) => {
  const modal = (
    <>
      <Backdrop />
      <ModalWrapper>
        <StyledModal>
          <FlexDiv width="100%" justify="end">
            <CloseButton onClick={() => setIsOpen(false)} />
          </FlexDiv>

          <FlexDiv
            direction="column"
            gap="1rem"
            padding="1rem 0.5rem 2rem 0.5rem"
            align="start"
          >
            <ModalText bold={true}>{title}</ModalText>
            <ModalText>
              {type === "add"
                ? "영화를 즐겨찾기에 추가할까요?"
                : "영화를 즐겨찾기에서 제거할까요?"}
            </ModalText>
          </FlexDiv>

          <FlexDiv justify="space-evenly">
            <ModalBtn onClick={() => setIsOpen(false)}>취소</ModalBtn>
            <ModalBtn colored={true}>
              {type === "add" ? "즐겨찾기" : "즐겨찾기 제거"}
            </ModalBtn>
          </FlexDiv>
        </StyledModal>
      </ModalWrapper>
    </>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
