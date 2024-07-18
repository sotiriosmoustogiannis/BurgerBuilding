import React, { useState } from 'react';
import useFetchIngredients from '../../hooks/api/useFetchIngredients';
import { Ingredient } from '../../interfaces/burgerType';
import BurgerPreview from './BurgerPreview';
import IngredientList from './IngredientList';
import './BurgerBuilder.css';
import { Spinner } from 'react-bootstrap';

const BurgerBuilder: React.FC = () => {
  const [burgerIngredients, setBurgerIngredients] = useState<Ingredient[]>([]);
  const { ingredients, isLoading, error } = useFetchIngredients();
  
  const addIngredientHandler = (ingredient: Ingredient) => {
    setBurgerIngredients([...burgerIngredients, ingredient]);
  };

  const removeIngredientHandler = (index: number) => {
    const updatedIngredients = burgerIngredients.filter((_, i) => i !== index);
    setBurgerIngredients(updatedIngredients);
  };

  return (
    !isLoading ? (
      <div className="burger-builder">
        <div className="ingredient-list">
          <IngredientList ingredients={ingredients} error={error} onIngredientClick={addIngredientHandler} />
        </div>
        <div className="burger-preview">
          <BurgerPreview ingredients={burgerIngredients} onIngredientClick={removeIngredientHandler} />
        </div>
      </div>) : <div className='spinner'><Spinner animation="border" /></div>
  );
};

export default BurgerBuilder;
