import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, disabled, ...props }, ref) => {
    
    const baseStyles = "relative px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg",
      outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
      text: "text-foreground hover:text-primary/80 px-0 underline underline-offset-4 decoration-primary/50",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
