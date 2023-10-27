"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useCurrentBreakpoint from "@/hooks/useCurrentBreakpoint";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WhyUs() {
  const [value, setValue] = React.useState(0);
  const { mdAndUp } = useCurrentBreakpoint();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="px-6 pb-32 pt-16 sm:px-32">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          orientation={mdAndUp ? "horizontal" : "vertical"}
        >
          <Tab label="What Are the Benefits of Cabinet Refacing?" {...a11yProps(0)} className="!text-lg" />
          <Tab label="How Much Does Cabinet Refacing Cost?" {...a11yProps(1)} className="!text-lg" />
          <Tab label="Who Should You Trust to Perform Cabinet Refacing?" {...a11yProps(2)} className="!text-lg" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="px-4 text-center text-black lg:px-24">
        During kitchen renovations, most people will consider either installing new kitchen cabinets or doing kitchen
        cabinet refacing. If you’re on the fence about which one you should choose, you should learn about the benets of
        both. Here are the biggest benets associated with cabinet refacing:{" "}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="px-4 text-center text-black lg:px-24">
        As we mentioned earlier, the cost of cabinet refacing is typically going to be a whole lot lower than cabinet
        replacement. If you’re doing renovations in your kitchen and you’re on a tight budget, you might want to
        seriously consider going with cabinet refacing rather than replacing all your kitchen cabinets. But the total
        price that you’ll pay for cabinet refacing is going to depend on many factors.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="px-4 text-center text-black lg:px-24">
        Some people will attempt to take the DIY approach to cabinet refacing. More often than not, this is going to end
        up being a mistake. Resurfacing kitchen cabinets won’t take professionals too long to do. They should be able to
        get in and out of your home within just a few days at most. It could take you, on the other hand, weeks and
        maybe even months to nish cabinet replacements. For this reason, you should hire a remodeling company with
        experience that specializes in cabinet refacing to lend you a hand.
      </CustomTabPanel>
    </Box>
  );
}
