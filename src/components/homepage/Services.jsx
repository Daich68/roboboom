import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Robotics",
    "STEM Education",
    "Coding and Programming Classes",
    "Hands-on Projects",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Python",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <ServiceUi
          title="our expertise"
          description="At our robotics school, we are dedicated to inspiring young minds through innovative robotics education. Our goal is to provide engaging and hands-on experiences that elevate each student's understanding of technology and creativity."

          items={expertiseItems}
        />
        <ServiceUi
          title="digital tool box"
          description="These are the key tools and technologies we use to bring our robotics projects to life. We are always eager to learn more about our current tools and explore new technologies that can enhance our students' learning experiences."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
