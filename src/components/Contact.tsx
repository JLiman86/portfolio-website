import Logo from "../assets/img/outline-text/contact.svg";

const Contact = () => {
  return (
    <section id="contact" className="bg-tertiary">
      <div className="container mx-auto pt-20 pb-10">
        <div className="max-w-[500px] mx-auto text-center relative">
          <h2 className="font-secondary text-3xl font-semibold pt-8">
            Contact Me
          </h2>
          <p className="text-paragraph text-sm my-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            consequuntur amet, quos voluptatum animi culpa! Ea libero
            exercitationem cupiditate nulla!
          </p>
          <img className="absolute top-0 left-0 w-full" src={Logo} alt="" />
        </div>

        <form className="mt-20 max-w-[800px] mx-auto text-paragraph mb-10">
          <div className="grid grid-cols-2 gap-5 ">
            <input
              placeholder="Your name"
              className="p-3 bg-zinc-800 outline-none"
              type="text"
            />
            <input
              placeholder="Your email"
              className="p-3 bg-zinc-800 outline-none"
              type="email"
            />
          </div>
          <div>
            <input
              className="w-full mt-5 p-3 bg-zinc-800 outline-none"
              placeholder="Subject"
              type="text"
            />
          </div>
          <div>
            <textarea placeholder="Your message" className="w-full mt-5 p-3 bg-zinc-800 outline-none min-h-[200px]"></textarea>
          </div>

          <button className="hover:bg-accent-hover px-4 py-2 bg-accent mt-5 text-slate-100">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
