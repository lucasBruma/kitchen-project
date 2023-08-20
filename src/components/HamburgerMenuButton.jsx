import clsx from "clsx";
import { motion } from "framer-motion";
import { MouseEventHandler, MutableRefObject, Ref } from "react";

const Path = (props) => {
  return <motion.path fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" {...props} />;
};

/**
 * @todo (lucas): this SVG is a bit shifted to the top left
 */
export const HamburgerMenuButton = ({ className, toggle, isOpen, buttonRef, ...otherProps }) => {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={clsx("flex h-[23px] items-center justify-center text-white md:h-[36px]", className)}
    >
      <button ref={buttonRef} type="button" onClick={toggle} {...otherProps}>
        <svg width="48" height="35" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};
