import { ChipWrapper } from "./styles";
import type { HTMLAttributes, ReactNode } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    label?: ReactNode;
    emoji?: ReactNode;
    size?: 'small' | 'medium';
    state?: 'default' | 'selected';
    value?: string;
}

const Chip = ({ label, emoji, size, state, ...props }: ChipProps) => {
    return (
        <ChipWrapper size={size} state={state} {...props}>
            <span>{emoji}</span>
            <span>{label}</span>
        </ChipWrapper>
    )
};

export default Chip;
