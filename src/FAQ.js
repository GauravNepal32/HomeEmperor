import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
    return (
        <div
        // Custom call name to set faq open or not
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            // On click send toogle index to change faq state
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>

        </div>
    )
}

export default FAQ;
