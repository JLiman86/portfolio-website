import Person from "../assets/img/about.webp";
import Banner from "../assets/img/outline-text/about.svg"

const About = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="rounded-2xl overflow-hidden flex items-center justify-center">
            <img src={Person} alt="" />
          </div>
        </div>
        <div className="relative  flex flex-col items-center md:items-start md:pl-10 justify-center mt-10 md:mt-0">
          <h2 className="font-secondary text-3xl font-bold">Jane Doe</h2>
          <h3 className="text-accent mt-3 mb-6">Freelance Web Developer</h3>
          <p className="text-paragraph text-sm text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae aperiam commodi, voluptatem quo aliquid dolore
            distinctio suscipit est architecto ipsa dolorem assumenda, ab omnis
            voluptas!
          </p>
          <button className="bg-accent hover:bg-accent-hover py-2 px-4 mt-5">Contact me</button>
          <img className="hidden md:block md:h-[30px] lg:h-[50px] xl:h-auto absolute top-0 right-0" src={Banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
