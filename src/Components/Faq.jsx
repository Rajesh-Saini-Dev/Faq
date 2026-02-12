import { useState } from "react";
import { faqs } from "./faqData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-24">
      <h2 className="text-5xl font-bold my-10 text-center">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left text-[14px] md:text-lg px-4 py-3 flex justify-between items-center font-medium border border-gray-200 bg-gray-100`}
          >
            {faq.question}
            <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
          </button>

          <div
            className="px-4 pb-2 text-gray-600 text-sm md:text-lg overflow-hidden transition-all duration-500"
            style={{ maxHeight: openIndex === index ? "500px" : "0px" }}
          >
            <div className="pt-2">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FAQ;
