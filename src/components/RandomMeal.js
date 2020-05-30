import React, {useState, useEffect} from 'react'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
    const [meal, setMeal] = useState(undefined);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(res => {
                setMeal(res.meals[0]);
            })
    }, [])

    if(!meal) return null;

    return(
        <h1>{meal.strMeal}</h1>
    )
}

export default RandomMeal;