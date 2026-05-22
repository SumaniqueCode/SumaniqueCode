import React from "react";

/**
 * Reusable hover-gradient + shimmer overlay.
 *
 * IMPORTANT: This component is only visual overlays; it must not affect card size.
 */
const ShimmerGradientOverlay = ({
  roundedClassName = "rounded-lg",
}: {
  roundedClassName?: string;
}) => {
  return (
    <>
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bb-commandcard-hover-gradient" />

      {/* Animated Border Effect */}
      <div className={`absolute inset-0 overflow-hidden ${roundedClassName}`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bb-commandcard-shimmer-border" />
      </div>
    </>
  );
};

export default ShimmerGradientOverlay;

