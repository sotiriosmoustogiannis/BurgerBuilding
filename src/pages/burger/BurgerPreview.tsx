import { Ingredient } from "../../interfaces/burgerType";
import appConfig from "../../configs/appConfig";
import "./BurgerPreview.css";

interface BurgerPreviewProps {
  ingredients: Ingredient[];
  onIngredientClick: (index: number) => void;
}

const BurgerPreview: React.FC<BurgerPreviewProps> = ({
  ingredients,
  onIngredientClick,
}) => {
  return (
    <div>
      <h2>Burger Preview</h2>
      {ingredients.length === 0 ? (
        <p>Add ingredients to build your burger!</p>
      ) : null}
      <div className="burger-preview">
        <img
          className="bun-top"
          src={`${appConfig.API_BASE_URL}/img/bun_top.png`}
          alt="Top Bun"
        />
        {ingredients.map((ingredient, index) => (
          <img
            key={index}
            style={{ zIndex: index < 1000 ? 1000 - index : 0 }}
            className={
              ingredient.id === 1
                ? "patty-ingredient"
                : ingredient.id === 2
                ? "bacon-ingredient"
                : "egg-ingredient"
            }
            src={`${appConfig.API_BASE_URL}/img/${ingredient.src}`}
            alt={ingredient.name}
            onClick={() => onIngredientClick(index)}
          />
        ))}
        <img
          className="bun-bottom"
          src={`${appConfig.API_BASE_URL}/img/bun_bottom.png`}
          alt="Bottom Bun"
        />
      </div>
    </div>
  );
};

export default BurgerPreview;
