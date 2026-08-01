import { Variants } from "framer-motion";

/**
 * Reveals its children one after another. Children inherit the container's
 * `show` state automatically, so items need only their own `variants` - no
 * per-item delay.
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
    hidden: {},
    show: { transition: { delayChildren, staggerChildren } },
});

/**
 * "Stacked into place": the item glides in from above and to the right of its
 * slot and settles on a soft spring. `x`/`y` are the offsets it travels from -
 * scale them to the item's size.
 */
export const stackItem = (x = 30, y = -20): Variants => ({
    hidden: { opacity: 0, x, y, scale: 0.9, rotate: 4 },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 85, damping: 15, mass: 1 },
    },
});

/** Plain fade while sliding up from below. */
export const riseItem = (y = 20): Variants => ({
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
});
