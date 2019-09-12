/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";

const PRICES = {
    meat: 1.3,
    bacon: 0.7,
    cheese: 0.4,
    salad: 0.5
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4
    };

    addIngredientHandler = (type) => {
        const oldPrice = this.state.price;
        const currentIngredients = {...this.state.ingredients};

        const oldCount = currentIngredients[type];
        currentIngredients[type] = oldCount + 1;

        const newPrice = oldPrice + PRICES[type];

        this.setState({
            price: newPrice,
            ingredients: currentIngredients
        })

    };

    removeIngredientHandler = (type) => {
        const oldPrice = this.state.price;
        const currentIngredients = {...this.state.ingredients};

        const oldCount = currentIngredients[type];
        if (oldCount < 1) {
            return;
        }

        currentIngredients[type] = oldCount - 1;

        const newPrice = oldPrice - PRICES[type];

        this.setState({
            price: newPrice,
            ingredients: currentIngredients
        })
    };

    render() {
        const disabledInfo = {...this.state.ingredients};

        for (let name in disabledInfo) {
            disabledInfo[name] = disabledInfo[name] < 1
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    disabledInfo={disabledInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.price}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;