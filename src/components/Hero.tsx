import Person from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto pt-[69px] grid grid-cols-1 md:grid-cols-2 pb-10 md:pb-0">
        <div className="flex flex-col items-center md:items-start justify-center pt-10 ">
          <h3 className="text-accent">Hey, I'm Jane 👋</h3>
          <h1 className="text-center md:text-left font-secondary text-5xl mt-2  mb-5 leading-[60px]">
            I Build & Design <br />
            Web Interfaces
          </h1>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            cupiditate?
          </p>
          <button className="bg-accent px-4 py-2 mt-16 hover:bg-accent-hover">Work with me</button>
        </div>
        <div className="md:flex items-center justify-center hidden">
          <img src={Person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
