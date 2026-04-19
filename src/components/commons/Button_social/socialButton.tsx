import StyledSocialBtn from './styles';
import PropTypes from 'prop-types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface SocialBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: 'primary' | 'secondary';
    state?: 'pressed' | 'disabled' | null;
}

const SocialBtn = ({ children, variant, state, disabled, ...props }: SocialBtnProps) => {
    return ( 
        <StyledSocialBtn
            variant={variant}
            state={state}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledSocialBtn>
    );
};

SocialBtn.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    state: PropTypes.oneOf(['pressed', 'disabled', null]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
} 

export default SocialBtn;
