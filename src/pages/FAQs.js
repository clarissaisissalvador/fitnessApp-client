import { Accordion, Container } from 'react-bootstrap';
import '../index.css'; // or your custom CSS path

export default function FAQsPage() {
  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="text-center text-white mb-4 fw-bold pt-5 mt-3">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" className="faq-accordion">

          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I start a workout session?</Accordion.Header>
            <Accordion.Body>
              Simply go to the "Workouts" section, choose a plan or create your own, and hit “Start Session” to begin tracking.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I customize my workout plans?</Accordion.Header>
            <Accordion.Body>
              Yes! StayFit allows full customization. You can adjust sets, reps, rest times, and even add your own exercises.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Do I need an internet connection?</Accordion.Header>
            <Accordion.Body>
              You can log workouts offline. Your data will sync once you're back online.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Is StayFit free to use?</Accordion.Header>
            <Accordion.Body>
              Yes! The core features are free. We offer premium plans for advanced analytics and coaching tools.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I track my progress?</Accordion.Header>
            <Accordion.Body>
              StayFit automatically logs your stats and visualizes your growth through progress charts and weekly summaries.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </section>
  );
}
