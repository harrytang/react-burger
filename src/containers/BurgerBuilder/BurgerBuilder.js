/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {Component} from "react";
import Aux from '../../hoc/Aux'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;