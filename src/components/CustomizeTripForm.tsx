"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dictionary } from '@/dictionaries';

type FormData = {
  arrivalDate: string;
  departureDate: string;
  travelers: string;
  accommodation: string;
  experiences: string[];
  destinations: string[];
  services: string[];
  vehicle: string;
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
  fullName: '',
  nationality: '',
  email: '',
  whatsapp: '',
  specialRequests: '',
};

function DestinationCard({
  place,
  isSelected,
  onToggle,
}: {
  place: string;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  let images = ['/assets/mandalika1.jpeg', '/assets/mandalika2.jpeg'];
  if (place === 'Tanjung Aan') {
    images = ['/assets/aan1.jpeg', '/assets/aan2.jpeg'];
  } else if (place === 'Merese Hill') {
    images = ['/assets/merese1.jpeg', '/assets/merese2.jpeg'];
  } else if (place === 'Selong Belanak') {
    images = ['/assets/selong1.jpeg', '/assets/selong2.jpeg'];
  } else if (place === 'Mawun') {
    images = ['/assets/mawun1.jpeg', '/assets/mawun2.jpeg'];
  } else if (place === 'Gili Trawangan') {
    images = ['/assets/gili1.jpeg', '/assets/gili2.jpeg', '/assets/gili3.jpeg'];
  } else if (place === 'Gili Air') {
    images = ['/assets/giliair1.jpeg', '/assets/giliair2.jpeg'];
  } else if (place === 'Gili Meno') {
    images = ['/assets/meno1.jpeg', '/assets/meno2.jpeg'];
  } else if (place === 'Gili Nanggu') {
    images = ['/assets/naggu1.jpeg', '/assets/naggu2.jpeg'];
  } else if (place === 'Gili Sudak') {
    images = ['/assets/sudak1.jpeg', '/assets/sudak2.jpeg'];
  } else if (place === 'Gili Kedis') {
    images = ['/assets/kedis1.jpeg', '/assets/kedis2.jpeg'];
  } else if (place === 'Pink Beach') {
    images = ['/assets/pink1.jpeg', '/assets/pink2.jpeg', '/assets/pink3.jpeg'];
  } else if (place === 'Gili Petelu') {
    images = ['/assets/petelu1.jpeg', '/assets/petelu2.jpeg'];
  } else if (place === 'Gili Pasir') {
    images = ['/assets/pasir1.jpeg', '/assets/pasir2.jpeg'];
  } else if (place === 'Gili Kondo') {
    images = ['/assets/kondo1.jpeg', '/assets/kondo2.jpeg'];
  } else if (place === 'Benang Kelambu') {
    images = ['/assets/kelambu1.jpeg', '/assets/kelambu2.jpeg'];
  } else if (place === 'Benang Stokel') {
    images = ['/assets/stokel1.jpeg', '/assets/stokel2.jpeg'];
  } else if (place === 'Sendang Gile') {
    images = ['/assets/gile1.jpeg', '/assets/gile2.jpeg'];
  } else if (place === 'Tiu Kelep') {
    images = ['/assets/tiu1.jpeg', '/assets/tiu2.jpeg'];
  } else if (place === 'Sembalun') {
    images = ['/assets/sembalun1.jpeg', '/assets/sembalun2.jpeg'];
  } else if (place === 'Bukit Selong') {
    images = ['/assets/selon1.jpeg', '/assets/selon2.jpeg'];
  }

  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer group/card rounded-xl border overflow-hidden transition-all duration-300 hover-lift ${isSelected ? 'border-primary bg-primary/5 shadow-md ring-1 ring-primary' : 'border-outline-variant hover:border-primary/50 bg-surface'}`}
    >
      <div
        className="relative w-full h-36 sm:h-44 overflow-hidden group/img select-none"
        onMouseLeave={() => setActiveSlide(0)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(activeSlide * 100) / images.length}%)`,
          }}
        >
          {images.map((imgSrc, idx) => (
            <div
              key={imgSrc}
              className="h-full relative"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={imgSrc}
                alt={`${place} - ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className="flex-1 h-full"
              onMouseEnter={() => setActiveSlide(idx)}
              onClick={() => { }}
            />
          ))}
        </div>

        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-label-sm tracking-wide opacity-90 z-20 pointer-events-none">
          <span>
            {activeSlide + 1} / {images.length}
          </span>
        </div>

        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-20 pointer-events-none">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${activeSlide === idx ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <div className="p-3.5 flex items-center gap-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => { }}
          className="w-5 h-5 accent-primary rounded pointer-events-none"
        />
        <span className="font-body-md font-medium text-on-surface line-clamp-1">{place}</span>
      </div>
    </div>
  );
}

export default function CustomizeTripForm({ dict }: { dict?: Dictionary['customize'], lang?: string }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      alert(dict?.alertSuccess || "Thank you! Your personalized itinerary request has been successfully submitted and saved.");
      router.push('/');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(dict?.alertError || "Something went wrong while sending your request. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
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
                {i === 1 && (dict?.step1Nav || "About Trip")}
                {i === 2 && (dict?.step2Nav || "Experiences")}
                {i === 3 && (dict?.step3Nav || "Places")}
                {i === 4 && (dict?.step4Nav || "Preferences")}
                {i === 5 && (dict?.step5Nav || "Contact")}
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
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">{dict?.step1Title || "Step 1 — Tell Us About Your Trip"}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-headline-sm mb-4">{dict?.whenVisit || "When are you planning to visit Lombok?"}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="font-label-md text-on-surface-variant mb-2">{dict?.arrivalDate || "Arrival Date"}</label>
                    <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-md text-on-surface-variant mb-2">{dict?.departureDate || "Departure Date"}</label>
                    <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">{dict?.howMany || "How many travelers?"}</h3>
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
                <h3 className="font-headline-sm mb-4">{dict?.whereStaying || "Where are you staying?"}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'Hotel', label: dict?.accHotel || 'Hotel' },
                    { id: 'Villa', label: dict?.accVilla || 'Villa' },
                    { id: 'Airbnb', label: dict?.accAirbnb || 'Airbnb' },
                    { id: "Haven't booked yet", label: dict?.accNotBooked || "Haven't booked yet" }
                  ].map((opt) => (
                    <label key={opt.id} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.accommodation === opt.id ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="accommodation" value={opt.id} checked={formData.accommodation === opt.id} onChange={handleChange} className="hidden" />
                      <span className="font-label-md">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">{dict?.step2Title || "Step 2 — What Would You Like to Experience?"}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: 'Beaches', label: dict?.expBeaches || 'Beaches' },
                { id: 'Island Hopping', label: dict?.expIslandHopping || 'Island Hopping' },
                { id: 'Snorkeling', label: dict?.expSnorkeling || 'Snorkeling' },
                { id: 'Scuba Diving', label: dict?.expScubaDiving || 'Scuba Diving' },
                { id: 'Waterfalls', label: dict?.expWaterfalls || 'Waterfalls' },
                { id: 'Hiking', label: dict?.expHiking || 'Hiking' },
                { id: 'Culture & Heritage', label: dict?.expCulture || 'Culture & Heritage' },
                { id: 'Local Food', label: dict?.expLocalFood || 'Local Food' },
                { id: 'Photography', label: dict?.expPhotography || 'Photography' },
                { id: 'Surfing', label: dict?.expSurfing || 'Surfing' },
                { id: 'Honeymoon', label: dict?.expHoneymoon || 'Honeymoon' },
                { id: 'Family Trip', label: dict?.expFamilyTrip || 'Family Trip' },
                { id: 'Hidden Gems', label: dict?.expHiddenGems || 'Hidden Gems' },
                { id: 'Relaxation', label: dict?.expRelaxation || 'Relaxation' }
              ].map((exp) => (
                <label key={exp.id} className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all ${formData.experiences.includes(exp.id) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                  <input type="checkbox" checked={formData.experiences.includes(exp.id)} onChange={() => handleCheckbox('experiences', exp.id)} className="w-5 h-5 accent-primary rounded" />
                  <span className="font-body-md text-on-surface">{exp.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">{dict?.step3Title || "Step 3 — Places You'd Like to Visit"}</h2>
            <p className="text-on-surface-variant font-body-md mb-6">{dict?.selectDest || "Select destinations"}</p>

            <div className="space-y-8">
              {[
                { region: dict?.regionSouth || 'South Lombok', places: ['Kuta Mandalika', 'Tanjung Aan', 'Merese Hill', 'Selong Belanak', 'Mawun'] },
                { region: dict?.regionGili || 'Gili Islands', places: ['Gili Trawangan', 'Gili Air', 'Gili Meno'] },
                { region: dict?.regionSecret || 'Secret Islands', places: ['Gili Nanggu', 'Gili Sudak', 'Gili Kedis'] },
                { region: dict?.regionEast || 'East Lombok', places: ['Pink Beach', 'Gili Petelu', 'Gili Pasir', 'Gili Kondo'] },
                { region: dict?.regionMountains || 'Mountains & Waterfalls', places: ['Benang Kelambu', 'Benang Stokel', 'Sendang Gile', 'Tiu Kelep', 'Sembalun', 'Bukit Selong'] },
              ].map((group, idx) => (
                <div key={idx}>
                  <h3 className="font-headline-sm mb-4 border-b border-outline-variant pb-2">{group.region}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {group.places.map((place) => (
                      <DestinationCard
                        key={place}
                        place={place}
                        isSelected={formData.destinations.includes(place)}
                        onToggle={() => handleCheckbox('destinations', place)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">{dict?.step4Title || "Step 4 — Travel Preferences"}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-headline-sm mb-4">{dict?.servicesNeeded || "Services Needed"}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: 'Airport Transfer', label: dict?.srvAirport || 'Airport Transfer' },
                    { id: 'Private Driver', label: dict?.srvDriver || 'Private Driver' },
                    { id: 'Snorkeling Equipment', label: dict?.srvSnorkeling || 'Snorkeling Equipment' },
                    { id: 'Private Boat', label: dict?.srvBoat || 'Private Boat' }
                  ].map((service) => (
                    <label key={service.id} className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all ${formData.services.includes(service.id) ? 'border-primary bg-primary/5' : 'border-outline-variant hover:border-primary/50'}`}>
                      <input type="checkbox" checked={formData.services.includes(service.id)} onChange={() => handleCheckbox('services', service.id)} className="w-5 h-5 accent-primary rounded" />
                      <span className="font-body-md text-on-surface">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-headline-sm mb-4">{dict?.vehiclePref || "Vehicle Preference"}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'Standard MPV', label: dict?.vehStandard || 'Standard MPV' },
                    { id: 'Premium MPV', label: dict?.vehPremium || 'Premium MPV' },
                    { id: 'Luxury SUV', label: dict?.vehLuxury || 'Luxury SUV' },
                    { id: 'Minibus', label: dict?.vehMinibus || 'Minibus' }
                  ].map((opt) => (
                    <label key={opt.id} className={`cursor-pointer border p-4 rounded-xl text-center transition-all ${formData.vehicle === opt.id ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant hover:border-primary/50 text-on-surface'}`}>
                      <input type="radio" name="vehicle" value={opt.id} checked={formData.vehicle === opt.id} onChange={handleChange} className="hidden" />
                      <span className="font-label-md">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="font-headline-md text-3xl mb-8 text-on-surface">{dict?.step5Title || "Step 5 — Contact Details"}</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{dict?.fullName || "Full Name"}</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{dict?.nationality || "Nationality"}</label>
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{dict?.email || "Email"}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" required />
                </div>
                <div className="flex flex-col group">
                  <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{dict?.whatsapp || "WhatsApp (Optional)"}</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="form-underline font-body-md text-on-surface p-2 border-b border-outline focus:border-primary outline-none bg-transparent" />
                </div>
              </div>

              <div className="flex flex-col group pt-4">
                <label className="font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">{dict?.specialRequests || "Special Requests"}</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="form-underline font-body-md text-on-surface p-3 border border-outline focus:border-primary outline-none bg-transparent rounded-lg resize-none"
                  placeholder={dict?.specialReqPlaceholder || "Examples: Vegetarian meals, Child seat, Anniversary trip, Birthday surprise, Flight number, Hotel pickup details..."}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 pt-8 border-t border-outline-variant mt-12">
          {step > 1 ? (
            <button type="button" onClick={handlePrev} className="w-full md:w-auto px-8 py-3 border border-outline-variant text-on-surface-variant font-label-lg rounded-full hover:bg-surface-variant transition-colors">
              {dict?.btnBack || "Back"}
            </button>
          ) : <div className="hidden md:block"></div>}

          {step < 5 ? (
            <button type="button" onClick={handleNext} className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-lg rounded-full hover:bg-primary/90 transition-colors shadow-md">
              {dict?.btnNext || "Next Step"}
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary font-label-lg rounded-full hover:bg-primary/90 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? (dict?.btnSubmitting || "Submitting...") : (dict?.btnSubmit || "Create My Personalized Itinerary")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
