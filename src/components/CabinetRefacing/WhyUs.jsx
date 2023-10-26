import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';






// const data = [
//     {
//       id: 1,
//       tabTitle: 'What Are the Benefits of Cabinet Refacing?',
//       title: `We will turn your idea in the successful business model framework`,
//       description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
//       moreLink: '#explore-more',
//       list: [
//         'Medical and vision',
//         'Life insurance',
//         'HSAs and FSAs',
//         'Commuter benefits',
//       ],
//     },
//     {
//       id: 2,
//       tabTitle: 'How Much Does Cabinet Refacing Cost?',
//       title: `We will turn your idea in the successful business model framework`,
//       description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
//       moreLink: '#explore-more',
//       list: [
//         'Medical and vision',
//         'Life insurance',
//         'HSAs and FSAs',
//         'Commuter benefits',
//       ],
//     },
//     {
//       id: 3,
//       tabTitle: 'Who Should You Trust to Perform Cabinet Refacing?',
//       title: `We will turn your idea in the successful business model framework`,
//       description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
//       moreLink: '#explore-more',
//      list: [
//         'Medical and vision',
//         'Life insurance',
//         'HSAs and FSAs',
//         'Commuter benefits',
//       ],
//     },
//   ];

//   const styles = {
//     section: {
//       pt: [11, null, null, 12],
//       pb: [8, null, null, 9, null, 11],
//     },
//     tabs: {
//       border: 0,
//       '.rc-tabs-nav': {
//         mb: [8, null, null, 9, 10, 9, 12],
//       },
//       '.rc-tabs-nav-wrap': {
//         borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
//         justifyContent: 'center',
//       },
//       '.rc-tabs-nav-list': {
//         flexGrow: 1,
//         justifyContent: 'space-evenly',
//         pb: [3, null, null, 5, null, 6],
//       },
//       '.rc-tabs-tab-btn': {
//         outline: 0,
//         alignItems: 'center',
//         img: {
//           outline: 0,
//         },
//       },
//       '.rc-tabs-tab': {
//         backgroundColor: 'transparent',
//         // m: ['0 45px'],
//         h4: {
//           fontFamily: 'body',
//           fontSize: [0, null, null, 17, null, null, 4],
//           fontWeight: 700,
//           lineHeight: 1.5,
//           textAlign: ['center', null, null, null, 'left'],
//           whiteSpace: ['break-spaces', null, null, null, 'unset'],
//         },
//       },
//       '.rc-tabs-tabpane': {
//         display: ['flex', null, null, 'grid'],
//         flexDirection: ['column-reverse', null, null, 'unset'],
//         alignItems: 'center',
//         justifyContent: 'center',
//         gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
//         outline: 0,
//         gap: [5, null, null, 11],
//         h2: {
//           color: 'heading',
//           fontSize: [24, null, null, 6, 26, 8, 40],
//           fontWeight: 700,
//           lineHeight: [1.45, null, null, 1.5],
//           letterSpacing: [null, null, null, '0.5px', null, '-1px'],
//           textAlign: ['center', null, null, 'left'],
//         },
//         p: {
//           color: 'textSecondary',
//           fontSize: [1, null, null, 2, 17],
//           lineHeight: [1.87, null, null, 2, 2.48],
//           textAlign: ['center', null, null, 'left'],
//           mt: [4],
//         },
//         '.list-item': {
//           fontSize: [0, null, null, 1, 2],
//           fontWeight: 500,
//           lineHeight: [2.8],
//           display: 'flex',
//           alignItems: 'center',
//         },
//       },
//     },
//     list: {
//       mt: [5],
//       display: 'grid',
//       justifyContent: ['center', null, null, 'unset'],
//       gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
//     },
//     learnMore: {
//       mt: [4],
//       textAlign: ['center', null, null, 'left'],
//       a: {
//         fontSize: [null, null, null, 1, 2],
//       },
//     },
//     illustration: {
//       display: ['flex'],
//       alignItems: 'center',
//       justifyContent: 'center',
//       textAlign: [null, null, null, null, null, 'center'],
//       img: {
//         maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
//       },
//     },
//   };



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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const WhyUs = () => {
  const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <>
      <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
        <Tab className="pb-6 text-base font-bold text-gray-800" label="What Are the Benefits of Cabinet Refacing?"/>
        <Tab className="pb-6 text-base font-bold text-gray-800"label="How Much Does Cabinet Refacing Cost?" />
        <Tab className="pb-6 text-base font-bold text-gray-800"label="Who Should You Trust to Perform Cabinet Refacing?" />
        </Tabs>
        </Box>

        <CustomTabPanel  value={value} index={0}>
        <p className="pb-6 text-base font-bold text-gray-800"> 
        During kitchen renovations, most people will consider either installing new kitchen cabinets or doing kitchen
        cabinet refacing. If you’re on the fence about which one you should choose, you should learn about the benets
        of both.
        Here are the biggest benets associated with cabinet refacing:
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="pb-6 text-base font-bold text-gray-800">
      <p className="pb-6 text-base font-bold text-gray-800"> 
      As we mentioned earlier, the cost of cabinet refacing is typically going to be a whole lot lower than cabinet
      replacement. If you’re doing renovations in your kitchen and you’re on a tight budget, you might want to seriously
      consider going with cabinet refacing rather than replacing all your kitchen cabinets.
      But the total price that you’ll pay for cabinet refacing is going to depend on many factors. Some of these factors
      will include:
      </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="pb-6 text-base font-bold text-gray-800">
      <p className="pb-6 text-base font-bold text-gray-800"> 
      Some people will attempt to take the DIY approach to cabinet refacing. More often than not, this is going to end
      up being a mistake.
      Resurfacing kitchen cabinets won’t take professionals too long to do. They should be able to get in and out of your
      home within just a few days at most. It could take you, on the other hand, weeks and maybe even months to nish
      cabinet replacements.
      For this reason, you should hire a remodeling company with experience that specializes in cabinet refacing to lend
      you a hand. An experienced company will be able to assist
      </p>
      </CustomTabPanel>
    </>
      
    );
  }