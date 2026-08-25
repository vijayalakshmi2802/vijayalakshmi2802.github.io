import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  Mail,
  Phone,
  Code2,
  Send,
  CheckCircle,
} from "lucide-react";

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
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const update = (key) => (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Clear the error when the user starts correcting the field
    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // =========================
    // NAME VALIDATION
    // =========================

    const name = form.name.trim();

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only letters and spaces.";
    }

    // =========================
    // ORGANIZATION VALIDATION
    // =========================

    const org = form.org.trim();

    if (!org) {
      newErrors.org = "Institution / Organization is required.";
    } else if (org.length < 2) {
      newErrors.org =
        "Please enter a valid institution or organization name.";
    }

    // =========================
    // EMAIL VALIDATION
    // =========================

    const email = form.email.trim().toLowerCase();

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid Gmail address ending with @gmail.com.";
    }

    // =========================
    // PHONE VALIDATION
    // =========================

    const phone = form.phone.trim();

    // Remove spaces and hyphens
    let cleanPhone = phone.replace(/[\s-]/g, "");

    // Remove +91 or 91 from beginning
    if (cleanPhone.startsWith("+91")) {
      cleanPhone = cleanPhone.substring(3);
    } else if (cleanPhone.startsWith("91") && cleanPhone.length === 12) {
      cleanPhone = cleanPhone.substring(2);
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    // =========================
    // TRAINING REQUIREMENT
    // =========================

    const requirement = form.requirement.trim();

    if (!requirement) {
      newErrors.requirement = "Training requirement is required.";
    } else if (requirement.length < 3) {
      newErrors.requirement =
        "Please enter a valid training requirement.";
    }

    // =========================
    // MODE VALIDATION
    // =========================

    if (!form.mode) {
      newErrors.mode = "Please select a preferred mode.";
    }

    // =========================
    // MESSAGE VALIDATION
    // =========================

    const message = form.message.trim();

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // SUBMIT FORM
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before sending
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setSending(true);

    try {
      const response = await emailjs.send(
        "service_olv4wtp",
        "template_ehf548l",
        {
          name: form.name.trim(),
          org: form.org.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          requirement: form.requirement.trim(),
          mode: form.mode,
          message: form.message.trim(),
        },
        "Ko-DamvfXwNuQsYzN"
      );

      console.log(
        "Email sent successfully:",
        response.status,
        response.text
      );

      setSent(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("FULL EMAILJS ERROR:", error);
      console.error("STATUS:", error.status);
      console.error("TEXT:", error.text);
      console.error("MESSAGE:", error.message);

      alert(
        `EmailJS Error\n\nStatus: ${
          error.status || "Unknown"
        }\nMessage: ${
          error.text || error.message || "Unable to send the request."
        }`
      );
    } finally {
      setSending(false);
    }
  };

  // =========================
  // RESET FORM
  // =========================

  const handleSendAnother = () => {
    setSent(false);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact__grid">

        {/* =========================
            CONTACT INFORMATION
        ========================== */}

        <Reveal>
          <div className="eyebrow">
            Contact
          </div>

          <h2 className="section-title">
            Looking for a Technical Trainer?
          </h2>

          <p className="section-sub">
            Let&rsquo;s discuss your institution&rsquo;s training
            requirements and design a program that fits your
            students, faculty, or organization.
          </p>

          <div className="contact__info">

            {/* EMAIL */}

            <a
              className="contact__row"
              href={`mailto:${profile.email}`}
            >
              <Mail size={17} />
              {profile.email}
            </a>

            {/* PHONE */}

            <a
              className="contact__row"
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            >
              <Phone size={17} />
              {profile.phone}
            </a>

            {/* LINKEDIN */}

            <a
              className="contact__row"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={17} />
              LinkedIn Profile
            </a>

            {/* GITHUB */}

            <a
              className="contact__row"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={17} />
              GitHub Profile
            </a>

            {/* LEETCODE */}

            <a
              className="contact__row"
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
              LeetCode Profile
            </a>

          </div>
        </Reveal>

        {/* =========================
            CONTACT FORM
        ========================== */}

        <Reveal
          delay={0.1}
          className="card contact__form-card"
        >

          {sent ? (

            /* =========================
               SUCCESS MESSAGE
            ========================== */

            <div className="contact__sent">

              <CheckCircle
                size={28}
                color="var(--gold-500)"
              />

              <p>
                Your training request has been sent
                successfully. I&rsquo;ll get back to you soon.
              </p>

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleSendAnother}
              >
                Send another request
              </button>

            </div>

          ) : (

            /* =========================
               FORM
            ========================== */

            <form
              onSubmit={handleSubmit}
              className="contact__form"
              noValidate
            >

              {/* =========================
                  NAME + ORGANIZATION
              ========================== */}

              <div className="contact__field-row">

                {/* NAME */}

                <label className="contact__field">
                  <span>
                    Name <strong>*</strong>
                  </span>

                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    maxLength={50}
                  />

                  {errors.name && (
                    <small className="contact__error">
                      {errors.name}
                    </small>
                  )}
                </label>

                {/* ORGANIZATION */}

                <label className="contact__field">
                  <span>
                    Institution / Organization <strong>*</strong>
                  </span>

                  <input
                    required
                    type="text"
                    value={form.org}
                    onChange={update("org")}
                    placeholder="College or company name"
                    maxLength={100}
                  />

                  {errors.org && (
                    <small className="contact__error">
                      {errors.org}
                    </small>
                  )}
                </label>

              </div>

              {/* =========================
                  EMAIL + PHONE
              ========================== */}

              <div className="contact__field-row">

                {/* EMAIL */}

                <label className="contact__field">
                  <span>
                    Email <strong>*</strong>
                  </span>

                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@gmail.com"
                    maxLength={100}
                  />

                  {errors.email && (
                    <small className="contact__error">
                      {errors.email}
                    </small>
                  )}
                </label>

                {/* PHONE */}

                <label className="contact__field">
                  <span>
                    Phone <strong>*</strong>
                  </span>

                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 9344045676"
                    maxLength={16}
                  />

                  {errors.phone && (
                    <small className="contact__error">
                      {errors.phone}
                    </small>
                  )}
                </label>

              </div>

              {/* =========================
                  TRAINING REQUIREMENT
              ========================== */}

              <label className="contact__field">

                <span>
                  Training Requirement <strong>*</strong>
                </span>

                <input
                  required
                  type="text"
                  value={form.requirement}
                  onChange={update("requirement")}
                  placeholder="e.g. Placement Readiness Program"
                  maxLength={150}
                />

                {errors.requirement && (
                  <small className="contact__error">
                    {errors.requirement}
                  </small>
                )}

              </label>

              {/* =========================
                  PREFERRED MODE
              ========================== */}

              <label className="contact__field">

                <span>
                  Preferred Mode <strong>*</strong>
                </span>

                <select
                  required
                  value={form.mode}
                  onChange={update("mode")}
                >
                  <option value="Offline">
                    Offline
                  </option>

                  <option value="Online">
                    Online
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>
                </select>

                {errors.mode && (
                  <small className="contact__error">
                    {errors.mode}
                  </small>
                )}

              </label>

              {/* =========================
                  MESSAGE
              ========================== */}

              <label className="contact__field">

                <span>
                  Message <strong>*</strong>
                </span>

                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your batch size, timeline, and goals"
                  maxLength={1000}
                />

                {errors.message && (
                  <small className="contact__error">
                    {errors.message}
                  </small>
                )}

              </label>

              {/* =========================
                  SUBMIT BUTTON
              ========================== */}

              <button
                type="submit"
                className="btn btn-gold contact__submit"
                disabled={sending}
              >

                {sending ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Request Training
                    <Send size={15} />
                  </>
                )}

              </button>

            </form>
          )}

        </Reveal>

      </div>
    </section>
  );
}