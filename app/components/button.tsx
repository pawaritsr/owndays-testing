'use client'

import * as React from "react";

type ButtonVariant =
  | "contained"
  | "soft"
  | "surface"
  | "outline"
  | "ghost";
type ButtonSize = "small" | "medium" | "large" | "icon";
type ButtonRadius = "none" | "small" | "medium" | "large" | "full";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className = "",
      variant = "contained",
      size = "large",
      radius = "none",
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    return (
      <Comp
        data-radius={radius}
        ref={ref}
        className={`base-btn btn-variant-${variant} btn-size-${size} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
