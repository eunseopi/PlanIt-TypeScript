import "react";

declare module "*.css";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";
declare module "*.gif";
declare module "i18n";
declare module "languages";

declare module "react" {
  interface HTMLAttributes<T> {
    active?: boolean;
    delay?: number;
    hasUnread?: boolean;
    isDeleteMode?: boolean;
    isMine?: boolean;
    isSelected?: boolean;
    isVisible?: boolean;
    layout?: string;
    marginBottom?: string;
  }

  interface InputHTMLAttributes<T> {
    $hasError?: boolean | string;
  }
}
