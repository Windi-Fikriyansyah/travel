"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
  arrivalDate: string;
  departureDate: string;
  travelers: string;
  accommodation: string;
  experiences: string[];
  destinations: string[];
  services: string[];
  vehicle: string;
  budget: string;
  fullName: string;
  nationality: string;
  email: string;
  whatsapp: string;
  specialRequests: string;
};

const initialFormData: FormData = {
  arrivalDate: '',
  departureDate: '',
  travelers: '',
  accommodation: '',
  experiences: [],
  destinations: [],
  services: [],
  vehicle: '',
  budget: '',
  fullName: '',
  nationality: '',
  email: '',
  whatsapp: '',
  specialRequests: '',
};

export default function CustomizeTripForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const router = useRouter();

  const handleNext = () => setStep((s) => Math.min(s + 1, 5));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (category: 'experiences' | 'destinations' | 'services', value: string) => {
    setFormData((prev) => {
      const list = prev[category];
      if (list.includes(value)) {
        return { ...prev, [category]: list.filter((item) => item !== value) };
      } else {
        return { ...prev, [category]: [...list, value] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your personalized itinerary request has been submitted.");
    router.push('/');
  };

  return (
    <div className="max-w-4xl mx-auto bg-surface p-8 md:p-12 shadow-sm rounded-2xl border border-outline-variant/30">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`flex flex-col items-center flex-1 ${i < 5 ? 'relative' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-label-lg z-10 transition-colors duration-300 ${step >= i ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                {i}
              </div>
              <span className={`text-xs mt-2 font-label-md hidden md:block text-center ${step >= i ? 'text-primary' : 'text-on-surface-variant'}`}>
                {i === 1 && "About Trip"}
                {i === 2 && "Experiences"}
                {i === 3 && "Places"}
                {i === 4 && "Preferences"}
                {i === 5 && "Contact"}
              </span>
              {i < 5 && (
                <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 ${step > i ? 'bg-primary' : 'bg-surface-variant'}`} style={{ width: '100%' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">Step 1 — Tell Us About Your Trip</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-headline-sm mb-4">When are you planning to visit Lombok?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="font-label-md text-on-surface-variant mb-2">Arrival Date</label>
                    <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-md text-on-surface-variant mb-2">Departure Date</label>
                    <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">How many travelers?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['1', '2', '3–5', '6+'].map((opt) => (
                    <label key={opt} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.travelers === opt ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="travelers" value={opt} checked={formData.travelers === opt} onChange={handleChange} className="hidden" />
                      <span className="font-label-lg">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">Where are you staying?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Hotel', 'Villa', 'Airbnb', "Haven't booked yet"].map((opt) => (
                    <label key={opt} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.accommodation === opt ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="accommodation" value={opt} checked={formData.accommodation === opt} onChange={handleChange} className="hidden" />
                      <span className="font-label-md">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">Step 2 — What Would You Like to Experience?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Beaches', 'Island Hopping', 'Snorkeling', 'Scuba Diving',
                'Waterfalls', 'Hiking', 'Culture & Heritage', 'Local Food',
                'Photography', 'Surfing', 'Honeymoon', 'Family Trip',
                'Hidden Gems', 'Relaxation'
              ].map((exp) => (
                <label key={exp} className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all ${formData.experiences.includes(exp) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                  <input type="checkbox" checked={formData.experiences.includes(exp)} onChange={() => handleCheckbox('experiences', exp)} className="w-5 h-5 accent-primary rounded" />
                  <span className="font-body-md text-on-surface">{exp}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">Step 3 — Places You'd Like to Visit</h2>
            <p className="text-on-surface-variant font-body-md mb-6">Select destinations</p>
            
            <div className="space-y-8">
              {[
                { region: 'South Lombok', places: ['Kuta Mandalika', 'Tanjung Aan', 'Merese Hill', 'Selong Belanak', 'Mawun'] },
                { region: 'Gili Islands', places: ['Gili Trawangan', 'Gili Air', 'Gili Meno'] },
                { region: 'Secret Islands', places: ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'] },
                { region: 'East Lombok', places: ['Pink Beach', 'Gili Petelu', 'Gili Pasir', 'Gili Kondo'] },
                { region: 'Mountains & Waterfalls', places: ['Benang Kelambu', 'Benang Stokel', 'Sendang Gile', 'Tiu Kelep', 'Sembalun', 'Bukit Selong'] },
              ].map((group) => (
                <div key={group.region}>
                  <h3 className="font-headline-sm mb-4 border-b border-outline-variant pb-2">{group.region}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {group.places.map((place) => (
                      <label key={place} className={`cursor-pointer flex items-center gap-3 p-3 rounded-lg border transition-all ${formData.destinations.includes(place) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                        <input type="checkbox" checked={formData.destinations.includes(place)} onChange={() => handleCheckbox('destinations', place)} className="w-4 h-4 accent-primary rounded" />
                        <span className="font-body-md text-on-surface">{place}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">Step 4 — Travel Preferences</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-headline-sm mb-4">Services Needed</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Airport Transfer', 'Private Driver', 'English-speaking Guide',
                    'Snorkeling Equipment', 'Private Boat', 'Drone Photography', 'Professional Photographer'
                  ].map((service) => (
                    <label key={service} className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all ${formData.services.includes(service) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                      <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleCheckbox('services', service)} className="w-5 h-5 accent-primary rounded" />
                      <span className="font-body-md text-on-surface">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">Vehicle Preference</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Standard MPV', 'Premium MPV', 'Luxury SUV', 'Minibus'].map((opt) => (
                    <label key={opt} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.vehicle === opt ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="vehicle" value={opt} checked={formData.vehicle === opt} onChange={handleChange} className="hidden" />
                      <span className="font-label-md">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">Estimated Budget (Per Pax)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Under US$100', 'US$100–250', 'US$250–500', 'US$500+'].map((opt) => (
                    <label key={opt} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.budget === opt ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="budget" value={opt} checked={formData.budget === opt} onChange={handleChange} className="hidden" />
                      <span className="font-label-md">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">Step 5 — Contact Details</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Nationality</label>
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">WhatsApp (Optional)</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" />
                </div>
              </div>

              <div className="flex flex-col group pt-4">
                <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Special Requests</label>
                <textarea 
                  name="specialRequests" 
                  value={formData.specialRequests} 
                  onChange={handleChange} 
                  rows={4} 
                  className="form-underline font-body-md text-on-surface p-3 border border-outline focus:border-primary outline-none bg-transparent rounded-lg resize-none"
                  placeholder="Examples: Vegetarian meals, Child seat, Anniversary trip, Birthday surprise, Flight number, Hotel pickup details..."
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 pt-8 border-t border-outline-variant mt-12">
          {step > 1 ? (
            <button type="button" onClick={handlePrev} className="w-full md:w-auto px-8 py-3 border border-outline-variant text-on-surface-variant font-label-lg rounded-full hover:bg-surface-variant transition-colors">
              Back
            </button>
          ) : <div className="hidden md:block"></div>}
          
          {step < 5 ? (
            <button type="button" onClick={handleNext} className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-lg rounded-full hover:bg-primary/90 transition-colors shadow-md">
              Next Step
            </button>
          ) : (
            <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-lg rounded-full hover:bg-primary/90 transition-colors shadow-md">
              Create My Personalized Itinerary
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
