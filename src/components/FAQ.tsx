import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { ref: headerRef, isVisible: headerVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal<HTMLDivElement>();

  const getStaggerStyle = (index: number, isVisible: boolean, baseDelay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms`,
        };

  const faqs = [
    {
      question: "What are the requirements to apply for a loan?",
      answer: "To apply for a loan, you need: a valid Ghana Card or Voter ID, proof of business or employment, a guarantor (for some loan types), and to be at least 18 years old. We also require you to have been in business for at least 3 months for business loans.",
    },
    {
      question: "How much can I borrow?",
      answer: "Our loan amounts range from GHC 1,000 to GHC 20,000, depending on your business profile, repayment capacity, and loan history with us. First-time borrowers typically start with lower amounts and can access higher amounts as they build a good repayment track record.",
    },
    {
      question: "What are your interest rates?",
      answer: "We offer competitive rates of 7% for weekly repayment plans and 10% for monthly repayment plans. There are no hidden charges – we believe in complete transparency with our clients.",
    },
    {
      question: "How long does loan approval take?",
      answer: "Our loan approval process takes 48-72 hours from the time you submit all required documents. We understand that time is money for your business, so we work efficiently to get you funded quickly.",
    },
    {
      question: "What repayment options do you offer?",
      answer: "We offer flexible repayment options to suit your cash flow: Daily, Weekly, Bi-Weekly, and Monthly payments. Loan durations range from 1 to 6 months. You can choose the option that best matches your income pattern.",
    },
    {
      question: "Do I need collateral to get a loan?",
      answer: "Most of our loans don't require collateral. However, for larger loan amounts or certain risk profiles, we may request collateral such as electronics, appliances, or other valuable items. Your business potential is your primary guarantee.",
    },
    {
      question: "What happens if I can't make a payment on time?",
      answer: "We understand that unexpected situations can arise. If you're having difficulty making a payment, please contact us immediately. We can discuss restructuring options or payment plans. Communication is key – we're here to support you, not penalize you.",
    },
    {
      question: "Can I repay my loan early?",
      answer: "Yes! We encourage early repayment and there are no penalties for paying off your loan ahead of schedule. Early repayment can also help you qualify for larger loan amounts in the future.",
    },
    {
      question: "How do I apply for a loan?",
      answer: "You can apply by visiting our office at Teshie Fertilizer Road, Accra, or by contacting us through our website. Bring your valid ID, business documents, and be ready to discuss your loan needs. Our friendly team will guide you through the entire process.",
    },
    {
      question: "What types of businesses do you support?",
      answer: "We support a wide range of businesses including market traders, shop owners, taxi and trotro drivers, artisans, food vendors, hairdressers, tailors, and small-scale manufacturers. If you have a legitimate business, we want to hear from you!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <span style={getStaggerStyle(0, headerVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">
            Got Questions?
          </span>
          <h2 style={getStaggerStyle(1, headerVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p style={getStaggerStyle(2, headerVisible)} className="text-muted-foreground text-lg">
            Find answers to common questions about our loan products, requirements, and application process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={faqRef} style={getStaggerStyle(0, faqVisible, 200)} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;