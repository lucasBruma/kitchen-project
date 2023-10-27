"use client";
import { createTheme, responsiveFontSizes, Shadows } from "@mui/material/styles";
import type { Theme } from "@mui/system";
import { Red_Hat_Display } from "next/font/google";
import { montserrat } from "@/app/layout";
/**
 * @todo (lucas): remove some weights
 */
export const redHatDisplay = Red_Hat_Display({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              margin: 0,
            },
            ":before": {
              height: 0,
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          content: {
            "&.Mui-expanded": {
              margin: "12px 0",
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          action: {
            alignItems: "center",
            marginLeft: "12px",
            marginRight: 0,
            padding: 0,
          },
          icon: {
            alignItems: "center",
            padding: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            "&.MuiAccordionSummary-root.Mui-expanded": {
              minHeight: "48px",
            },
            textTransform: "none",
          },
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {},
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: 0,
          },
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            margin: 0,
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          disableFocusRipple: true,
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            background: "#FFFFFF",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            boxSizing: "border-box",
            height: "100%",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {},
        },
      },
      MuiSlider: {
        styleOverrides: {
          rail: {
            backgroundColor: "rgba(255, 255, 255, 0.35)",
          },
          thumb: {
            backgroundColor: "#fff",
          },
          track: {
            backgroundColor: "#43A1F6",
            border: "0",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {},
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 600,
          },
          h3: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 500,
          },
          h5: {
            fontWeight: 500,
          },
          h6: {
            fontWeight: 400,
          },
          root: {
            fontFamily: montserrat.style.fontFamily,
          },
        },
      },
    },
    shadows: Array(25).fill("none") as Shadows,
  }),
);

export type CustomTheme = Theme;
