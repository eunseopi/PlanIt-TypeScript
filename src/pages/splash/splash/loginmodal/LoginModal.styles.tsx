import styled from "styled-components";

export const ModalContent = styled.div`
  padding: 28px;
  background: #fff;
  border-radius: 28px;
  color: #111827;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
`;

export const ModalTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
`;

export const ModalSubTitle = styled.p`
  margin: 0 0 24px;
  color: #6b7280;
  font-size: 14px;

  button {
    margin-left: 6px;
    border: 0;
    background: none;
    color: #6b7280;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`;

export const BottomLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 18px;

  button {
    border: 0;
    background: none;
    color: #6b7280;
    cursor: pointer;
  }
`;
