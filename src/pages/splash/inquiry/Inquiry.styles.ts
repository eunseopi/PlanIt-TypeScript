import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px;
  max-width: 500px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
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

export const Input = styled.input`
  width: 90%;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  font-size: 14px;
  background: white;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  padding: 8px 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;
