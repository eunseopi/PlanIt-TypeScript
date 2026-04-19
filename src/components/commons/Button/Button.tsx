import { StyledButton } from "./styles";
import PropTypes from "prop-types";

interface ButtonProps {
  children: any;
  variant: string;
  size: string;
  fullWidth: string;
  disabled: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      size={size}
      $fullWidth={fullWidth}
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
