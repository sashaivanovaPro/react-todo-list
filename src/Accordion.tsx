import React from "react";

export function Accordion(props: any) {
  debugger;
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody rating={props.stars} />
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  debugger;
  console.log("Accordion Title rendering");
  return <h3>--{props.title}--</h3>;
}

type AccordionBodyPropsType = {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("Accordion Body rendering");
  return <h3>{props.rating}*</h3>;
}
