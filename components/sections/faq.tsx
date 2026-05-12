import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/content/site";

export function Faq() {
  const { faq } = siteContent;

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">{faq.eyebrow}</span>
            <h2 className="section-title mt-5">
              {faq.titleLine1}
              <br />
              {faq.titleLine2}
            </h2>
            <div className="divider mt-7" />
            <p className="lead mt-7">{faq.description}</p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faq.list.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-brand-accent">
                        Q.0{i + 1}
                      </span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pl-9">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
