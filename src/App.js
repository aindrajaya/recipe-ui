import React from 'react';
import {RandomMeal} from "./components";

function App() {
  return (
    <div className="App">
      hello recipe
      <section className="container">
      <h2>Featured Meal</h2>
        <RandomMeal />
      </section>
    </div>
  );
}

export default App;

//TODOS
// 1. Search for Meals
// 2. Display the Result
// 3. Featured Meals
// 4. Favorite recipe