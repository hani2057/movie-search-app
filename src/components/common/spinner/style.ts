import styled, { keyframes } from "styled-components";

const spin = keyframes`
   100% {transform: rotate(1turn)}
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 100%;
  top: 1rem;
  right: 0;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerComponent = styled.div`
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  position: relative;
  right: 0;
  color: var(--main-color);
  box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: ${spin} 1s infinite steps(8);
`;

export { SpinnerWrapper, SpinnerComponent };
