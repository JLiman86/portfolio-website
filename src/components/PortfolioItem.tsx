type PortfolioItemType = {
  project: {
    id: string;
    image: string;
    name: string;
    category: string;
  };
};

const PortfolioItem = ({ project }: PortfolioItemType) => {
  const { id, image, category, name } = project;
  return (
    <li key={id}>
      <img className="w-full rounded-2xl" src={image} alt="" />

      <h3 className="text-accent mt-10 mb-5 capitalize">{category}</h3>
      <h2 className="capitalize text-2xl font-secondary ">{name}</h2>
    </li>
  );
};

export default PortfolioItem;
