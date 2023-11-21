import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";

const faqs = [
  {
    question: "Permitting",
    answer:
      "Explore will coordinate and manage the entire permit submission process for you. This includes presenting to architectural review boards and processing any required variances. Once all permits are issued, we are ready to start construction!",
  },
  {
    question: "Pre-Construction Meeting",
    answer:
      "You will be assigned a project manager responsible for the construction of your project. During this meeting, your project manager will review expectations and systems for construction.We will address work hours, material storage, forms, and any of your particular needs or concerns. The project manager will provide a master schedule and inform you of any deadlines requiring your feedback, such as selecting lighting fixtures or paint colors. You will be given complete access to your project manager, including email and cell phone number, deciding the best communication means moving forward. You will also agree on a time for a weekly meeting at the job site.",
  },
  {
    question: "Construction Meetings",
    answer:
      "You will meet weekly with your project manager. During these meetings, you will review progress, sign work authorizations to approve selections or changes, and check a schedule for the next two weeks. This detailed two-week schedule will allow you to anticipate decisions and activities that will be ccurring on site. As needed, the architect will attend the meeting to address any design issues and or questions.",
  },
  {
    question: "Construction",
    answer: "During construction, we treat your home as if it was our own. We post job site rules that prohibit smoking and profanity. Most importantly, we select subcontractors who are experts. They understand the importance of minimizing their impact on your life and are respectful of the fact that you are allowing them into your home.",
  },
  {
    question: "Final Inspections and Punch List",
    answer: "When construction is complete, we will arrange all final inspections  with the county. After you have settled in, we will schedule a meeting to walk the project and generate a punch list  of any items that might need attention. The plan is typically relatively small and reflects our attention to detail, quality control, and management oversight. Final payment is due when the punch list is complete.",
  },
  {
    question: "Systems Orientation",
    answer:
      "Upon completion of construction, your project manager will provide all  documentation and warranty information for the products and systems installed in your home. We will walk you  through the operation of your heating and air conditioning, show you the location of the hose bib shut-offs and review any necessary maintenance procedures.",
  },
  {
    question: "A full one-year warranty covers warranty",
    answer: "Your Explore project. After many months of acclimating, nail pops and other items may need attention. We will come out near the end of the one year and repair any of these items. Of course, as any of our past clients will attest, Explore is just a phone call away to help with any issues that may arise in the future.",
  },
];

export const Process2 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 px-8 pb-16">
      <Typography variant="h2" component="h2" className="mb-8 text-center !text-3xl font-bold text-black lg:!text-5xl">
      <h2 className="text-[2rem] text-red-main font-bold text-center ">EXPLORE CONSTRUCTION PROCESS</h2>
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