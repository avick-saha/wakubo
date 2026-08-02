import { PLANS, VERSUS } from '../content';
import Reveal from './Reveal';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="wrap">
        <Reveal className="section-head text-center">
          <p className="eyebrow">Pricing</p>
          <h2>
            A studio day costs more than <em>a year</em> of this.
          </h2>
          <p>
            One flat monthly fee. No setup charge, no per-image surprises, no
            minimum term. Cancel the month you stop shooting.
          </p>
        </Reveal>

        <div className="plans">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 80}
              className={`plan${plan.popular ? ' popular' : ''}`}
            >
              {plan.popular && <span className="plan-flag">Most brands start here</span>}

              <h3>{plan.name}</h3>
              <p className="plan-tag">{plan.tagline}</p>

              <p className="plan-price">
                <span className="cur">$</span>
                {plan.price}
                <span className="per">/month</span>
              </p>
              <p className="plan-look">
                works out to <b>{plan.perLook}</b> a finished look
              </p>

              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a href="#start" className={`btn${plan.popular ? ' btn-solid' : ''}`}>
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="versus">
          <h3>The same collection, the old way</h3>
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Measure</span>
                </th>
                <th scope="col">Traditional shoot</th>
                <th scope="col" className="col-us">
                  Wakubo
                </th>
              </tr>
            </thead>
            <tbody>
              {VERSUS.map((row) => (
                <tr key={row.metric}>
                  <th scope="row">{row.metric}</th>
                  <td className="old">{row.traditional}</td>
                  <td className="us">{row.wakubo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="versus-note">
            Traditional figures are typical market rates for a full-day studio
            shoot with a model, photographer and retoucher. Yours may differ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
