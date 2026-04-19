import styled from "styled-components";

export const SplashModalContainer = styled.div`
  width: min(90vw, 420px);
  margin-top: 120px;
  text-align: left;
`;

export const ModalContent = styled.div`
  padding: 28px;
  background: #fff;
  border-radius: 28px;
  color: #111827;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
`;

export const ModalTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 700;
`;

export const ModalSubTitle = styled.p`
  margin: 0 0 24px;
  color: #6b7280;
  font-size: 14px;
`;

export const LanguageOption = styled.button<{ selected?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 4px;
  border: 0;
  border-bottom: 1px solid #eef2f7;
  background: ${({ selected }) => (selected ? "#eff6ff" : "#fff")};
  color: #111827;
  cursor: pointer;
`;

export const FlagOption = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Flag = styled.span`
  display: inline-flex;
`;

export const RadioButton = styled.span<{ selected?: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? "#2988ff" : "#d1d5db")};
  background: ${({ selected }) => (selected ? "#2988ff" : "#fff")};
`;

export const Logo = styled.div`
  margin-top: 18px;
  color: #fff;
  font-family: "Alfa Slab One", serif;
  font-size: 30px;
  text-align: center;
`;
