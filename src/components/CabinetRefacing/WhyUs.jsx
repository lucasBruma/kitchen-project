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
          <Tab label="What Are the Benefits of Cabinet Refacing?" {...a11yProps(0)} className="!text-lg font-bold text-black" />
          <Tab label="How Much Does Cabinet Refacing Cost?" {...a11yProps(1)} className="!text-lg font-bold text-black" />
          <Tab label="Who Should You Trust to Perform Cabinet Refacing?" {...a11yProps(2)} className="!text-lg font-bold text-black" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="px-4 text-center text-black  lg:px-24">
        During kitchen renovations, most people will consider either installing new kitchen cabinets or doing kitchen
        cabinet refacing. If you’re on the fence about which one you should choose, you should learn about the benefits of
        both. Here are the biggest benefits associated with cabinet refacing:{" "}
        <ul className="px-4 text-center text-black font-bold p-8 list-disc ">
          <li>Resurfacing kitchen cabinets will cost just a fraction of what replacing them will</li>
          <li>Cabinet refacing will make most kitchen cabinets look like they’re brand new</li>
          <li>Refacing kitchen cabinets might make them more functional when you add the right accessories
              to them
          </li>
          <li>Cabinet refacing will often take less time than replacing them helps save the enviroment by keeping
              building materials out of landfills and saves trees from being cut down.
          </li>
        </ul>
        You will be pleasantly surprised when you see how much better your kitchen as a whole will look following the
        cabinet refacing process. It’ll make you wonder why you ever even considered replacing your kitchen cabinets.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="px-4 text-center text-black lg:px-24">
        As we mentioned earlier, the cost of cabinet refacing is typically going to be a whole lot lower than cabinet
        replacement. If you’re doing renovations in your kitchen and you’re on a tight budget, you might want to
        seriously consider going with cabinet refacing rather than replacing all your kitchen cabinets. But the total
        price that you’ll pay for cabinet refacing is going to depend on many factors.
        <ul className="px-4 text-center text-black font-bold list-disc p-8">
          <li>The type of kitchen cabinets you have</li>
          <li>The number of cabinets in your kitchen</li>
          <li>The new doors and drawer fronts you want to put on your kitchen cabinets</li>
          <li>The kitchen remodeling company you choose to work with</li>
        </ul>
        The accesories you want to add such as rollout drawers, roll out trash cans, etc,etc
        You should take each of these factors into account when you’re getting estimates on cabinet refacing vs cabinet
        replacements It will help you nd the best possible price for resurfacing services.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="px-4 text-center text-black lg:px-24">
        Some people will attempt to take the DIY approach to cabinet refacing. More often than not, this is going to end
        up being a mistake. Resurfacing kitchen cabinets won’t take professionals too long to do. They should be able to
        get in and out of your home within just a few days at most. It could take you, on the other hand, weeks and
        maybe even months to finish cabinet replacements. For this reason, you should hire a remodeling company with
        experience that specializes in cabinet refacing to lend you a hand.
      </CustomTabPanel>
    </Box>
  );
}
