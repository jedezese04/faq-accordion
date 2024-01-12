'use client';

import { AccordionItem, Accordion as NextUIAccordion } from "@nextui-org/react";

interface Props {
    data: Array<{title: string, content: string}>
}

const Accordion = ({ data }: Props) => {
  return (
    <NextUIAccordion>
      {data.map((item, index) => (
          <AccordionItem className="max-w-96" key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </NextUIAccordion>
  )
}

export default Accordion