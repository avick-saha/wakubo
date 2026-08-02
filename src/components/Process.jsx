import { STEPS } from '../content';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>
            Three steps. <em>Two days.</em> No production meeting.
          </h2>
        </Reveal>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="step">
              <span className="step-n">{step.n}</span>
              <span className="step-when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
