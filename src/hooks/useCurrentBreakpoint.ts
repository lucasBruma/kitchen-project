import type { Breakpoint } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { theme } from "@/styles/theme/app.theme";

const useCurrentBreakpoint = () => {
  /**
   * 0px to 599px
   */
  const xs = useMediaQuery(theme.breakpoints.only("xs")) && "xs";
  /**
   * 600px to 959px
   */
  const sm = useMediaQuery(theme.breakpoints.only("sm")) && "sm";
  /**
   * 960px to 1279px
   */
  const md = useMediaQuery(theme.breakpoints.only("md")) && "md";
  /**
   * 1280px to 1919px
   */
  const lg = useMediaQuery(theme.breakpoints.only("lg")) && "lg";
  /**
   * +1920px
   */
  const xl = useMediaQuery(theme.breakpoints.only("xl")) && "xl";

  /**
   * 600px to 959px
   */
  const smAndDown = useMediaQuery(theme.breakpoints.down("sm"));
  /**
   * 600px to 959px
   */
  const smAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  /**
   * 600px to 959px
   */
  const mdAndUp = useMediaQuery(theme.breakpoints.up("md"));

  const currentBreakpoint: Breakpoint | "" = xs || sm || md || lg || xl || "";

  return {
    currentBreakpoint,
    mdAndUp,
    smAndDown,
    smAndUp,
  };
};

export default useCurrentBreakpoint;
