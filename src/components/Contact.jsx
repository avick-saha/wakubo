import { useState } from 'react';
import { PROMISE, SERVICES } from '../content';
import mailtoFor from '../mailto';

const EMPTY = { service: SERVICES[0].id, brand: '', email: '', volume: '', note: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  /* No backend yet — the form drafts the enquiry and hands it to the
     visitor's mail client, so nothing written here is ever lost. */
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoFor(form.service, form);
    setSent(true);
  };

  return (
    <section id="start" className="start">
      <div className="wrap start-inner">
        <div className="start-copy">
          <p className="eyebrow">Start here</p>
          <h2>
            Send one garment. <em>We will shoot it free.</em>
          </h2>
          <p>
            Pick the piece you think is hardest to photograph — the black one,
            the shiny one, the one with the print that never comes out right.
            You get the finished look back within {PROMISE.firstProofIn}, with
            no card on file and nothing to cancel.
          </p>

          <dl className="start-facts">
            <div>
              <dt>First look</dt>
              <dd>Free, within {PROMISE.firstProofIn}</dd>
            </div>
            <div>
              <dt>Full set</dt>
              <dd>{PROMISE.turnaround} from approval</dd>
            </div>
            <div>
              <dt>Revisions</dt>
              <dd>{PROMISE.revisions}, at no cost</dd>
            </div>
            <div>
              <dt>Commitment</dt>
              <dd>None — no card, no contract</dd>
            </div>
          </dl>
        </div>

        <form className="start-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="service">What do you need?</label>
            <select id="service" value={form.service} onChange={set('service')}>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="brand">Brand name</label>
            <input id="brand" required value={form.brand} onChange={set('brand')} placeholder="Your label" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={set('email')}
              placeholder="you@yourbrand.com"
            />
          </div>

          <div className="field">
            <label htmlFor="volume">Pieces this season</label>
            <select id="volume" value={form.volume} onChange={set('volume')}>
              <option value="">Select a range</option>
              <option>Under 25</option>
              <option>25 – 100</option>
              <option>100 – 300</option>
              <option>300+</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="note">What are we shooting?</label>
            <textarea
              id="note"
              rows="4"
              value={form.note}
              onChange={set('note')}
              placeholder="Category, deadline, store link — anything that helps."
            />
          </div>

          <button type="submit" className="btn btn-solid btn-wide">
            Send the brief
          </button>

          {sent && (
            <p className="form-note" role="status">
              Your mail app should be opening with the message already written.
              Read it over, add anything we missed, and hit send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
