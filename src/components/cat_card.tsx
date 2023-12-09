import CatImage from "./cat_image";
import cat1 from "../assets/images/cat1.jpg";

interface catCardCProps {
  name: string;
  species: string;
  favFoods: string[];
  date: number;
}

const CatCard: React.FC<catCardCProps> = (cat) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    cat
  );

  return (
    <div className="card">
      <h3 className="card__text card__header">{cat.name}</h3>
      <p className="card__text">Species: {cat.species}</p>
      <CatImage image={cat1} altText="image for cat 1" />
      <p className="card__text">favFoods: {cat.favFoods}</p>
      <p className="card__text">Date: {cat.date}</p>
    </div>
  );
};

export default CatCard;
