import { useState } from "react";

const testimonials = [
  {
    text: `We have been working with Positivus for the past year and have seen a significant 
increase in website traffic and leads as a result of their efforts. The team is 
professional, responsive, and truly cares about the success of our business. We highly 
recommend Positivus to any company looking to grow their online presence.`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `Their insights, dedication, and communication make them the best agency we’ve worked 
with. They consistently deliver great results and meaningful progress.`,
    name: "Sarah Johnson",
    role: "CEO at BlueTech",
  },
  {
    text: `Amazing service! They helped us scale with confidence and clarity. Love their approach 
to optimization and reporting.`,
    name: "David Wilson",
    role: "Founder at DigitalFlow",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-[#0d0e15] rounded-3xl p-10 text-white relative overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 px-10">

            {/* CARD */}
            <div className="relative border border-lime-400 p-10 rounded-3xl">
              <p className="text-sm leading-relaxed opacity-90">{t.text}</p>

              {/* BUBBLE TAIL */}
              <div className="absolute left-20 -bottom-3 w-6 h-6 bg-[#0d0e15] border-l border-b border-lime-400 rotate-45"></div>

              <div className="mt-8">
                <p className="text-lime-400 font-semibold">{t.name}</p>
                <p className="text-sm opacity-70">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-lime-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-8 bottom-8 text-gray-400 hover:text-white text-xl"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-8 bottom-8 text-gray-400 hover:text-white text-xl"
      >
        →
      </button>
    </div>
  );
}
