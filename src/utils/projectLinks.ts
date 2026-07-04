import { toast } from "react-toastify";

export const isValidProjectLink = (url?: string) => !!url && url !== "#";

export const handleProjectLink = (
    e: React.MouseEvent,
    url: string | undefined,
    label: string
) => {
    e.stopPropagation();
    if (!isValidProjectLink(url)) {
        e.preventDefault();
        toast.info(`${label} link not available yet.`);
    }
};
