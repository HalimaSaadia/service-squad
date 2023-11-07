import React, { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SectionHeading from "../../../shared/SectionHeading";
import { FadeLoader } from "react-spinners";

const FrequentlyAskedQuestion = () => {
  const [Faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/api/v1/faq").then((res) => {
      console.log(res.data);
      setFaqs(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex  justify-center">
        <FadeLoader
          loading={true}
          size={150}
          color="#3F51B5"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div className="mb-10">
      <SectionHeading text="FAQ" />

      <Accordion allowZeroExpanded>
        {Faqs.map((faq) => (
          <AccordionItem key={faq._id}>
            <AccordionItemHeading>
              <AccordionItemButton>{faq.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{faq.answer}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentlyAskedQuestion;
