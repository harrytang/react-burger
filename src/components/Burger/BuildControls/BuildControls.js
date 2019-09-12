/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
];

const buildControls = (props) => {
    return (
        <div>
            <h2>Price: ${props.price.toFixed(2)}</h2>
            {controls.map(ctl => (
                <BuildControl
                    key={ctl.label}
                    ctl={ctl}
                    disabled={props.disabledInfo[ctl.type]}
                    added={() => props.ingredientAdded(ctl.type)}
                    removed={() => props.ingredientRemoved(ctl.type)}
                />
            ))}
        </div>
    );
};

export default buildControls;