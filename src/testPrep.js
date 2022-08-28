import React from "react";
import examStudent from "./images/test/testStudent.png";
import TestList from "./TestList";
import { Helmet } from "react-helmet";

const TestPrep = () => {
  // Add manual data for the all the test
  const test=
  [{
        "examName":"IELTS",
        "examText": "The International English Language Testing System (IELTS) is a test that measures the language proficiency of people who want to study or work in environments where English is used as a language of communication .The IELTS is a mandatory exam for Nepalese and other non-native English speakers, especially in the Commonwealth countries, for entry into most reputed universities and colleges overseas, and occasionally for immigration requirements as well. There are General and Academic trainings that provide a valid and accurate assessment of the language skills through listening reading writing and speaking."
        ,"id":1,
        "totalTime":"2 hours 45 minutes",
        "landingImage":""
    },
    {
        "examName":"SAT",
        "examText": "The SAT is a standardized test owned and developed by the College Board for undergraduate admissions in US universities. It is administered by ETS on behalf of College Board. The test is designed to check if a student has the aptitude required for admissions and scholarships in the US universities. SAT gives an idea of how much have you learned from your high school and how well prepared are you for your higher education. The SAT takes more than just memorizing of word meanings and formulas; it is more about the intuition you have, how well have you been educated and how well can you think and make best choices using right information."
        ,"id":2,
        "totalTime":"3 hours"


    },
    {
        "examName":"PTE",
        "examText": " Pearson Test of English (PTE) Academic is an English language test to check candidates’ language proficiency by measuring their reading, writing, speaking and listening skills. The test can be completed in a single, two-hour session. It is accepted worldwide by over 3000 institutions. PTE is also accepted for all UK, Australia and New Zealand visa and immigration categories.",
        "id":3,
        "totalTime":"2 hours 15 minutes"


    },
    {
        "examName":"GRE",
        "examText":"Graduate Record Examination is an admission and scholarship test. Traditionally, the GRE score has been a mandatory requirement for admission to Grad courses in science and humanities streams. Today, GRE scores are acceptable at MBA schools in the United States too. The test is prepared and administered by www.ets.org.Thousands of Graduate and Professional schools (Universities and Colleges) including Business and Law accept GRE worldwide for admission and financial aid (Assistantships/Fellowships). The GRE General Test helps universities compare candidates' qualifications as a common measure as many applicants from diverse academic backgrounds apply for the program. The GRE questions are expected to closely reflect the kind of thinking you'll do in your graduate program.",
        "id":4,
        "totalTime":"~ 3 hours"



    }
    ]

  return (
    <div class='main-container px-0'>
    <Helmet>
      {/* Adding title for the page */}
      <title>Test Preparation | Emperor</title>
    </Helmet>
      <div class='mt-5 px-0'>
        {/* landing page for the test */}
        <div class='test-landing-container px-0 mb-200'>
          <div class='container px-md-0 px-2'>
            <div className='container px-md-5 px-2  p-0'>
              <div class='row row-cols-md-2 row-cols-1'>
                <div class='col d-md-block d-none test-landing-image order-1'>
                  <img src={examStudent} class='img-fluid' alt='' srcset='' />
                </div>
                <div class='col test-landing-text order-0'>
                  <div class='h-100 d-flex flex-column justify-content-center align-content-center'>
                    <h1 class=' test-main-heading'>
                      Test <br /> Preparation
                    </h1>
                    <div class='d-md-none d-block test-landing-image'>
                      <img
                        src={examStudent}
                        class='img-fluid'
                        alt=''
                        srcset=''
                      />
                    </div>
                    <p class='info-paragraph landing-text-paragraph pb-5 mt-5'>
                    Exams like IELTS, TOEFL, PTE,  GRE and SAT are considered parameters to judge students’ eligibility for admission to the specific universities and colleges and to qualify for financial assistance for higher studies abroad. Many reputed universities across United Kingdom, USA, Australia and other countries recognize some or many of these tests. The scores in these exams may also define the students’ eligibility for visas and scholarships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Calling test list to display test list */}
        <div class='tests-type-container mt-5'>
          {test && <TestList test={test} />}
        </div>
      </div>
    </div>
  );
};

export default TestPrep;
