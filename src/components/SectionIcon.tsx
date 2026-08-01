import { LucideIcon } from "lucide-react";
import { useThemeContext } from "@/ThemeContext";

interface SectionIconProps {
  icon: LucideIcon;
  className?: string;
}

/**
 * Bare icon sitting to the left of a section heading - no badge, just the mark
 * in the same blue the heading accent uses, so every section header reads as
 * one system. Decorative only: the heading text beside it already names the
 * section for screen readers.
 */
const SectionIcon = ({ icon: Icon, className = "" }: SectionIconProps) => {
  const { darkMode } = useThemeContext();

  return (
    <Icon
      aria-hidden="true"
      strokeWidth={2.2}
      className={`shrink-0 w-7 h-7 md:w-8 md:h-8 ${darkMode ? "text-blue-400" : "text-[var(--color-primary)]"
        } ${className}`}
    />
  );
};

export default SectionIcon;
