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
  return (
    <section id="testimonials" className="py-16 scroll-smooth scroll-mt-24">
      <div className="text-center text-primary max-w-xl  mx-auto">
        <p>
          {testimonies[2].title} {testimonies[2].name}
        </p>
        <p className="text-xl mb-4"> {testimonies[2].content}</p>
        <p>
          {testimonies[2].position},{" "}
          <span className="text-grey_main">{testimonies[2].institution}</span>
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
