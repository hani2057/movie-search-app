import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1100;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1200;
  width: 40%;
  min-width: 16rem;
`;

const StyledModal = styled.div`
  z-index: 100;
  background: #ffffff;
  position: relative;
  margin: auto;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(RiCloseFill)`
  font-size: 1.5rem;
  color: var(--main-color);
  cursor: pointer;
`;

const ModalText = styled.p<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
`;

const ModalBtn = styled.button<{ colored?: boolean }>`
  border: 1px solid var(--main-color);
  background-color: ${({ colored }) =>
    colored ? "var(--main-color)" : "#ffffff"};
  width: 40%;
  border-radius: 5px;
  padding: 1rem 0;
`;

export {
  Backdrop,
  ModalWrapper,
  StyledModal,
  CloseButton,
  ModalText,
  ModalBtn,
};
