export type ShimmerVariant = "blue" | "purple" | "cyan" | "green" | "orange" | "pink" | "red";

/**
 * Reusable hover-gradient + shimmer overlay.
 * Dark mode is handled automatically via CSS - no props needed.
 *
 * IMPORTANT: This component must be placed inside a parent with `group` class.
 * Set runOnce to animate only once on hover (instead of infinite).
 */
const ShimmerGradientOverlay = ({
  className = "rounded-lg",
  variant = "blue",
  runOnce = false,
}: {
  className?: string;
  variant?: ShimmerVariant;
  runOnce?: boolean;
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Border Effect - visible immediately on hover */}
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 card-shimmer-border-${variant} ${
            runOnce ? "animate-shimmer-once" : "animate-shimmer-slide"
          }`}
        />
      </div>
    </div>
  );
};

export default ShimmerGradientOverlay;