import { useState } from "react";
import { Mail, Phone, Code2, Send, CheckCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import "./Contact.css";

const initialForm = {
  name: "",
  org: "",
  email: "",
  phone: "",
  requirement: "",
  mode: "Offline",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Training Requirement — ${form.org || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nInstitution / Organization: ${form.org}\nEmail: ${form.email}\nPhone: ${form.phone}\nTraining Requirement: ${form.requirement}\nPreferred Mode: ${form.mode}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact__grid">
        <Reveal>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">Looking for a Technical Trainer?</h2>
          <p className="section-sub">
            Let&rsquo;s discuss your institution&rsquo;s training requirements and design a program
            that fits your students, faculty, or organization.
          </p>

          <div className="contact__info">
            <a className="contact__row" href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
            <a className="contact__row" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <Phone size={17} /> {profile.phone}
            </a>
            <a className="contact__row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={17} /> LinkedIn Profile
            </a>
            <a className="contact__row" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon size={17} /> GitHub Profile
            </a>
            <a className="contact__row" href={profile.leetcode} target="_blank" rel="noreferrer">
              <Code2 size={17} /> LeetCode Profile
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card contact__form-card">
          {sent ? (
            <div className="contact__sent">
              <CheckCircle size={28} color="var(--gold-500)" />
              <p>Your email app should now be open with the details filled in — just hit send.</p>
              <button className="btn btn-outline" onClick={() => { setSent(false); setForm(initialForm); }}>
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__field-row">
                <label className="contact__field">
                  <span>Name</span>
                  <input required value={form.name} onChange={update("name")} placeholder="Your full name" />
                </label>
                <label className="contact__field">
                  <span>Institution / Organization</span>
                  <input value={form.org} onChange={update("org")} placeholder="College or company name" />
                </label>
              </div>
              <div className="contact__field-row">
                <label className="contact__field">
                  <span>Email</span>
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
                </label>
                <label className="contact__field">
                  <span>Phone</span>
                  <input value={form.phone} onChange={update("phone")} placeholder="+91" />
                </label>
              </div>
              <label className="contact__field">
                <span>Training Requirement</span>
                <input value={form.requirement} onChange={update("requirement")} placeholder="e.g. Placement Readiness Program" />
              </label>
              <label className="contact__field">
                <span>Preferred Mode</span>
                <select value={form.mode} onChange={update("mode")}>
                  <option>Offline</option>
                  <option>Online</option>
                  <option>Hybrid</option>
                </select>
              </label>
              <label className="contact__field">
                <span>Message</span>
                <textarea rows={4} value={form.message} onChange={update("message")} placeholder="Tell me about your batch size, timeline, and goals" />
              </label>
              <button type="submit" className="btn btn-gold contact__submit">
                Request Training <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
