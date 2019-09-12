/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients) // ["salad", "bacon", "cheese", "meat"]
        .map(key=>{
            return [...Array(props.ingredients[key])] // [,]
                .map((value, i)=>{
                    return <BurgerIngredient key={key+i} type={key}/>
                })
        }).reduce((arr, el)=>{
            return arr.concat(el);
        }, []);

    if(ingredients.length===0){
        ingredients = <p>Please select ingredients</p>
    }

    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;