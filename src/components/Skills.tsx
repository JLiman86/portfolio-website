import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto grid grid-cols-8  py-10">
        {skills.map((skill, idx) => (
          <img key={idx} src={skill.image} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
