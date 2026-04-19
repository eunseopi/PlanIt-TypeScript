import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 500px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff6ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 42px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  width: 90%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-left: 10px;
  font-size: 14px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 90%;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  font-size: 14px;
`;

export const ResendText = styled.p`
  margin: 14px 32px;
  color: #6b7280;
  font-size: 14px;
`;

export const ResendButton = styled.button`
  margin-left: 8px;
  border: 0;
  background: none;
  color: #2988ff;
  cursor: pointer;
`;

export const sendBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px auto 0;
  width: 90%;
`;

export const nextButton = styled.div`
  margin: 40px auto 0;
  width: 90%;
`;
