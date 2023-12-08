import Logo from '../assets/img/outline-text/testimonials.svg'
import Slider from '../components/Slider'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto pt-20 pb-10">
        <div className="max-w-[700px] mx-auto text-center relative">
          <h2 className="font-secondary text-3xl font-semibold pt-8">
            What other people say
          </h2>
          <p className="text-paragraph text-sm mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            consequuntur amet, quos voluptatum animi culpa! Ea libero
            exercitationem cupiditate nulla!
          </p>
          <img className="absolute top-0 left-0 w-full" src={Logo} alt="" />
        </div>

        <Slider/>
      </div>
    </section>
  );
}

export default Testimonials