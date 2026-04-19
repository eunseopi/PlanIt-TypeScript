// import { inputStyles } from "./styles";
import { Container, Label, StyledInput, ErrorMessage } from './styles'
import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label?: ReactNode;
    value?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    error?: ReactNode;
    hasError?: boolean;
    $hasError?: boolean | string;
}

const Input = ({ 
    label, 
    id = "", 
    type = 'text', 
    value, 
    onChange, 
    placeholder = "", 
    error, 
    hasError, 
    $hasError,
    required=false,
    ...props
}: InputProps) => {
    return (
        <Container>
            {label && (
                <Label htmlFor={id}>
                    {label}
                </Label>
            )}
            <StyledInput
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                $hasError={hasError ?? Boolean($hasError) ?? Boolean(error)}
                required={required}
                {...props}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default Input;
