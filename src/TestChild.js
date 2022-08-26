import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallBack from "./CallBack";
import axios from "axios";
import Loading from "./Loading";
const TestChild = () => {
  const { id } = useParams();
  const [test, setTest] = useState();
  const [major, setMajor] = useState();
  const [renderApp, setRenderApp] = useState(false)
  const tests =
    [{
      "examName": "IELTS",
      "examText": "The International English Language Testing System (IELTS) is a test that measures the language proficiency of people who want to study or work in environments where English is used as a language of communication .The IELTS is a mandatory exam for Nepalese and other non-native English speakers, especially in the Commonwealth countries, for entry into most reputed universities and colleges overseas, and occasionally for immigration requirements as well. There are General and Academic trainings that provide a valid and accurate assessment of the language skills through listening reading writing and speaking."
      , "id": 1,
      "totalTime": "2 hours 45 minutes",
      "landingImage": ""
    },
    {
      "examName": "SAT",
      "examText": "The SAT is a standardized test owned and developed by the College Board for undergraduate admissions in US universities. It is administered by ETS on behalf of College Board. The test is designed to check if a student has the aptitude required for admissions and scholarships in the US universities. SAT gives an idea of how much have you learned from your high school and how well prepared are you for your higher education. The SAT takes more than just memorizing of word meanings and formulas; it is more about the intuition you have, how well have you been educated and how well can you think and make best choices using right information.",
      "examText2": [
        {
          "title": "EBRW and Reading",
          "examChildText": "Succeeding the SAT reading takes more than just knowing words and their meanings. Often it also requires your ability to eliminate the possible wrong answers.SAT Reading section is a part of the Evidence-Based Reading and Writing section and consists of multiple choice questions based on the passages provided. Occasionally, some passages are connected to other passages. These passages can sometimes have pictures, charts, graphs, and tables along.You will read a passage from classic or contemporary work of the US or world literature, one or a pair from US historical moments or speech for example, one from an educational stream such as psychology, sociology, economics and other social sciences, and two passages from science including Earth science, biology, chemistry or physics. This section tests your ability on understanding how words matter so much in shaping a writing and often on how informational graphics and the passage is connected with each other."
        }, {
          "title": "Writing and Language Test",
          "examChildText": "This section of the test requires you to be able to edit and improve the passages by finding and fixing the errors in the passage making it better. Therefore, you will be reading and then finding the mistakes or possible improvable parts of the passage and fix them. It is like finding mistakes in your friends’ essay and giving them suggestions to fix them. Again, the questions here are also multiple choice questions and based on the provided passages and possibly with images, graphs, tables, and charts. This section tests your ability on making a passage better from all possible angles. The ability is essential because, during your higher studies, you will be required to write lots of essay, projects and make presentations. The SAT test Writing and Language section give you an idea of where you stand in case of ability to make written items better, for instance, a final semester paper. In other words, this is an opportunity for you to show your language skill and knowledge required for university admission and scholarships."
        }, {
          "title": "Maths",
          "examChildText": `This section tests your ability to use mathematics that you mostly rely on in various situations. What you learned and how you learned in your school matters a lot in being good at this section. It is more than just remembering formulas. This section tests your ability on problem-solving and figuring out in a best possible way using most efficient and appropriate way. Most of the questions are multiple choice, while some questions require you to find the answer rather than selecting from given. There are two sections within: <ul><li>Math test- with Calculator option</li><li> Math test- No Calculator</li></ul>The Math test is focused on checking students’ ability in algebra including linear equations and systems, problem-solving and data analysis or quantitative literacy and ability in manipulating complex equations, along with some geometry and trigonometry skills.`
        }, {
          "title": "Essay",
          "examChildText": "In this section of the SAT, you will read, analyze and write just like you would in college writing tasks. Since US universities bachelor’s programs require you to do a lot of writings including projects and presentations in class, you definitely need to have a strong essay writing skill. This section tests your ability to read, analyze and understand a passage and how an author of the passage makes such writing and then finally with evidence from the given passage support your explanation ."
        }
      ],
      "id": 2,
      "totalTime": "3 hours"


    },
    {
      "examName": "PTE",
      "examText": " Pearson Test of English (PTE) Academic is an English language test to check candidates’ language proficiency by measuring their reading, writing, speaking and listening skills. The test can be completed in a single, two-hour session. It is accepted worldwide by over 3000 institutions. PTE is also accepted for all UK, Australia and New Zealand visa and immigration categories.",
      "id": 3,
      "totalTime": "2 hours 15 minutes"


    },
    {
      "examName": "GRE",
      "examText": "Graduate Record Examination is an admission and scholarship test. Traditionally, the GRE score has been a mandatory requirement for admission to Grad courses in science and humanities streams. Today, GRE scores are acceptable at MBA schools in the United States too. The test is prepared and administered by www.ets.org",
      "examText2": [
        {
          "title": "l RVerbaeasoning",
          "examChildText": "Measures the ability to analyze and draw conclusions from discourse, reason from incomplete data, understand multiple levels of meaning, such as literal, figurative and author’s intent, summarize text, distinguish major from minor points, understand the meanings of words, sentences and entire texts, and understand relationships among words and among concepts. <br/> It has 2 sections with 20 questions per section. You have 30 minutes per section."
        }, {
          "title": "Quantitative Reasoning",
          "examChildText": "Measures the ability to understand, interpret and analyze quantitative information, solve problems using mathematical models, and apply the basic concepts of arithmetic, algebra, geometry and data analysis. <br/> You have 2 sections with 20 questions per section. You have 35 minutes per section."
        }, {
          "title": "Analytical Reasoning",
          "examChildText": "Measures critical thinking and analytical writing skills, including the ability to articulate and support complex ideas with relevant reasons and examples, and examine claims and accompanying evidence. There is an emphasis on analytical writing skills. <br/> You have two questions; one ‘Analyze an Issue’ and one ‘Analyze and Argument with 30 minutes per task. <br/> GRE scores are valid for 5 years, but you will need to check with the program director of your university. <br/> For more information about the GRE, please visit the website https://www.ets.org/gre."
        }
      ],
      "id": 4,
      "totalTime": "~ 3 hours"
    }
    ]
  useEffect(() => {
    tests.map((test) => {
      if (Number(test.id) === Number(id)) {
        setTest(test)
        setRenderApp(true)
      }
    })
  }, [])
  return (
    <div className='main-container my-5'>
      <div className='container px-sm-5'>
        {!renderApp ? <Loading /> : (
          <div className='row justify-content-between'>
            {console.log(test.examName)}
            <div className='col-md-8 col-12'>
              <div className='d-flex'>
                <div className='color-container'></div>
                <div className='major-content-holder pt-5 pb-3'>
                  <div>
                    <h1 className='main-heading'>
                      {test.examName}
                    </h1>
                  </div>
                </div>
              </div>
              <div className='mt-4 ps-md-4'>
                <h3 className='major-sub-heading my-4'>
                  Why study in {test.examName}?
                </h3>
                <p className='subject-paragraph'>{test.examText}</p>
                <div className='mt-4 subject-image-container'>
                  <img
                    className='img-fluid'
                    src='../images/subject/masters-in-accounting-usa.jpeg'
                    alt=''
                  />
                </div>
                <p className='img-caption text-center mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  cupiditate?
                </p>
                <h3 className='major-sub-heading my-4'>
                  Whats inside {test.examName}?
                </h3>
                <p className='subject-paragraph'>{test.examText2.map((childText) => (
                  <>
                    <h5 className="fw-bold">{childText.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: `${childText.examChildText}` }} className="subject-paragraph mt-3"></p>
                  </>

                ))}</p>
                <div className='success-rate mt-5'>
                  <img
                    className='img-fluid'
                    src='../images/success.png'
                    alt=''
                  />
                </div>
                <div className='major-description-container'></div>
              </div>
            </div>
            <CallBack />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestChild;
