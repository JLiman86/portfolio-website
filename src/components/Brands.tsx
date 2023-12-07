import { brands } from "../data";

const Brands = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto flex flex-wrap items-center justify-evenly py-10">
        {brands.map((brand, idx) => (
          <div key={idx}>
            <img key={idx} src={brand.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
