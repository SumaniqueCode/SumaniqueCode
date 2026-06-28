import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../ThemeContext";
import ShimmerGradientOverlay, { ShimmerVariant } from "./ShimmerGradientOverlay";

type CardStyleVariant = "default" | "flat" | "glass";

interface CardProps {
    /** Shimmer color variant */
    variant?: ShimmerVariant;
    /** Card style variant */
    cardVariant?: CardStyleVariant;
    /** Make entire card clickable (renders as Link) */
    href?: string;
    /** Children content */
    children: React.ReactNode;
    /** Show shimmer effect on hover */
    shimmer?: boolean;
    /** Optional className */
    className?: string;
}

const Card = ({
    variant = "blue",
    cardVariant = "default",
    href,
    children,
    className = "",
    shimmer = false,
    ...props
}: CardProps) => {
    const { darkMode } = useThemeContext();

    const baseStyles = "relative group overflow-hidden border rounded-2xl " + (darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200");

    const getCardVariantClass = () => {
        switch (cardVariant) {
            case "flat":
                return " "
            case "glass":
                return "backdrop-blur-sm"
            case "default":
            default:
                return "shadow-md hover:shadow-lg hover:scale-[1.005] transition-all duration-500"
        }
    };

    const cardContent = (
        <>
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Shimmer Effect - rendered after content to appear on top */}
            {shimmer && (
                <ShimmerGradientOverlay
                    variant={variant}
                    className="rounded-2xl z-20"
                />
            )}
        </>
    );

    const combinedClassName = [baseStyles, getCardVariantClass(), className].filter(Boolean).join(" ");

    if (href) {
        return (
            <Link
                to={href}
                className={combinedClassName}
                {...props}
            >
                {cardContent}
            </Link>
        );
    }

    return (
        <div
            className={combinedClassName}
            {...props}
        >
            {cardContent}
        </div>
    );
};

/** Card Header Component */
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
        {children}
    </div>
);

/** Card Title Component */
interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const CardTitle = ({ children, className = "" }: CardTitleProps) => (
    <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

/** Card Description Component */
interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const CardDescription = ({ children, className = "" }: CardDescriptionProps) => (
    <p className={`text-sm ${className}`}>{children}</p>
);

/** Card Content Component */
interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => (
    <div className={className}>{children}</div>
);

/** Card Footer Component */
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export const CardFooter = ({ children, className = "" }: CardFooterProps) => (
    <div className={`mt-4 pt-4 border-t ${className}`}>{children}</div>
);

export default Card;