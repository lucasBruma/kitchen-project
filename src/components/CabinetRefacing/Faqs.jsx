import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";

const faqs = [
  {
    question: "What is cabinet refacing?",
    answer:
      "Cabinet refacing involves replacing the doors, drawer fronts, and hardware of your existing cabinets while applying a new veneer or laminate to the existing cabinet boxes.",
  },
  {
    question: "Why consider cabinet refacing instead of a full cabinet replacement?",
    answer:
      "Refacing can be more cost-effective than full cabinet replacement, it's less intrusive, and the process usually takes less time. It's also more environmentally friendly as less waste is generated.",
  },
  {
    question: "How long does the refacing process take?",
    answer:
      "Typically, the refacing process can be completed in 2-5 days, depending on the size and complexity of the project.",
  },
  {
    question: "Will my kitchen be usable during the refacing process?",
    answer: "Yes, your kitchen will remain functional. However, there might be brief intervals when access is limited.",
  },
  {
    question: "Can I change the color or style of my cabinets with refacing?",
    answer: "Absolutely. Refacing allows you to choose a new color, style, and even hardware for your cabinets.",
  },
  {
    question: "How durable is the new veneer or laminate?",
    answer:
      "High-quality veneers and laminates are designed to be long-lasting and durable, often withstanding daily kitchen activities for many years.",
  },
  {
    question: "Is cabinet refacing cheaper than replacing the cabinets?",
    answer: "In most cases, yes. Refacing typically costs 40-50% less than a full cabinet replacement.",
  },
  {
    question: "Can all cabinets be refaced?",
    answer:
      "While many cabinets can be refaced, cabinets that are severely damaged or have structural issues might not be suitable for refacing and may require replacement.",
  },
  {
    question: "How do I care for my refaced cabinets?",
    answer:
      "Just like any other cabinet, use a mild soap and water solution to clean. Avoid using harsh chemicals or abrasive pads.",
  },
  {
    question: "Can I reface cabinets in other rooms besides the kitchen?",
    answer: "Yes, cabinet refacing can be done in bathrooms, laundry rooms, or any other space with cabinetry.",
  },
  {
    question: "What about my countertops, will they be affected?",
    answer:
      "Refacing typically doesn't affect countertops. However, if you're considering replacing them, it's best to discuss the order of operations with your contractor.",
  },
  {
    question: "Can I add new cabinets or features during the refacing process?",
    answer:
      "Yes, many homeowners choose to add additional cabinets, pull-out shelves, or other features while refacing.",
  },
  {
    question: "Is there a warranty for cabinet refacing?",
    answer:
      "Warranties vary by contractor and materials used. Always ask about the warranty options available for your project.",
  },
];

export const Faqs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 px-8 pb-16">
      <Typography variant="h2" component="h2" className="mb-8 text-center !text-3xl font-bold text-black lg:!text-5xl">
        Cabinet Refacing FAQs
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
