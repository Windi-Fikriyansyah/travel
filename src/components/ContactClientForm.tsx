'use client';

import React, { useState } from 'react';

export default function ContactClientForm({ contactDict }: { contactDict: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: contactDict.opt1 || 'Custom Itinerary Design',
    message: '',
    formType: 'contact',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyHMn13hkth06h5-Dy2yIfQeHpg6dEzDtU5qK382tEGXUih_ojLTUBkjBQCO5GuaABocw/exec";
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      alert("Thank you! Your message has been successfully sent.");
      setFormData({
        name: '',
        email: '',
        interest: contactDict.opt1 || 'Custom Itinerary Design',
        message: '',
        formType: 'contact',
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong while sending your message. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="font-headline-lg text-headline-lg mb-12">{contactDict.formTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="flex flex-col group">
            <label className="font-label-md text-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{contactDict.labelName}</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-underline font-body-md text-on-surface bg-transparent outline-none py-2"
              placeholder={contactDict.placeholderName}
              type="text"
            />
          </div>
          <div className="flex flex-col group">
            <label className="font-label-md text-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{contactDict.labelEmail}</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-underline font-body-md text-on-surface bg-transparent outline-none py-2"
              placeholder={contactDict.placeholderEmail}
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-col group">
          <label className="font-label-md text-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{contactDict.labelInterest}</label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="form-underline font-body-md text-on-surface appearance-none bg-transparent outline-none py-2 cursor-pointer"
          >
            <option value={contactDict.opt1}>{contactDict.opt1}</option>
            <option value={contactDict.opt2}>{contactDict.opt2}</option>
            <option value={contactDict.opt3}>{contactDict.opt3}</option>
            <option value={contactDict.opt4}>{contactDict.opt4}</option>
          </select>
        </div>
        <div className="flex flex-col group">
          <label className="font-label-md text-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{contactDict.labelMessage}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-underline font-body-md text-on-surface resize-none bg-transparent outline-none py-2"
            placeholder={contactDict.placeholderMessage}
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative px-10 py-4 border border-secondary text-primary font-label-lg transition-all hover:bg-primary/5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "SENDING..." : contactDict.sendBtn}
          {!isSubmitting && (
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300 material-symbols-outlined">arrow_right_alt</span>
          )}
        </button>
      </form>
    </div>
  );
}
