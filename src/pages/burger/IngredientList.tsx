import React from 'react';
import { Ingredient } from '../../interfaces/burgerType';
import { ListGroup, Button, Alert } from 'react-bootstrap';

interface IngredientListProps {
  ingredients: Ingredient[];
  error: string | null;
  onIngredientClick: (ingredient: Ingredient) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, error, onIngredientClick }) => {

  const handleClick = (ingredient: Ingredient) => {
    onIngredientClick(ingredient);
  };

  return (
    <div>
      <h2 className="text-center">Available Ingredients</h2>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {ingredients &&
        <ListGroup>
          {ingredients.map((ingredient) => (
            <ListGroup.Item key={ingredient.id} className="d-flex justify-content-between align-items-center">
              <span>{ingredient.name}</span>
              <Button variant="primary" onClick={() => handleClick(ingredient)}>Add</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      }
    </div>
  );
};

export default IngredientList;
