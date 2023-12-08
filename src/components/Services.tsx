import Logo from "../assets/img/outline-text/services.svg";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="bg-tertiary">
      <div className="container mx-auto pt-20 pb-10">
        <div className="max-w-[500px] mx-auto text-center relative">
          <h2 className="font-secondary text-3xl font-semibold pt-8">
            What I do for clients
          </h2>
          <p className="text-paragraph text-sm my-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            consequuntur amet, quos voluptatum animi culpa! Ea libero
            exercitationem cupiditate nulla!
          </p>
          <img className="absolute top-0 left-0 w-full" src={Logo} alt="" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24 gap-10">
          {services.map((service, idx) => {
            return (
              <li className="bg-secondary p-6 rounded-xl" key={idx}>
                <div className="text-accent">{service.icon}</div>
                <h3 className="mt-16 mb-4 font-secondary text-xl font-semibold">{service.name}</h3>
                <p className="text-sm">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
