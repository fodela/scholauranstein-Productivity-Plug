import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonies = [
  {
    name: "Delali Dogbevi",
    title: "Dr.",
    content:
      "I can't believe I waited so long to get this laptop stand! It's sturdy, adjustable, and has really improved my posture while working. Plus, the added airflow keeps my laptop from overheating. Definitely a must-have for anyone who spends a lot of time on their computer.",
    position: "Doctor",
    institution: "HTH",
  },
  {
    name: "ADU APPIAH KUBI",
    title: "Dr.",
    content:
      "The built-in USB fan keeps me cool on hot nights, and the light is perfect for reading before bed. It's super handy for charging my devices while I relax. Highly recommend it!",
    position: "Specialist",
    institution: "HTH",
  },
  {
    name: "Joana Doe",
    title: "Ms.",
    content:
      "This wall mount accessory holder is fantastic! It keeps my phone safe and easily accessible while I'm busy cooking or working. Installation was a breeze, and now I can keep my phone within reach without cluttering up my counter space.",
    position: "Student",
    institution: "UHAS",
  },
];
const TestimonialSection = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  let testimony = testimonies[testimonyIndex];
  useEffect(() => {
    const switchTestimonialInterval = setInterval(
      () => setTestimonyIndex((testimonyIndex + 1) % testimonies.length),
      5000
    );
    return () => clearInterval(switchTestimonialInterval);
  });
  return (
    <section
      id="testimonials"
      className="py-16 scroll-smooth scroll-mt-24 flex flex-col items-center w-full overflow-hidden"
      key={testimonyIndex}
    >
      <header className="items-center gap-4">
        <FaQuoteLeft size={25} />
        <h2 className="capitalize text-center text-2xl text-primary mb-10">
          What our customers are saying
        </h2>
      </header>
      <div className="text-center text-primary max-w-xl animateCarousel ">
        <p className="text-grey_main">
          {testimony.title} {testimony.name}
        </p>
        <p className="text-lg sm:text-xl mb-4 mt-3 h-64 md:h-36 flex items-center">
          {" "}
          {testimony.content}
        </p>
        <p>
          {testimony.position},{" "}
          <span className="text-grey_main">{testimony.institution}</span>
        </p>
      </div>
      <div className="flex gap-2  mt-8">
        {testimonies.map((_, index) => (
          <button
            key={index}
            className={`${
              testimonyIndex === index && "scaleCarousel"
            } h-3 w-3 rounded-full bg-primary transition-all`}
            onClick={() => setTestimonyIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
