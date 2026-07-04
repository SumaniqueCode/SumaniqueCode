import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.sumanr.com.np";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: "website" | "article" | "profile";
    jsonLd?: Record<string, unknown>;
    noindex?: boolean;
}

const SEO = ({ title, description, path, image = DEFAULT_IMAGE, type = "website", jsonLd, noindex = false }: SEOProps) => {
    const url = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
};

export default SEO;
