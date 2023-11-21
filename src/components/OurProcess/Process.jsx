import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";

const faqs = [
  {
    question: "Field Measuring and Project Evaluation",
    answer:
      "The first step in the process is to accurately measure your house and prepare plans and elevations that reflect existing conditions. We will research your zoning for setbacks and any other restrictions that may impact your project. If you live in a historic district or a neighborhood with an architectural review board, we will review those guidelines to ensure compliance before designing.",
  },
  {
    question: "Preliminary Conference",
    answer:
      "Once we have drawings of your own existing house and setback information, we will sit down for a thorough project discussion. This is the ideal time to bring photos and magazine clippings of projects or design ideas that you like. The project vision will start to take shape during this meeting.",
  },
  {
    question: "Preliminary Design and Budgeting",
    answer:
      "A few weeks after the initial conference, we will meet again and present you with 2-3 schemes that provide diferent approaches to the design solution. These schemes will be drawn in plan and elevation and will include preliminary cost estimates. Typically, one design will stand out as the favorite and will be refined until you are delighted. Before moving on to detailed construction documents, we will confirm that the project will meet your budget with a detailed cost analysis.",
  },
  {
    question: "Trade Day",
    answer: "To provide detailed and accurate pricing for your project, we set aside one day for all of our trade subcontractors to visit your house to review existing systems and site conditions. The electrician will evaluate your panel; the mechanical contractor will inspect your HVAC system, assessing expansion options, etc.After this “trade day,” each subcontractor will provide a detailed cost for his or her portion of the work. We will give multiple bids for some essential items such as windows to provide value options and ensure competitive numbers.",
  },
  {
    question: "Pricing",
    answer: "Our pricing is fully transparent and entirely open-book. This approach creates a team attitude and instills a trust level not typically found in the construction business. We assemble all the subcontractor's pricing and allowances into a spreadsheet that details and itemizes each cost. All pricing and associated costs are available for your review. Our wholesale contractor pricing is passed directly on to you. Once we have a confirmed project budget, we move forward with detailed construction documents.",
  },
  {
    question: "Construction Documents and Final Selections",
    answer:
      "The construction documents are the detailed drawings that include structural and electrical drawings and all of the construction material details required to build your project. Explore will coordinate with any consultants needed during this stage, including soil engineers, civil and structural engineers, and landscape architects. The completed drawings will satisfy all permit and bank lending requirements. While preparing these drawings, you will be out making your final selections for tile, hardwood, countertops, etc.",
  },
  {
    question: "Final Pricing and Construction Contract",
    answer: "After the Final drawings are complete, we will have our subcontractors review the plans one more time for any changes or items that may not have been included in the preliminary sketch. With this information, we will prepare the construction contract.",
  },
];

export const Process = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 px-8 pb-16">
      <Typography variant="h2" component="h2" className="mb-8 text-center !text-3xl font-bold text-black lg:!text-5xl">
      <h2 className="text-[2rem] text-red-main font-bold text-center ">ARCHITECTURAL DESIGN PROCESS</h2>
      </Typography>
      {faqs.map((item) => {
        return (
          <Accordion
            expanded={expanded === item.question}
            onChange={handleChange(item.question)}
            key={item.question}
            className="border-gray-light accordion-item cursor-pointer !rounded-md border-2 bg-white md:w-[70%]"
            component="a"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="!h-12 !w-12 !text-black" />}
              className="!my-4 h-[40px] !pl-4 !pr-3 sm:!pl-8 sm:!pr-6"
            >
              <Typography variant="h5" component="h5" className="!text-sm md:!text-lg">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="!pl-4 !pr-3 sm:!px-8 sm:!pb-6">
              <Typography variant="h6" component="p" className="!text-gray-dark !text-sm !font-medium md:!text-lg">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
