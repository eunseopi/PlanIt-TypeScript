import { StyledButton } from "./styles";
import PropTypes from "prop-types";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whiteDark";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  middleWidth?: boolean;
  ninetyWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth,
  middleWidth,
  ninetyWidth,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      size={size}
      $fullWidth={fullWidth}
      $middleWidth={middleWidth}
      $ninetyWidth={ninetyWidth}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
