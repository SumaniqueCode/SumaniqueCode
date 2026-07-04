import React from "react";

export interface PictureSource {
    avif?: string;
    webp?: string;
    fallback: string;
}

interface PictureProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
    src: string | PictureSource;
    alt: string;
    className?: string;
    pictureClassName?: string;
    sizes?: string;
    loading?: "lazy" | "eager";
    draggable?: boolean;
}

const Picture = ({
    src,
    alt,
    className = "",
    pictureClassName = "",
    sizes,
    loading = "lazy",
    draggable = false,
    ...props
}: PictureProps) => {
    if (typeof src === "string") {
        return (
            <img
                src={src}
                alt={alt}
                className={className}
                loading={loading}
                draggable={draggable}
                {...props}
            />
        );
    }

    return (
        <picture className={pictureClassName}>
            {src.avif && <source srcSet={src.avif} sizes={sizes} type="image/avif" />}
            {src.webp && <source srcSet={src.webp} sizes={sizes} type="image/webp" />}
            <img
                src={src.fallback}
                alt={alt}
                className={className}
                loading={loading}
                draggable={draggable}
                {...props}
            />
        </picture>
    );
};

export default Picture;
