import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <section className="container">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Any Questions? Look Here
        </h2>
        <p>Frequently asked questions</p>
      </div>
      <div className="">
        <Accordion
          type="single"
          collapsible
          className="w-full grid md:grid-cols-2 gap-4 lg:gap-6 text-primary"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Do you make deliveries outside Ghana?
            </AccordionTrigger>
            <AccordionContent>
              No, we only deliver within Ghana at the moment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
