import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h>Why work with us?</h>

        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            title="We get years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Instead, we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
