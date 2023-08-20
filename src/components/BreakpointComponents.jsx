import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export const OnlyXs = ({ children }) => {
  const matches = useMediaQuery("@media (max-width:400px)");

  if (!matches) return null;

  return children;
};

export const DownSm = ({ children }) => {
  const matches = useMediaQuery("@media (max-width:600px)");

  if (!matches) return null;

  return children;
};

export const SmAndUp = ({ children }) => {
  const matches = useMediaQuery("@media (min-width:600px)");

  if (!matches) return null;

  return children;
};

export const OnlyMd = ({ children }) => {
  const matches = useMediaQuery("@media (min-width:900px) and (max-width:1199.95px)");

  if (!matches) return null;

  return children;
};

export const DownMd = ({ children }) => {
  const matches = useMediaQuery("@media (max-width:900px)");

  if (!matches) return null;

  return children;
};

export const MdAndUp = ({ children }) => {
  const matches = useMediaQuery("@media (min-width:900px)");

  if (!matches) return null;

  return children;
};

export const LgAndUp = ({ children }) => {
  const matches = useMediaQuery("@media (min-width:1200px)");

  if (!matches) return null;

  return children;
};
