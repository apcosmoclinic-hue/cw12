"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { TREATMENTS } from "@/data/treatments";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit() {
    // Simulated submission — connect to your backend/email service here.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-[var(--shadow-soft)] p-8">
      <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">Book an Appointment</h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">Fill in your details and our team will call you back to confirm a time.</p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-[var(--color-bg-light)] py-14 text-center"
        >
          <CheckCircle2 className="h-10 w-10 text-[var(--color-accent)]" />
          <p className="mt-4 font-semibold text-[var(--color-ink)]">Request received!</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">Our team will call you shortly to confirm your appointment.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">Full Name</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Please enter your name" })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-1.5 text-xs text-[var(--color-emergency)]">{errors.name.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">Phone Number</label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Please enter your phone number",
                  pattern: { value: /^[0-9+\s-]{10,15}$/, message: "Enter a valid phone number" },
                })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="mt-1.5 text-xs text-[var(--color-emergency)]">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">Email (Optional)</label>
              <input
                id="email"
                type="email"
                {...register("email", { pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" } })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1.5 text-xs text-[var(--color-emergency)]">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="treatment" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">Concern / Treatment</label>
            <select
              id="treatment"
              {...register("treatment", { required: "Please select a concern" })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all bg-white"
              defaultValue=""
            >
              <option value="" disabled>Select a concern</option>
              {TREATMENTS.map((t) => (
                <option key={t.slug} value={t.shortName}>{t.shortName}</option>
              ))}
              <option value="General Consultation">General Consultation</option>
            </select>
            {errors.treatment && <p className="mt-1.5 text-xs text-[var(--color-emergency)]">{errors.treatment.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">Message (Optional)</label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
              placeholder="Tell us a bit about your concern..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-clinic py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lifted)] transition-all disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send Appointment Request"}
          </button>
        </form>
      )}
    </div>
  );
}
