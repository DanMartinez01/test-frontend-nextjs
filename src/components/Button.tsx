import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <div>
            <button
                {...props}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;


