import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import vector from "@/public/Vector-how.png";
export default function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 ml-2">
          <span className="relative">
            {" "}
            <Image
              src={vector}
              alt="vector"
              className="absolute -top-1 right-2 "
              width={70}
            />
            F
          </span>
          requently asked Question&#39;s
        </h2>
      </div>

      <Accordion type="single" collapsible className="border rounded-lg">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="px-4 py-4 text-left font-medium text-gray-800 hover:no-underline">
            Can you help me with my homework in less than 24 hours?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-0 text-gray-600">
            Our name 24HourAnswers means you can submit work 24 hours a day - it
            doesn&#39;t mean we can help you master what you need to know in 24
            hours. If you make arrangements in advance, and if you are a very
            fast learner, then yes, we may be able to help you achieve your
            goals in 24 hours. Remember: high quality, customized help
            that&#39;s tailored around the needs of each individual student
            takes time to achieve. You deserve nothing less than the best, so
            give us the time we need to give you the best.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="px-4 py-4 text-left font-medium text-gray-800 hover:no-underline">
            Can you help me with my exam/quiz/test?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-0 text-gray-600">
            We provide study assistance and tutoring to help you prepare for
            exams, quizzes, and tests. Our tutors can help you understand
            concepts and practice problems similar to what you might encounter.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="px-4 py-4 text-left font-medium text-gray-800 hover:no-underline">
            How much will it cost?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-0 text-gray-600">
            Our pricing varies depending on the subject, complexity, and
            timeframe of your request. We offer competitive rates and strive to
            provide excellent value for the quality of assistance we provide.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="px-4 py-4 text-left font-medium text-gray-800 hover:no-underline">
            What kind of payments do you accept?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-0 text-gray-600">
            We accept major credit cards, debit cards, and digital payment
            methods. All transactions are secure and encrypted to protect your
            financial information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
