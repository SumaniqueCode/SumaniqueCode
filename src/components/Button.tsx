import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../ThemeContext";
import ShimmerGradientOverlay, { ShimmerVariant } from "./ShimmerGradientOverlay";

type ButtonVariant = "primary" | "secondary" | "outlined" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    overlay?: boolean;
    overlayVariant?: ShimmerVariant;
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
}

const Button = ({
    variant = "primary",
    children,
    overlay = true,
    overlayVariant = "blue",
    className = "",
    href,
    target,
    rel,
    onClick,
    ...props
}: ButtonProps) => {
    const { darkMode } = useThemeContext();

    const baseStyles = "relative group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shadow-md hover:shadow-lg";

    const getVariantClass = () => {
        switch (variant) {
            case "primary":
                return darkMode
                    ? "bg-[var(--color-primary-dark)] hover:bg-blue-900 text-white"
                    : "bg-[var(--color-primary)] hover:bg-blue-700 text-white";
            case "secondary":
                return darkMode
                    ? "bg-[var(--color-secondary-dark)] hover:bg-gray-800 text-white"
                    : "bg-[var(--color-secondary)] hover:bg-gray-300 text-gray-800";
            case "outlined":
                return darkMode
                    ? "bg-transparent hover:bg-gray-800 text-white border border-[var(--color-primary)] hover:border-blue-500"
                    : "bg-transparent hover:bg-gray-100 text-gray-800 border border-[var(--color-primary)] hover:border-blue-700";
            case "danger":
                return darkMode
                    ? "bg-[var(--color-danger-dark)]/80 hover:bg-red-900 text-red-200"
                    : "bg-[var(--color-danger)] hover:bg-red-700 text-white";
            default:
                return darkMode
                    ? "bg-[var(--color-primary-dark)] hover:bg-blue-900 text-white"
                    : "bg-[var(--color-primary)] hover:bg-blue-700 text-white";
        }
    };

    const content = (
        <>
            {/* Overlay for shimmer effect */}
            {overlay && (
                <ShimmerGradientOverlay
                    variant={overlayVariant}
                    className="rounded-lg"
                    runOnce
                />
            )}

            {/* Button Content */}
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </>
    );

    if (href) {
        return (
            <Link
                to={href}
                target={target}
                rel={rel}
                onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
                className={`${baseStyles} ${getVariantClass()} ${className}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyles} ${getVariantClass()} ${className}`}
            onClick={onClick}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;