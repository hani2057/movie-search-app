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
  isFaved: boolean;
  title: string;
  handleBtnClickFunc: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  setIsOpen,
  isFaved,
  title,
  handleBtnClickFunc,
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
              {isFaved
                ? "영화를 즐겨찾기에서 제거할까요?"
                : "영화를 즐겨찾기에 추가할까요?"}
            </ModalText>
          </FlexDiv>

          <FlexDiv justify="space-evenly">
            <ModalBtn onClick={() => setIsOpen(false)}>취소</ModalBtn>
            <ModalBtn colored={true} onClick={handleBtnClickFunc}>
              {isFaved ? "즐겨찾기 제거" : "즐겨찾기"}
            </ModalBtn>
          </FlexDiv>
        </StyledModal>
      </ModalWrapper>
    </>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
